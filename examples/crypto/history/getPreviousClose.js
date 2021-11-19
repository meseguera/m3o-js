const { CryptoService } = require("m3o/crypto");
// Returns the history for the previous close

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

async function getPreviousClose() {
  const rsp = await cryptoService.history({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getPreviousClose();
