const { SentimentService } = require("m3o/sentiment");
// Analyze and score a piece of text

const sentimentService = new SentimentService(process.env.M3O_API_TOKEN);

async function analyzeApieceOfText() {
  const rsp = await sentimentService.analyze({
    text: "this is amazing",
  });
  console.log(rsp);
}

analyzeApieceOfText();
