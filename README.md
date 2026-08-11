# 🛍️ DealDrop — Price Tracking Platform

DealDrop is a full-stack web app that lets users track product prices across the web and get notified the moment a price drops. Paste a product URL, DealDrop scrapes the current price, stores a historical record, and emails the user when the price falls below their target — no more manually refreshing shopping pages.

**Live demo:** [deal-drop-nil.vercel.app](https://deal-drop-nil.vercel.app)

---

## ✨ Features

- **Track any product URL** — submit a link from an e-commerce site and DealDrop scrapes the current price, title, and image.
- **Automated price history** — each tracked product's price is logged over time and visualized on a chart.
- **Price-drop email alerts** — users are notified automatically when a tracked product hits their target price.
- **Authentication & per-user dashboards** — users sign in and manage only the products they're tracking.
- **Dark / light theme support** across the UI.
- **Clean, accessible UI** built with shadcn/ui components on top of Tailwind CSS v4.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19 |
| **Styling / UI** | Tailwind CSS v4, shadcn/ui, Radix primitives, `lucide-react` icons |
| **Backend / Database** | Supabase (Postgres, Auth, `@supabase/ssr` for server-side sessions) |
| **Web Scraping** | Firecrawl (`@mendable/firecrawl-js`) for structured price/product extraction |
| **Transactional Email** | Resend for price-drop notification emails |
| **Data Visualization** | Recharts for price-history charts |
| **Tooling** | ESLint, PostCSS, npm |
| **Deployment** | Vercel |

---

## 🏗️ How It Works

1. A user submits a product URL through the dashboard.
2. The app calls **Firecrawl** to scrape the live page and extract structured product data (price, title, image).
3. The scraped data is written to **Supabase** (Postgres), scoped to the authenticated user via server-side sessions (`@supabase/ssr`).
4. On subsequent scrape runs, new price points are appended to that product's history and rendered as a trend chart with **Recharts**.
5. When a product's price drops below the user's target, **Resend** sends an automated email alert.

---

## 💡 What This Project Demonstrates

- Building with the **Next.js App Router** and React Server Components in a production-style codebase.
- Designing a **Postgres schema and auth flow** on Supabase, including secure server-side session handling.
- Integrating a **third-party scraping API (Firecrawl)** to turn unstructured web pages into structured, storable data.
- Wiring up **transactional email** (Resend) as part of an automated notification pipeline.
- Building **data visualizations** (Recharts) from time-series data.
- Assembling a polished, accessible UI using **shadcn/ui** and Tailwind CSS v4 rather than hand-rolling components.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Firecrawl](https://firecrawl.dev) API key
- A [Resend](https://resend.com) API key

### Installation

```bash
git clone https://github.com/NILAVABEPARI/dealdrop.git
cd dealdrop
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
RESEND_API_KEY=your_resend_api_key
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
dealdrop/
├── app/                 # Next.js App Router pages, layouts, and API routes
├── components/          # Reusable UI components (shadcn/ui-based)
├── lib/                 # Shared utilities and business logic
├── utils/supabase/      # Supabase client/server helpers
├── public/              # Static assets
└── proxy.js             # Local dev proxy config
```

---

## 📌 Roadmap

- [ ] Multi-currency support
- [ ] Browser extension for one-click product tracking
- [ ] Configurable notification channels (SMS, push)
- [ ] Bulk import/export of tracked products

---
