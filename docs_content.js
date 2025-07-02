// Fast Flash API Documentation Content
// This file contains structured documentation content for all API categories

const docsContent = {
  'getting-started': {
    title: 'Getting Started',
    content: `
      <h3>Getting Started dengan Fast Flash API</h3>
      <p>Selamat datang di dokumentasi Fast Flash API. API ini menyediakan berbagai layanan mulai dari AI, downloader, search, tools, dan masih banyak lagi. Dokumentasi ini akan membantu Anda memahami cara menggunakan setiap endpoint dengan benar.</p>
      
      <h4>Base URL</h4>
      <p>Semua endpoint API dapat diakses melalui base URL berikut:</p>
      <pre><code>https://your-api-domain.com/api</code></pre>
      
      <h4>Authentication</h4>
      <p>Fast Flash API menggunakan sistem autentikasi berbasis API key. Setiap request harus menyertakan parameter <code>apikey</code> yang valid:</p>
      <pre><code>GET /api/ai/openai?apikey=YOUR_API_KEY&text=hello</code></pre>
      
      <div class="endpoint-card">
        <h4>Cara Mendapatkan API Key</h4>
        <p>Untuk mendapatkan API key, silakan hubungi tim kami melalui:</p>
        <ul>
          <li><strong>WhatsApp 1:</strong> +62 877-6837-8361</li>
          <li><strong>WhatsApp 2:</strong> +62 774-3048-235</li>
        </ul>
        <p>Tim support kami siap membantu Anda 24/7 untuk proses pembelian dan aktivasi API key.</p>
      </div>
      
      <h4>Response Format</h4>
      <p>Semua response dari API menggunakan format JSON dengan struktur standar berikut:</p>
      <pre><code>{
  "status": true,
  "creator": "By Ibra Decode",
  "result": {
    // Response data here
  }
}</code></pre>
      
      <h4>HTTP Methods</h4>
      <p>Fast Flash API menggunakan metode HTTP GET untuk semua endpoint. Ini memudahkan integrasi dan testing melalui browser atau tools seperti Postman.</p>
      
      <h4>Content Types</h4>
      <p>API dapat mengembalikan berbagai jenis konten:</p>
      <ul>
        <li><strong>JSON:</strong> Data terstruktur (default)</li>
        <li><strong>Image:</strong> File gambar (JPEG, PNG, WebP)</li>
        <li><strong>Video:</strong> File video (MP4, WebM)</li>
        <li><strong>Audio:</strong> File audio (MP3, WAV)</li>
        <li><strong>Text:</strong> Plain text response</li>
      </ul>
    `
  },

  'ai': {
    title: 'AI APIs',
    content: `
      <h3>AI APIs</h3>
      <p>Koleksi API untuk layanan kecerdasan buatan termasuk chatbot, pemrosesan teks, dan berbagai model AI terdepan.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/ai/openai</span>
        </div>
        <p>Menggunakan model OpenAI GPT untuk chat dan pemrosesan teks dengan kualitas tinggi.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>text</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Teks yang akan diproses oleh AI</td>
            </tr>
          </tbody>
        </table>
        
        <h4>Example Request</h4>
        <pre><code>GET /api/ai/openai?apikey=YOUR_API_KEY&text=Jelaskan tentang kecerdasan buatan</code></pre>
        
        <h4>Example Response</h4>
        <pre><code>{
  "status": true,
  "creator": "By Ibra Decode",
  "result": {
    "response": "Kecerdasan buatan (AI) adalah teknologi yang memungkinkan mesin untuk meniru kemampuan kognitif manusia..."
  }
}</code></pre>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/ai/gemini</span>
        </div>
        <p>Menggunakan Google Gemini AI untuk pemrosesan teks dan analisis konten.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>text</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Teks yang akan diproses oleh Gemini AI</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/fast-ai/xmsbra</span>
        </div>
        <p>AI premium dengan kemampuan khusus untuk analisis dan pemrosesan teks tingkat lanjut.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>text</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Teks untuk pemrosesan AI premium</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'downloader': {
    title: 'Downloader APIs',
    content: `
      <h3>Downloader APIs</h3>
      <p>API untuk mengunduh konten dari berbagai platform media sosial dan situs web populer.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/download/tiktok</span>
        </div>
        <p>Download video dari TikTok tanpa watermark dengan kualitas tinggi.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL video TikTok yang valid</td>
            </tr>
          </tbody>
        </table>
        
        <h4>Example Request</h4>
        <pre><code>GET /api/download/tiktok?apikey=YOUR_API_KEY&url=https://www.tiktok.com/@username/video/1234567890</code></pre>
        
        <h4>Example Response</h4>
        <pre><code>{
  "status": true,
  "creator": "By Ibra Decode",
  "result": {
    "title": "Video Title",
    "author": "Username",
    "duration": "15s",
    "download_url": "https://download-link.com/video.mp4",
    "thumbnail": "https://thumbnail-link.com/thumb.jpg"
  }
}</code></pre>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/download/youtube</span>
        </div>
        <p>Download video atau audio dari YouTube dengan berbagai kualitas.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL video YouTube yang valid</td>
            </tr>
            <tr>
              <td>quality</td>
              <td>string</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Kualitas video (720p, 480p, 360p, audio)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/download/instagram</span>
        </div>
        <p>Download foto, video, atau story dari Instagram.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL post Instagram yang valid</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'search': {
    title: 'Search APIs',
    content: `
      <h3>Search APIs</h3>
      <p>API untuk pencarian konten dari berbagai platform dan layanan online.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/search/gimage</span>
        </div>
        <p>Pencarian gambar menggunakan Google Images dengan hasil berkualitas tinggi.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>query</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Kata kunci pencarian gambar</td>
            </tr>
            <tr>
              <td>limit</td>
              <td>number</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Jumlah hasil (default: 10, max: 50)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/search/pinterest</span>
        </div>
        <p>Pencarian gambar dan ide dari Pinterest.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>query</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Kata kunci pencarian Pinterest</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/search/spotify</span>
        </div>
        <p>Pencarian musik dan podcast dari Spotify.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>query</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Nama lagu, artis, atau album</td>
            </tr>
            <tr>
              <td>type</td>
              <td>string</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Jenis pencarian (track, artist, album, playlist)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'tools': {
    title: 'Tools APIs',
    content: `
      <h3>Tools APIs</h3>
      <p>Koleksi API untuk berbagai tools dan utilitas yang berguna dalam pengembangan aplikasi.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/tools/ssweb</span>
        </div>
        <p>Screenshot website dengan kualitas tinggi dan berbagai opsi kustomisasi.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL website yang akan di-screenshot</td>
            </tr>
            <tr>
              <td>width</td>
              <td>number</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Lebar screenshot (default: 1280)</td>
            </tr>
            <tr>
              <td>height</td>
              <td>number</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Tinggi screenshot (default: 720)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/tools/tinyurl</span>
        </div>
        <p>Memperpendek URL panjang menjadi URL yang lebih singkat dan mudah dibagikan.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL yang akan diperpendek</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/tools/cekcuaca</span>
        </div>
        <p>Mendapatkan informasi cuaca terkini untuk lokasi tertentu.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>kota</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Nama kota untuk cek cuaca</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/tools/jadwalsholat</span>
        </div>
        <p>Mendapatkan jadwal sholat untuk kota tertentu.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>kota</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Nama kota untuk jadwal sholat</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'stalker': {
    title: 'Stalker APIs',
    content: `
      <h3>Stalker APIs</h3>
      <p>API untuk mendapatkan informasi publik dari berbagai platform media sosial.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/stalk/igstalk</span>
        </div>
        <p>Mendapatkan informasi profil Instagram yang bersifat publik.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>username</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Username Instagram (tanpa @)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/stalk/ttstalk</span>
        </div>
        <p>Mendapatkan informasi profil TikTok yang bersifat publik.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>username</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Username TikTok (tanpa @)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/stalk/githubstalk</span>
        </div>
        <p>Mendapatkan informasi profil GitHub developer.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>username</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Username GitHub</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'creator': {
    title: 'Creator APIs',
    content: `
      <h3>Creator APIs</h3>
      <p>API untuk membuat dan mengedit gambar dengan berbagai efek dan filter kreatif.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/imagecreator/text2anime</span>
        </div>
        <p>Mengubah teks menjadi gambar anime dengan AI.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>text</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Deskripsi gambar anime yang diinginkan</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/imagecreator/remini</span>
        </div>
        <p>Meningkatkan kualitas gambar dengan AI enhancement.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL gambar yang akan ditingkatkan kualitasnya</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/imagecreator/to-hijab</span>
        </div>
        <p>Menambahkan hijab pada foto wanita secara otomatis.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>url</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>URL foto yang akan ditambahkan hijab</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'order-kuota': {
    title: 'Order Kuota APIs',
    content: `
      <h3>Order Kuota APIs</h3>
      <p>API untuk sistem pemesanan dan pembayaran kuota dengan berbagai provider.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/orderkuota/createpayment</span>
        </div>
        <p>Membuat pembayaran QRIS untuk pembelian kuota.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>number</td>
              <td><span class="required-badge">Required</span></td>
              <td>Jumlah pembayaran dalam rupiah</td>
            </tr>
            <tr>
              <td>codeqr</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Kode QR untuk pembayaran</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/orderkuota/cekstatus</span>
        </div>
        <p>Mengecek status pembayaran kuota.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>merchant</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>ID merchant</td>
            </tr>
            <tr>
              <td>keyorkut</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Key atau kode unik transaksi</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/tools/ceksaldo</span>
        </div>
        <p>Mengecek saldo akun order kuota.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>memberID</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>ID member akun</td>
            </tr>
            <tr>
              <td>pin</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>PIN akun</td>
            </tr>
            <tr>
              <td>password</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Password akun</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'random': {
    title: 'Random APIs',
    content: `
      <h3>Random APIs</h3>
      <p>API untuk mendapatkan konten random dari berbagai kategori.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/random/random-waifu</span>
        </div>
        <p>Mendapatkan gambar waifu anime secara random.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/random/random-bluearchive</span>
        </div>
        <p>Mendapatkan gambar karakter Blue Archive secara random.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/random/cek-nomor</span>
        </div>
        <p>Mengecek informasi provider dari nomor telepon.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>nomor</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>Nomor telepon yang akan dicek</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'berita': {
    title: 'Berita APIs',
    content: `
      <h3>Berita APIs</h3>
      <p>API untuk mendapatkan berita terkini dari berbagai sumber terpercaya.</p>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-url">/api/berita/terkini</span>
        </div>
        <p>Mendapatkan berita terkini dari berbagai kategori.</p>
        
        <h4>Parameters</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apikey</td>
              <td>string</td>
              <td><span class="required-badge">Required</span></td>
              <td>API key untuk autentikasi</td>
            </tr>
            <tr>
              <td>kategori</td>
              <td>string</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Kategori berita (politik, ekonomi, teknologi, olahraga)</td>
            </tr>
            <tr>
              <td>limit</td>
              <td>number</td>
              <td><span class="optional-badge">Optional</span></td>
              <td>Jumlah berita (default: 10, max: 50)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  'authentication': {
    title: 'Authentication',
    content: `
      <h3>Authentication</h3>
      <p>Fast Flash API menggunakan sistem autentikasi berbasis API key untuk memastikan keamanan dan kontrol akses yang tepat. Setiap request harus menyertakan parameter <code>apikey</code> yang valid.</p>
      
      <h4>Mendapatkan API Key</h4>
      <p>Untuk mendapatkan API key, silakan hubungi tim kami melalui salah satu channel berikut:</p>
      
      <div class="endpoint-card">
        <h4>Kontak Pembelian API Key</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Kontak</th>
              <th>Waktu Layanan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>WhatsApp 1</td>
              <td>+62 877-6837-8361</td>
              <td>24/7</td>
            </tr>
            <tr>
              <td>WhatsApp 2</td>
              <td>+62 774-3048-235</td>
              <td>24/7</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Catatan:</strong> Tim support kami siap membantu Anda dalam proses pembelian dan aktivasi API key.</p>
      </div>
      
      <h4>Menggunakan API Key</h4>
      <p>Setelah mendapatkan API key, tambahkan parameter <code>apikey</code> pada setiap request:</p>
      <pre><code>GET /api/endpoint?apikey=YOUR_API_KEY&param=value</code></pre>
      
      <h4>Jenis API Key</h4>
      <div class="endpoint-card">
        <h4>Premium API Key</h4>
        <ul>
          <li><strong>Harga:</strong> Rp 5.000/bulan</li>
          <li><strong>Rate Limit:</strong> 1000 requests/hour</li>
          <li><strong>Akses:</strong> Semua endpoint API</li>
          <li><strong>Support:</strong> Prioritas tinggi</li>
          <li><strong>Custom Integration:</strong> Tersedia</li>
        </ul>
      </div>
      
      <h4>Keamanan API Key</h4>
      <p>Untuk menjaga keamanan API key Anda:</p>
      <ul>
        <li>Jangan pernah membagikan API key di repository publik</li>
        <li>Gunakan environment variables untuk menyimpan API key</li>
        <li>Regenerate API key secara berkala</li>
        <li>Monitor penggunaan API key secara rutin</li>
      </ul>
      
      <h4>Error Authentication</h4>
      <p>Jika API key tidak valid atau tidak disertakan, Anda akan menerima response error:</p>
      <pre><code>{
  "status": false,
  "message": "Invalid or missing API key",
  "code": 401
}</code></pre>
    `
  },

  'rate-limits': {
    title: 'Rate Limits',
    content: `
      <h3>Rate Limits</h3>
      <p>Fast Flash API menerapkan sistem rate limiting untuk memastikan kualitas layanan yang optimal dan fair usage untuk semua pengguna. Rate limit diterapkan berdasarkan API key dan dihitung per jam.</p>
      
      <h4>Limit Berdasarkan Tier</h4>
      <div class="endpoint-card">
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Requests/Hour</th>
              <th>Requests/Day</th>
              <th>Concurrent Requests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free Trial</td>
              <td>100</td>
              <td>1,000</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>1,000</td>
              <td>10,000</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>5,000</td>
              <td>50,000</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4>Headers Response</h4>
      <p>Setiap response API menyertakan informasi rate limit dalam headers:</p>
      <pre><code>X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
X-RateLimit-Used: 1</code></pre>
      
      <div class="endpoint-card">
        <h4>Penjelasan Headers</h4>
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Header</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-RateLimit-Limit</td>
              <td>Batas maksimum requests per jam</td>
            </tr>
            <tr>
              <td>X-RateLimit-Remaining</td>
              <td>Sisa requests yang dapat dilakukan</td>
            </tr>
            <tr>
              <td>X-RateLimit-Reset</td>
              <td>Timestamp reset rate limit (Unix timestamp)</td>
            </tr>
            <tr>
              <td>X-RateLimit-Used</td>
              <td>Jumlah requests yang telah digunakan</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4>Rate Limit Exceeded</h4>
      <p>Ketika rate limit terlampaui, API akan mengembalikan status code 429 dengan response:</p>
      <pre><code>{
  "status": false,
  "message": "Rate limit exceeded. Try again in 3600 seconds.",
  "code": 429,
  "retry_after": 3600
}</code></pre>
      
      <h4>Best Practices</h4>
      <ul>
        <li><strong>Implement Retry Logic:</strong> Gunakan exponential backoff untuk retry</li>
        <li><strong>Cache Responses:</strong> Cache hasil API untuk mengurangi requests</li>
        <li><strong>Monitor Usage:</strong> Pantau penggunaan melalui headers response</li>
        <li><strong>Batch Requests:</strong> Gabungkan multiple requests jika memungkinkan</li>
        <li><strong>Use Webhooks:</strong> Gunakan webhooks untuk real-time updates</li>
      </ul>
      
      <h4>Upgrade Tier</h4>
      <p>Jika Anda memerlukan rate limit yang lebih tinggi, silakan hubungi tim kami untuk upgrade ke tier Premium atau Enterprise.</p>
    `
  },

  'errors': {
    title: 'Error Handling',
    content: `
      <h3>Error Handling</h3>
      <p>Fast Flash API menggunakan kode status HTTP standar untuk menunjukkan keberhasilan atau kegagalan request. Setiap error response menyertakan informasi detail untuk membantu debugging.</p>
      
      <h4>HTTP Status Codes</h4>
      <div class="endpoint-card">
        <table class="parameter-table">
          <thead>
            <tr>
              <th>Status Code</th>
              <th>Meaning</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>200</td>
              <td>OK</td>
              <td>Request berhasil diproses</td>
            </tr>
            <tr>
              <td>400</td>
              <td>Bad Request</td>
              <td>Parameter tidak valid atau missing</td>
            </tr>
            <tr>
              <td>401</td>
              <td>Unauthorized</td>
              <td>API key tidak valid atau missing</td>
            </tr>
            <tr>
              <td>403</td>
              <td>Forbidden</td>
              <td>Akses ditolak untuk endpoint tertentu</td>
            </tr>
            <tr>
              <td>404</td>
              <td>Not Found</td>
              <td>Endpoint tidak ditemukan</td>
            </tr>
            <tr>
              <td>429</td>
              <td>Too Many Requests</td>
              <td>Rate limit terlampaui</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Internal Server Error</td>
              <td>Error pada server</td>
            </tr>
            <tr>
              <td>503</td>
              <td>Service Unavailable</td>
              <td>Layanan sedang maintenance</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4>Error Response Format</h4>
      <p>Semua error response menggunakan format JSON yang konsisten:</p>
      <pre><code>{
  "status": false,
  "message": "Error description",
  "code": 400,
  "details": {
    "field": "parameter_name",
    "issue": "specific_issue_description"
  }
}</code></pre>
      
      <h4>Common Error Examples</h4>
      
      <div class="endpoint-card">
        <h4>400 Bad Request</h4>
        <pre><code>{
  "status": false,
  "message": "Missing required parameter",
  "code": 400,
  "details": {
    "field": "text",
    "issue": "Parameter 'text' is required but not provided"
  }
}</code></pre>
      </div>
      
      <div class="endpoint-card">
        <h4>401 Unauthorized</h4>
        <pre><code>{
  "status": false,
  "message": "Invalid API key",
  "code": 401,
  "details": {
    "field": "apikey",
    "issue": "The provided API key is invalid or expired"
  }
}</code></pre>
      </div>
      
      <div class="endpoint-card">
        <h4>429 Rate Limit Exceeded</h4>
        <pre><code>{
  "status": false,
  "message": "Rate limit exceeded",
  "code": 429,
  "details": {
    "retry_after": 3600,
    "limit": 1000,
    "used": 1000
  }
}</code></pre>
      </div>
      
      <h4>Error Handling Best Practices</h4>
      <ul>
        <li><strong>Check Status Code:</strong> Selalu periksa HTTP status code</li>
        <li><strong>Parse Error Message:</strong> Baca pesan error untuk debugging</li>
        <li><strong>Implement Retry Logic:</strong> Retry untuk error 5xx dengan backoff</li>
        <li><strong>Log Errors:</strong> Catat semua error untuk monitoring</li>
        <li><strong>User-Friendly Messages:</strong> Tampilkan pesan yang user-friendly</li>
        <li><strong>Validate Input:</strong> Validasi input sebelum mengirim request</li>
      </ul>
      
      <h4>Debugging Tips</h4>
      <ul>
        <li>Gunakan tools seperti Postman atau curl untuk testing</li>
        <li>Periksa format parameter dan encoding</li>
        <li>Pastikan API key valid dan tidak expired</li>
        <li>Monitor rate limit usage</li>
        <li>Cek dokumentasi endpoint untuk parameter yang benar</li>
      </ul>
    `
  }
};

// Function to get documentation content
function getDocsContent(type) {
  return docsContent[type] || docsContent['getting-started'];
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { docsContent, getDocsContent };
}

