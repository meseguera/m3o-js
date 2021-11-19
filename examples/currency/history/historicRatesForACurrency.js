const { CurrencyService } = require("m3o/currency");
// Returns the historic rates for a currency on a given date

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN);

async function historicRatesForAcurrency() {
  const rsp = await currencyService.history({
    code: "USD",
    date: "2021-05-30",
  });
  console.log(rsp);
}

historicRatesForAcurrency();
