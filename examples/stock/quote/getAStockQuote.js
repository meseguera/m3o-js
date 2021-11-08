const { StockService } = require("m3o/stock");

// Get the last quote for the stock
async function getAstockQuote() {
  let stockService = new StockService(process.env.M3O_API_TOKEN);
  let rsp = await stockService.quote({
    symbol: "AAPL",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getAstockQuote();
