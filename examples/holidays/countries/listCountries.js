const { HolidaysService } = require("m3o/holidays");
// Get the list of countries that are supported by this API

const holidaysService = new HolidaysService(process.env.M3O_API_TOKEN);

async function listCountries() {
  const rsp = await holidaysService.countries({});
  console.log(rsp);
}

listCountries();
