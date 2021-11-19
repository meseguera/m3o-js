const { ForexService } = require("m3o/forex");
// Returns the data for the previous close

const forexService = new ForexService(process.env.M3O_API_TOKEN);

async function getPreviousClose() {
  const rsp = await forexService.history({
    symbol: "GBPUSD",
  });
  console.log(rsp);
}

getPreviousClose();
