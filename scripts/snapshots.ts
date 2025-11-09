import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { PROJECTS } from "../src/data/projects";

const OUT_DIR = join(process.cwd(), "public", "previews");

async function shot() {
    mkdirSync(OUT_DIR, { recursive: true });

    const browser = await chromium.launch();
    const ctx = await browser.newContext({
        viewport: { width: 1366, height: 768 },
        deviceScaleFactor: 1,
    });

    for (const p of PROJECTS) {
        const page = await ctx.newPage();
        try {
            console.log("→", p.slug, p.url);
            await page.goto(p.url, {
                waitUntil: "networkidle",
                timeout: 60_000,
            });
            await page.waitForTimeout(800); // шрифты/анимации

            // Снимаем PNG (по умолчанию)…
            const pngBuf = await page.screenshot({
                fullPage: true, // поставь false, если нужен только первый экран
            });

            // …и конвертируем в WEBP
            const outWebp = join(OUT_DIR, `${p.slug}.webp`);
            await sharp(pngBuf).webp({ quality: 85 }).toFile(outWebp);

            console.log("✓ saved", outWebp);
        } catch (e) {
            console.error("✗ failed", p.slug, e);
        } finally {
            await page.close();
        }
    }

    await ctx.close();
    await browser.close();
}

shot();
