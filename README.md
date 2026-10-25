# Portfolio

Portfolio pribadi single-page — React + Vite. Fokus: database, data, dan
software development.

> **Status: Stage 0 (scaffold).** Baru fondasi proyek yang terpasang (struktur
> folder, token desain, font). Section dan navigasi dibangun bertahap pada
> stage berikutnya.

## Menjalankan secara lokal

Butuh **Node.js 18+** (disarankan 20 atau 22).

```bash
npm install   # pasang dependency
npm run dev   # jalankan dev server (default: http://localhost:5173)
```

Perintah lain:

```bash
npm run build     # build produksi ke folder dist/
npm run preview    # preview hasil build secara lokal
```

> Catatan: proyek ini di-scaffold manual (tanpa `npm create vite`) dan belum
> pernah di-install atau dijalankan di environment pembuatannya. Jalankan
> perintah di atas pada komputermu untuk pertama kali.

## Struktur folder

```
portfolio/
├─ index.html              # HTML root, mount point #root
├─ package.json            # dependency & script
├─ vite.config.js          # konfigurasi Vite + plugin React
├─ .gitignore
└─ src/
   ├─ main.jsx             # entry: import font + CSS global, render App
   ├─ App.jsx              # root komponen (placeholder Stage 0)
   ├─ data/                # (kosong) konten portfolio — diisi per section
   ├─ hooks/               # (kosong) custom hooks
   ├─ components/
   │  ├─ layout/           # (kosong) Navbar, MobileMenu, Footer
   │  ├─ ui/               # (kosong) Button, Modal, dll.
   │  └─ sections/         # (kosong) Hero, About, Projects, dll.
   └─ styles/
      ├─ variables.css     # design tokens: warna, font, spacing, dll.
      └─ global.css        # reset ringan + base style + reduced-motion
```

## Identitas visual

Palet (lihat `src/styles/variables.css`):

| Token            | Hex       | Peran                                    |
| ---------------- | --------- | ---------------------------------------- |
| Ivory            | `#F7F0E9` | background utama                         |
| Dusty pink       | `#D8A6A1` | aksen interaktif terbatas (hover, fokus) |
| Muted brown      | `#B58B72` | teks sekunder, border tipis              |
| Deep cocoa       | `#49352F` | heading & body text                      |

Font: **Fraunces** (heading) + **Inter** (body), di-bundle lokal via
`@fontsource` (tanpa panggilan CDN).
