const { HolidaysService } = require("m3o/holidays");
// List the holiday dates for a given country and year

const holidaysService = new HolidaysService(process.env.M3O_API_TOKEN);

async function getHolidays() {
  const rsp = await holidaysService.list({
    country_code: "GB",
    year: 2022,
  });
  console.log(rsp);
}

getHolidays();
