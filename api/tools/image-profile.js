const fetch = require('node-fetch');

module.exports = function (app) {
  app.get('/tools/profile-image', async (req, res) => {
    try {
      const query = new URLSearchParams(req.query).toString();
      const url = `http://167.172.82.106:3000/profile-image?${query}`;

      const response = await fetch(url);
      const buffer = await response.arrayBuffer();

      res.setHeader('Content-Type', 'image/png');
      res.send(Buffer.from(buffer));
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, message: 'Gagal mengambil gambar dari VPS.' });
    }
  });
};
