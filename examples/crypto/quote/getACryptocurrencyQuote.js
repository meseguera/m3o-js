const { CryptoService } = require("m3o/crypto");
// Get the last quote for a given crypto ticker

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

async function getAcryptocurrencyQuote() {
  const rsp = await cryptoService.quote({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getAcryptocurrencyQuote();
