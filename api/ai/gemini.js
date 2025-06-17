module.exports = function(app) {
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCQvMk12Yyy3xX0GkPtie8y-465cjINaMM");

async function Llama(prom) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
  const result = await model.generateContent(prom);
  const response = await result.response;
  const texts = response.text();
  return texts
}

app.get('/ai/gemini', async (req, res) => {
        try {
const { text } = req.query;
const { apikey } = req.query;
if (!global.apikey.includes(apikey)) return res.json({ status: false, error: 'Apikey invalid' })
const result = await Llama(text)
res.status(200).json({
status: true,
result: result
});
} catch (error) {
res.json({ status: false, error: error.message });
}
});
}
