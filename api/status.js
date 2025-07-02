const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  app.get('/api/status', async (req, res) => {
    try {
      // Read endpoints.json to count total features
      const endpointsPath = path.join(__dirname, './endpoints.json');
      let totalfitur = 0;
      
      if (fs.existsSync(endpointsPath)) {
        const endpoints = JSON.parse(fs.readFileSync(endpointsPath, 'utf8'));
        totalfitur = Object.values(endpoints).reduce((total, category) => {
          return total + (Array.isArray(category) ? category.length : 0);
        }, 0);
      }

      // Calculate runtime
      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      const runtime = `${hours}h ${minutes}m ${seconds}s`;

      const response = {
        status: true,
        result: {
          totalfitur: totalfitur,
          totalrequest: global.totalreq || 0,
          runtime: runtime,
          uptime: uptime,
          memory: {
            used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
            total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024)
          },
          version: "3.7.6",
          node_version: process.version,
          platform: process.platform
        }
      };

      res.status(200).json(response);
    } catch (error) {
      console.error('Status API Error:', error);
      res.status(500).json({
        status: false,
        message: 'Internal server error',
        error: error.message
      });
    }
  });
};

