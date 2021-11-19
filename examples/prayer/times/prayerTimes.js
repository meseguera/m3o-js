const { PrayerService } = require("m3o/prayer");
// Get the prayer (salah) times for a location on a given date

const prayerService = new PrayerService(process.env.M3O_API_TOKEN);

async function prayerTimes() {
  const rsp = await prayerService.times({
    location: "london",
  });
  console.log(rsp);
}

prayerTimes();
