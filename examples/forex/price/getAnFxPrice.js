const { ForexService } = require("m3o/forex");
// Get the latest price for a given forex ticker

const forexService = new ForexService(process.env.M3O_API_TOKEN);

async function getAnFxPrice() {
  const rsp = await forexService.price({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getAnFxPrice();
