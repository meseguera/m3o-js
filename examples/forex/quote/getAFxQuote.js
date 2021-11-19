const { ForexService } = require("m3o/forex");
// Get the latest quote for the forex

const forexService = new ForexService(process.env.M3O_API_TOKEN);

async function getAfxQuote() {
  const rsp = await forexService.quote({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getAfxQuote();
