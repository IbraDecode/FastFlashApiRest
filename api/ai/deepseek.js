const fetch = require('node-fetch');

module.exports = function(app) {
  const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || "sk-e07630a6f25d4fd8b338c2257268f122";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCQvMk12Yyy3xX0GkPtie8y-465cjINaMM");

async function Deepsek(teks) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
  const result = await model.generateContent(teks);
  const response = await result.response;
  const texts = response.text();
  return texts
}

  app.get('/ai/deepseek', async (req, res) => {
    const { text, apikey } = req.query;

    if (!text) {
      return res.json({ status: false, error: 'Text is required' });
    }

    if (!apikey || !global.apikey.includes(apikey)) {
      return res.json({ status: false, error: 'Invalid or missing API key' });
    }

    try {
      const result = await Deepsek(text);
      res.status(200).json({
        status: true,
        result
      });
    } catch (error) {
      res.status(500).json({ status: false, error: error.message });
    }
  });
};
