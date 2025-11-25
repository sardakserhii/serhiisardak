// scripts/create-fallback.ts
import sharp from "sharp";
import { join } from "node:path";

const OUT_DIR = join(process.cwd(), "public", "previews");

async function createFallback() {
    const width = 1200;
    const height = 750;

    // Создаём серый прямоугольник с текстом-заглушкой
    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1f2937"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
        Preview
      </text>
    </svg>
    `;

    await sharp(Buffer.from(svg))
        .webp({ quality: 85 })
        .toFile(join(OUT_DIR, "fallback.webp"));

    console.log("✓ fallback.webp created");
}

createFallback();
