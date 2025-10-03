# INITE Landing Page - Panduan Deployment

## Persiapan Sebelum Deployment

### 1. Update Link Google Forms

Edit file `.env` dan ganti URL Google Forms:

```bash
REACT_APP_PRETEST_URL=https://forms.gle/your-actual-pretest-form-id
REACT_APP_POSTTEST_URL=https://forms.gle/your-actual-posttest-form-id
```

### 2. Verifikasi Konten

Pastikan semua konten sudah sesuai:
- Logo dan gambar di folder `src/assets/`
- Informasi kontak di `.env`
- Teks dan deskripsi di komponen

## Cara Deployment

### Option 1: Netlify (Recommended)

1. **Persiapkan Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/inite-landing-page.git
   git push -u origin main
   ```

2. **Deploy di Netlify**
   - Masuk ke [netlify.com](https://netlify.com)
   - Klik "New site from Git"
   - Pilih repository GitHub Anda
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Klik "Deploy site"

3. **Environment Variables di Netlify**
   - Masuk ke Site settings > Environment variables
   - Tambahkan semua variabel dari file `.env`

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd /home/sanssin/project/inite-landing-page
   vercel
   ```

3. **Environment Variables**
   - Masuk ke dashboard Vercel
   - Pilih project > Settings > Environment Variables
   - Tambahkan semua variabel

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Tambahkan:
   ```json
   {
     "homepage": "https://your-username.github.io/inite-landing-page",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Server Hosting Manual

1. **Build Production**
   ```bash
   npm run build
   ```

2. **Upload Files**
   Upload semua file di folder `build/` ke web server Anda

3. **Server Configuration**
   
   **Apache (.htaccess)**
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]
   ```
   
   **Nginx**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## Custom Domain

### Untuk Netlify
1. Domain settings > Add custom domain
2. Update DNS records di provider domain:
   ```
   Type: CNAME
   Name: www (atau @)
   Value: your-site.netlify.app
   ```

### Untuk GitHub Pages
1. Repository Settings > Pages
2. Custom domain: masukkan domain Anda
3. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

## SSL Certificate

Semua platform modern (Netlify, Vercel, GitHub Pages) menyediakan SSL otomatis.

## Monitoring & Analytics

### Google Analytics (Optional)
1. Buat property di [analytics.google.com](https://analytics.google.com)
2. Tambahkan tracking code ke `public/index.html`

### Performance Monitoring
- Gunakan Lighthouse untuk audit performa
- Monitor Core Web Vitals

## Environment Variables yang Diperlukan

```bash
# Required
REACT_APP_SIMULATION_URL=https://inite-polteknuklir.site
REACT_APP_PRETEST_URL=https://forms.gle/actual-pretest-id
REACT_APP_POSTTEST_URL=https://forms.gle/actual-posttest-id

# Optional
REACT_APP_CONTACT_EMAIL=inite@polteknuklir.ac.id
REACT_APP_NAME=INITE Landing Page
REACT_APP_VERSION=1.0.0
```

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Fix security vulnerabilities
npm audit fix
```

### Routing Issues
Pastikan server dikonfigurasi untuk Single Page Application (SPA)

### Environment Variables Tidak Terbaca
- Pastikan prefix `REACT_APP_`
- Restart development server setelah menambah env vars
- Check case sensitivity

## Post-Deployment Checklist

- [ ] Semua link Google Forms berfungsi
- [ ] Link simulasi INITE membuka dengan benar
- [ ] Responsive design di mobile & desktop
- [ ] Loading time < 3 detik
- [ ] SEO meta tags terisi
- [ ] Social sharing berfungsi
- [ ] Contact email valid
- [ ] SSL certificate aktif
- [ ] Analytics tracking (jika ada)

## Maintenance

### Update Berkala
- Update dependencies: `npm update`
- Security patches: `npm audit fix`
- Content updates via environment variables

### Backup
- Backup kode di Git repository
- Export data Google Forms secara berkala
- Monitor uptime dan performa