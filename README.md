# Serhii Sardak — Portfolio & CV

A modern, fast, and minimalistic portfolio website built with **Astro 5** and **Tailwind CSS v4**. It features a dynamic CV section that syncs directly from a GitHub repository, project showcase with lightbox gallery, and German legal pages (Impressum/Datenschutz).

> **Live Demo:** [sardak.dev](https://sardak.dev)

## ✨ Features

- ⚡ **High Performance**: Built with Astro 5 for blazing fast load times.
- 📄 **Dynamic CV Sync**: Fetches CV content from a remote GitHub YAML file at build time.
- 🎨 **Modern Design**: Dark mode, responsive UI, and smooth interactions using Tailwind CSS v4.
- 🖼️ **Project Gallery**: Includes a native `<dialog>` based lightbox for viewing project images.
- 🔍 **SEO Optimized**: Includes Sitemap, semantic HTML, and proper metadata.
- ⚖️ **Legal Ready**: Includes Impressum and Datenschutz pages required for Germany.
- ✉️ **Contact Form**: Integrated with Resend API for email delivery (requires Vercel hybrid/server output).

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: `astro-icon` (Simple Icons & Lucide)
- **Deployment**: Vercel
- **Email**: Resend

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sardakserhii/serhiisardak.git

# Install dependencies
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

Build the project for production:

```bash
npm run build
```

## 📝 Remote CV Configuration

The CV section pulls data from `src/components/CV.astro`. It is configured to fetch the YAML file from:
`https://raw.githubusercontent.com/sardakserhii/rendercv/main/Sardak_Serhii_RenderCV.yaml`

To update your CV on the website, simply update the YAML file in your `rendercv` repository and rebuild/redeploy this site.

## 📄 License

MIT License.

---

**Author:** Serhii Sardak
**Email:** sardakserhii@gmail.com
