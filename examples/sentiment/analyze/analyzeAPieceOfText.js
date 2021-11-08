const { SentimentService } = require("m3o/sentiment");

// Analyze and score a piece of text
async function analyzeApieceOfText() {
  let sentimentService = new SentimentService(process.env.M3O_API_TOKEN);
  let rsp = await sentimentService.analyze({
    text: "this is amazing",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

analyzeApieceOfText();
