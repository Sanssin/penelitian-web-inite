# INITE Landing Page - Penelitian Simulasi Nuklir

Landing page untuk penelitian tentang efektivitas simulasi INITE dalam pembelajaran teknologi nuklir dan keselamatan radiasi.

## Deskripsi

Landing page ini dibuat untuk memfasilitasi proses pengumpulan data penelitian dengan alur sebagai berikut:

1. **Pre-Test** - Pengisian kuesioner untuk mengukur pengetahuan awal peserta
2. **Simulasi INITE** - Akses ke website simulasi di https://inite-polteknuklir.site
3. **Post-Test** - Pengisian kuesioner untuk mengukur peningkatan pemahaman
4. **Terima Kasih** - Halaman konfirmasi dan informasi lanjutan

## Fitur

- ✅ Landing page yang responsif dan menarik
- ✅ Alur penelitian yang jelas dan mudah diikuti
- ✅ Progress tracking untuk setiap langkah
- ✅ Integrasi dengan Google Forms untuk pre-test dan post-test
- ✅ Link langsung ke simulasi INITE
- ✅ Halaman terima kasih dengan informasi kontak
- ✅ Design yang konsisten dengan branding INITE

## Teknologi

- React 18.3.1
- React Router DOM 6.23.1
- Bootstrap 5.3.3
- React Bootstrap 2.10.3
- Bootstrap Icons 1.11.3

## Instalasi

```bash
# Clone atau download project
cd inite-landing-page

# Install dependencies
npm install

# Jalankan development server
npm start

# Build untuk production
npm run build
```

## Konfigurasi

Sebelum menggunakan, pastikan untuk mengupdate link Google Forms di file `src/components/ResearchFlow.js`:

```javascript
// Update URL Google Forms
{
  id: 1,
  title: "Pre-Test",
  url: "https://forms.gle/your-pretest-form-id", // Ganti dengan link yang sesuai
},
{
  id: 3,
  title: "Post-Test", 
  url: "https://forms.gle/your-posttest-form-id", // Ganti dengan link yang sesuai
}
```

## Struktur Project

```
inite-landing-page/
├── public/
│   ├── index.html
│   └── logo_inite.png
├── src/
│   ├── components/
│   │   ├── LandingPage.js      # Halaman utama
│   │   ├── ResearchFlow.js     # Alur penelitian
│   │   └── ThankYou.js         # Halaman terima kasih
│   ├── assets/                 # Gambar dan asset
│   ├── styles/
│   │   └── main.css           # Styling utama
│   ├── App.js                 # Routing utama
│   └── index.js               # Entry point
├── package.json
└── README.md
```

## Halaman

### 1. Landing Page (/)
- Hero section dengan logo INITE dan call-to-action
- Penjelasan alur penelitian dengan 4 langkah
- Preview simulasi dengan fitur-fitur unggulan
- Informasi tentang penelitian
- Footer dengan informasi kontak

### 2. Research Flow (/research-flow)
- Progress bar untuk tracking kemajuan
- 3 langkah interaktif: Pre-test → Simulasi → Post-test
- Button untuk membuka setiap langkah
- Instruksi dan estimasi waktu
- Automatic progression setelah setiap langkah selesai

### 3. Thank You (/thank-you)
- Konfirmasi penyelesaian penelitian
- Informasi tentang kontribusi peserta
- Kontak untuk pertanyaan lanjutan
- Social sharing buttons
- Link kembali ke beranda atau simulasi

## Customization

### Mengubah Warna
Edit file `src/styles/main.css` bagian `:root`:

```css
:root {
  --primary-color: #37474f;     /* Blue Grey */
  --secondary-color: #455a64;   /* Dark Blue Grey */
  --accent-color: #ffc107;      /* Amber */
  --nuclear-gradient: radial-gradient(ellipse at center, #37474f, #455a64, #2c393f);
}
```

### Mengganti Logo
- Ganti file di `public/logo_inite.png` untuk favicon
- Ganti file di `src/assets/logo_inite.png` untuk logo di komponen

### Mengubah Konten
- Edit teks di `src/components/LandingPage.js` untuk halaman utama
- Edit informasi penelitian di `src/components/ThankYou.js`
- Update kontak email di bagian footer

## Deployment

### Untuk GitHub Pages
```bash
npm run build
# Upload folder build/ ke web server
```

### Untuk Netlify/Vercel
- Connect repository ke platform
- Set build command: `npm run build`
- Set publish directory: `build`

## Kontributor

- Tim Peneliti INITE
- Politeknik Teknologi Nuklir BRIN

## Lisensi

© 2024 INITE - Politeknik Teknologi Nuklir BRIN