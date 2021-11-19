const { CryptoService } = require("m3o/crypto");
// Get news related to a currency

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

async function getCryptocurrencyNews() {
  const rsp = await cryptoService.news({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getCryptocurrencyNews();
