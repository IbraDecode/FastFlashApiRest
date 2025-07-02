# Fast Flash API

![Fast Flash API](https://img.shields.io/badge/Fast%20Flash-API-blue?style=for-the-badge&logo=lightning)
![Version](https://img.shields.io/badge/version-3.7.6-green?style=for-the-badge)
![Node.js](https://img.shields.io/badge/node.js-18+-brightgreen?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)

Fast Flash API adalah REST API yang powerful dan mudah digunakan, menyediakan berbagai layanan mulai dari AI, download media, pencarian, tools, dan masih banyak lagi. Dibangun dengan Node.js dan Express.js untuk performa optimal.

## ✨ Fitur Utama

- 🤖 **AI Integration** - OpenAI, Gemini, dan XMsbra AI
- 📱 **Social Media Downloader** - TikTok, Instagram, YouTube, Facebook, Twitter
- 🔍 **Search Engine** - YouTube, TikTok, Google Images, Pinterest
- 🛠️ **Utility Tools** - TTS, Screenshot, Weather, Currency Converter
- 👤 **Social Stalker** - Instagram, GitHub, TikTok, YouTube
- 🎨 **Image Creator** - Remini, Text to Anime, Brat Generator
- 📰 **News API** - Liputan6, CNN, CNBC, Antara
- 🎵 **Music & Audio** - Spotify Search, SoundCloud Downloader

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn
- API Key (hubungi admin untuk mendapatkan)

### Installation

1. **Clone repository**
```bash
git clone https://github.com/IbraDecode/FastFlash-API.git
cd FastFlash-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Konfigurasi settings**
```bash
cp settings.json.example settings.json
# Edit settings.json dengan konfigurasi Anda
```

4. **Jalankan aplikasi**
```bash
# Development
npm run dev

# Production
npm start
```

5. **Akses aplikasi**
- Dashboard: `http://localhost:3000`
- API Documentation: `http://localhost:3000/docs.html`

## 📖 API Documentation

### Base URL
```
https://your-domain.com
```

### Authentication
Semua endpoint memerlukan API key:
```
GET /api/endpoint?apikey=YOUR_API_KEY&param=value
```

### Response Format
```json
{
  "status": true,
  "creator": "By Ibra Decode",
  "result": {
    // Data response
  }
}
```

### Contoh Penggunaan

#### Download TikTok Video
```javascript
const response = await fetch('https://your-domain.com/download/tiktok?apikey=YOUR_KEY&url=TIKTOK_URL');
const data = await response.json();
console.log(data.result);
```

#### AI Chat dengan Gemini
```javascript
const response = await fetch('https://your-domain.com/ai/gemini?apikey=YOUR_KEY&text=Hello');
const data = await response.json();
console.log(data.result.response);
```

#### Search YouTube
```javascript
const response = await fetch('https://your-domain.com/search/youtube?apikey=YOUR_KEY&q=tutorial');
const data = await response.json();
console.log(data.result);
```

## 🛠️ Available Endpoints

### AI & Chat
- `/ai/openai` - OpenAI Chat
- `/ai/gemini` - Google Gemini AI
- `/fast-ai/xmsbra` - XMsbra AI

### Downloader
- `/download/tiktok` - TikTok Video Downloader
- `/download/instagram` - Instagram Media Downloader
- `/download/youtube` - YouTube Video/Audio Downloader
- `/download/facebook` - Facebook Video Downloader
- `/download/twitter` - Twitter Media Downloader
- `/download/spotify` - Spotify Track Downloader

### Search
- `/search/youtube` - YouTube Video Search
- `/search/tiktok` - TikTok Video Search
- `/search/gimage` - Google Image Search
- `/search/pinterest` - Pinterest Image Search
- `/search/spotify` - Spotify Music Search

### Tools
- `/tools/tts` - Text to Speech
- `/tools/ssweb` - Website Screenshot
- `/tools/cekcuaca` - Weather Information
- `/tools/convert-uang` - Currency Converter
- `/tools/jadwalsholat` - Prayer Times

### Stalker
- `/stalk/instagram` - Instagram Profile Info
- `/stalk/github` - GitHub Profile Info
- `/stalk/tiktok` - TikTok Profile Info
- `/stalk/youtube` - YouTube Channel Info

### Image Creator
- `/imagecreator/remini` - Image Enhancement
- `/imagecreator/text2anime` - Text to Anime
- `/imagecreator/brat` - Brat Text Generator
- `/imagecreator/nulis` - Handwriting Generator

### News
- `/berita/liputan6` - Liputan6 News
- `/berita/cnn` - CNN Indonesia News
- `/berita/cnbc` - CNBC Indonesia News

## 🔧 Configuration

### settings.json
```json
{
  "apikey": "your-api-key",
  "creator": "By Ibra Decode",
  "apititle": "Fast Flash API",
  "github": "https://github.com/IbraDecode",
  "whatsapp": "https://wa.me/6285133888035",
  "youtube": "https://youtube.com/@IbraDecode"
}
```

### Environment Variables
```bash
NODE_ENV=production
PORT=3000
```

## 🌐 Deployment

### Cloudflare Pages

1. **Setup Repository**
   - Push code ke GitHub
   - Connect repository ke Cloudflare Pages

2. **Build Settings**
   - Build command: `npm install && npm start`
   - Build output directory: `/`
   - Root directory: `/`

3. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=3000
   ```

4. **Custom Domain**
   - Setup custom domain di Cloudflare Pages
   - Configure DNS records

### Manual Deployment

1. **Build aplikasi**
```bash
npm run build
```

2. **Upload ke server**
```bash
# Upload semua file ke server
# Pastikan Node.js dan npm terinstall
```

3. **Install dependencies**
```bash
npm install --production
```

4. **Start aplikasi**
```bash
npm start
```

## 🤝 Contributing

### Tim Kontributor

- **Ibra Decode** - Lead Developer & Creator
- **SkyZo Developer** - Base Script Developer  
- **CloudFlare Hosting Team** - Infrastructure & Hosting Specialist
- **DevOps & Maintenance** - System Administration

### Cara Berkontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Development Guidelines

- Gunakan ESLint untuk code formatting
- Tulis tests untuk fitur baru
- Update dokumentasi jika diperlukan
- Follow semantic versioning

## 📝 API Key & Pricing

### Mendapatkan API Key

Hubungi admin untuk mendapatkan API key:
- **WhatsApp 1**: [+62 774 304 8235](https://wa.me/627743048235)
- **WhatsApp 2**: [+62 877 6837 8361](https://wa.me/6287768378361)

### Harga
- **Premium API Key**: Rp 5.000/bulan
- **Features**: Unlimited access, High rate limit, Priority support

## 🔒 Security

- API key authentication
- Rate limiting
- CORS protection
- Input validation
- Error handling

## 📊 Monitoring

- Real-time analytics
- Error tracking
- Performance monitoring
- Uptime monitoring

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   - Pastikan API key valid
   - Check parameter `apikey` di request

2. **Rate Limit Exceeded**
   - Tunggu beberapa saat sebelum request lagi
   - Upgrade ke premium API key

3. **Invalid URL**
   - Pastikan URL format benar
   - Check platform yang didukung

### Debug Mode

```bash
DEBUG=* npm start
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

- **GitHub**: [IbraDecode](https://github.com/IbraDecode)
- **YouTube**: [@IbraDecode](https://youtube.com/@IbraDecode)
- **WhatsApp**: [+62 851 3388 8035](https://wa.me/6285133888035)

## 🙏 Acknowledgments

- Express.js untuk web framework
- Cloudflare untuk hosting dan CDN
- Semua kontributor yang telah membantu pengembangan

---

<div align="center">
  <p>Made with ❤️ by <strong>Ibra Decode</strong></p>
  <p>© 2025 Fast Flash API. All rights reserved.</p>
</div>

