const { StockService } = require("m3o/stock");
// Get the last price for a given stock ticker

const stockService = new StockService(process.env.M3O_API_TOKEN);

async function getAstockPrice() {
  const rsp = await stockService.price({
    symbol: "AAPL",
  });
  console.log(rsp);
}

getAstockPrice();
