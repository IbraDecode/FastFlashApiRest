# Panduan Setup Cloudflare Pages untuk Fast Flash API

## Persiapan

1. **Akun Cloudflare**
   - Pastikan Anda memiliki akun Cloudflare
   - Login ke dashboard Cloudflare

2. **Repository GitHub**
   - Upload proyek Fast Flash ke GitHub repository
   - Pastikan semua file sudah ter-commit

## Langkah-langkah Setup

### 1. Membuat Cloudflare Pages Project

1. Buka dashboard Cloudflare
2. Pilih menu "Pages" di sidebar
3. Klik "Create a project"
4. Pilih "Connect to Git"
5. Authorize Cloudflare untuk mengakses GitHub
6. Pilih repository Fast Flash API
7. Konfigurasi build settings:
   - **Project name**: `fastflash-api`
   - **Production branch**: `main`
   - **Build command**: `npm install && npm start`
   - **Build output directory**: `/`
   - **Root directory**: `/`

### 2. Environment Variables

Tambahkan environment variables berikut di Cloudflare Pages:

```
NODE_ENV=production
PORT=3000
```

### 3. Custom Domain (Opsional)

1. Di dashboard Pages project, pilih tab "Custom domains"
2. Klik "Set up a custom domain"
3. Masukkan domain Anda (contoh: `api.yourdomain.com`)
4. Ikuti instruksi DNS yang diberikan

### 4. Build Settings

Pastikan file `package.json` memiliki script build:

```json
{
  "scripts": {
    "start": "node index.js",
    "build": "echo 'No build step required'",
    "dev": "nodemon index.js"
  }
}
```

### 5. Headers dan Redirects

File `_headers` dan `_redirects` sudah dikonfigurasi untuk:
- CORS headers untuk API endpoints
- Security headers
- Cache control untuk static assets
- Redirects untuk dokumentasi

## Deployment

1. **Automatic Deployment**
   - Setiap push ke branch `main` akan trigger deployment otomatis
   - Monitor progress di dashboard Cloudflare Pages

2. **Manual Deployment**
   - Bisa trigger manual deployment dari dashboard
   - Useful untuk testing atau rollback

## Monitoring dan Maintenance

### 1. Analytics
- Cloudflare Pages menyediakan analytics built-in
- Monitor traffic, performance, dan errors

### 2. Logs
- Akses real-time logs dari dashboard
- Debug issues dengan function logs

### 3. Performance
- Cloudflare CDN otomatis mengoptimalkan delivery
- Static assets di-cache secara global

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs di dashboard
   - Pastikan dependencies ter-install dengan benar
   - Verify Node.js version compatibility

2. **API Endpoints Not Working**
   - Check `_redirects` file configuration
   - Verify API routes di `index.js`
   - Test endpoints secara lokal terlebih dahulu

3. **CORS Issues**
   - Check `_headers` file
   - Verify CORS middleware di Express app
   - Test dengan different origins

### Performance Optimization

1. **Caching Strategy**
   - Static assets: 1 year cache
   - API responses: 5 minutes cache
   - HTML pages: No cache (dynamic content)

2. **Compression**
   - Cloudflare otomatis compress responses
   - Gzip/Brotli compression enabled

3. **Minification**
   - Auto-minify CSS, JS, dan HTML
   - Reduce bandwidth usage

## Security

### 1. Headers
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### 2. Rate Limiting
- Implement di application level
- Use Cloudflare Rate Limiting rules jika diperlukan

### 3. API Key Protection
- Never expose API keys di client-side code
- Use environment variables untuk sensitive data

## Best Practices

1. **Version Control**
   - Tag releases untuk easy rollback
   - Use semantic versioning

2. **Testing**
   - Test locally sebelum push
   - Use staging environment untuk testing

3. **Documentation**
   - Keep documentation up-to-date
   - Document API changes dan breaking changes

4. **Monitoring**
   - Set up alerts untuk downtime
   - Monitor API usage dan performance metrics

## Support

Jika mengalami masalah:
1. Check Cloudflare Pages documentation
2. Review build logs dan error messages
3. Contact support melalui WhatsApp yang tersedia di aplikasi

