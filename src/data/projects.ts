// src/data/projects.ts

export type Project = {
    slug: string; // используется для превью: /previews/<slug>.webp
    title: string; // заголовок карточки
    url: string; // прод-URL (Vercel/домен)
    repo?: string; // опционально: ссылка на исходники
    tags?: string[]; // стек/ниша
};

export const PROJECTS: Project[] = [
    {
        slug: "kfz-02",
        title: "KFZ-Werkstatt 02 — Landing",
        url: "https://kfz-02.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/kfz_02",
        tags: ["Astro", "Tailwind", "KFZ"],
    },
    {
        slug: "tierpflege-01",
        title: "Tierpflege 01 — Grooming",
        url: "https://tierpflege-01.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/tierpflege_01",
        tags: ["Astro", "Tailwind", "Tierpflege"],
    },
    {
        slug: "kfz-01",
        title: "KFZ-Werkstatt 01 — Service",
        url: "https://kfz-01.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/kfz_01",
        tags: ["Astro", "Tailwind", "KFZ"],
    },
    {
        slug: "handwerker-02",
        title: "Handwerker 02 — Renovierung",
        url: "https://handwerker-02.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/handwerker_02",
        tags: ["Astro", "Tailwind", "Handwerk"],
    },
    {
        slug: "handwerker-01",
        title: "Handwerker 01 — Innenausbau",
        url: "https://handwerker-01.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/handwerker_01",
        tags: ["Astro", "Tailwind", "Handwerk"],
    },
    {
        slug: "gym-01-chi",
        title: "Gym 01 — Fitness Studio",
        url: "https://gym-01-chi.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/gym_01",
        tags: ["Astro", "Tailwind", "Fitness"],
    },
    {
        slug: "gartenbau-01",
        title: "Gartenbau 01 — Landscaping",
        url: "https://gartenbau-01.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/gartenbau_01",
        tags: ["Astro", "Tailwind", "Gartenbau"],
    },
    {
        slug: "custom-01",
        title: "Custom 01 — Template",
        url: "https://custom-01.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/custom-01",
        tags: ["Astro", "Tailwind"],
    },
    {
        slug: "cafe-02",
        title: "Café 02 — Restaurant",
        url: "https://cafe-02.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/cafe_02",
        tags: ["Astro", "Tailwind", "Food"],
    },
    {
        slug: "cafe-01",
        title: "Café 01 — Coffee Shop",
        url: "https://cafe-01.vercel.app",
        repo: "https://github.com/sardakserhii/website_shop/tree/main/cafe_01",
        tags: ["Astro", "Tailwind", "Food"],
    },
    {
        slug: "leder-01",
        title: "Leder 01 — Design Studio",
        url: "https://leder-01.vercel.app/",
        repo: "https://github.com/sardakserhii/website_shop/",
        tags: ["Astro", "Tailwind", "Leder"],
    },
];
