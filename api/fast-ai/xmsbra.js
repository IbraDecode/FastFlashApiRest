module.exports = function(app) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  // Lebih baik API key pakai env!
  const genAI = new GoogleGenerativeAI("AIzaSyCQvMk12Yyy3xX0GkPtie8y-465cjINaMM");

  async function Llama(prom) {
    // Prompt selalu di-prepend dengan identitas XMsbra Ai
    const promptXMsbra = `Kamu adalah XMsbra Ai, asisten AI yang ramah dan membantu. Kamu di buat oleh Ibra Decode, Developer Website, Chat Ai, Bot Whatsaapp MD. jika di tanya tentang ibra berikan saja website ibra. ibraa.web.id\n${prom}`;
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
    const result = await model.generateContent(promptXMsbra);
    const response = await result.response;
    const texts = response.text();
    return texts
  }

  app.get('/ai/xmsbra', async (req, res) => {
    try {
      const { text, apikey } = req.query;
      if (!global.apikey.includes(apikey)) 
        return res.json({ status: false, error: 'Apikey invalid' });
      if (!text)
        return res.json({ status: false, error: 'Parameter text wajib diisi' });
      const result = await Llama(text);
      res.status(200).json({
        status: true,
        identity: "XMsbra Ai",
        result: result
      });
    } catch (error) {
      res.json({ status: false, error: error.message });
    }
  });
}
