// scripts/snapshots.ts
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { PROJECTS, WEB_APPS } from "../src/data/projects";

// Объединяем все проекты
const ALL_PROJECTS = [...PROJECTS, ...WEB_APPS];

// === Настройки превью ===
const VIEWPORT_W = 1440; // ширина вьюпорта
const VIEWPORT_H = 900; // высота вьюпорта (что попадёт в кадр)
const DPR = 2; // чёткость. 2 = «ретина» (получится крупнее, но резче)
const OUT_WIDTH = 1200; // итоговая ширина webp (масштабирование sharp)

const OUT_DIR = join(process.cwd(), "public", "previews");

async function shot() {
    mkdirSync(OUT_DIR, { recursive: true });

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: VIEWPORT_W, height: VIEWPORT_H },
        deviceScaleFactor: DPR,
        colorScheme: "light",
        userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
    });

    for (const p of ALL_PROJECTS) {
        const page = await context.newPage();
        try {
            console.log("→", p.slug, p.url);

            await page.goto(p.url, {
                waitUntil: "networkidle",
                timeout: 60_000,
            });

            // На всякий: точно в начало страницы
            await page.evaluate(() => window.scrollTo(0, 0));

            // Чутка подождать шрифты/геро-анимации
            await page.waitForTimeout(700);

            // Отключаем анимации и прячем скроллбар, чтобы не «мыло»
            await page.addStyleTag({
                content: `
          * { animation: none !important; transition: none !important; }
          html, body { scrollbar-width: none; }
          ::-webkit-scrollbar { display: none; }
        `,
            });

            // Если мешают cookie/чат-виджеты — можно мягко скрыть типичные селекторы
            await page.addStyleTag({
                content: `
          [id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"],
          [id*="gdpr"], [class*="gdpr"], [class*="chat-widget"], [id*="chat"]
          { display: none !important; visibility: hidden !important; }
        `,
            });

            // Снимаем ТОЛЬКО вьюпорт (по умолчанию fullPage=false)
            const pngBuf = await page.screenshot({
                type: "png",
                fullPage: false,
            });

            // Конвертируем в webp и приводим к общей ширине
            const outWebp = join(OUT_DIR, `${p.slug}.webp`);
            const sharpPipeline = sharp(pngBuf);
            const meta = await sharpPipeline.metadata();

            const width = meta.width ?? VIEWPORT_W * DPR;
            const needResize = width !== OUT_WIDTH;

            const webp = needResize
                ? await sharpPipeline
                      .resize({ width: OUT_WIDTH })
                      .webp({ quality: 85 })
                      .toBuffer()
                : await sharpPipeline.webp({ quality: 85 }).toBuffer();

            await sharp(webp).toFile(outWebp);
            console.log("✓ saved", outWebp);
        } catch (e) {
            console.error("✗ failed", p.slug, e);
        } finally {
            await page.close();
        }
    }

    await context.close();
    await browser.close();
}

shot();
