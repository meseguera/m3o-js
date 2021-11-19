const { StockService } = require("m3o/stock");
// Get the last quote for the stock

const stockService = new StockService(process.env.M3O_API_TOKEN);

async function getAstockQuote() {
  const rsp = await stockService.quote({
    symbol: "AAPL",
  });
  console.log(rsp);
}

getAstockQuote();
