const { CryptoService } = require("m3o/crypto");
// Get the last price for a given crypto ticker

const cryptoService = new CryptoService(process.env.M3O_API_TOKEN);

async function getCryptocurrencyPrice() {
  const rsp = await cryptoService.price({
    symbol: "BTCUSD",
  });
  console.log(rsp);
}

getCryptocurrencyPrice();
