const { TimeService } = require("m3o/time");
// Get the timezone info for a specific location

const timeService = new TimeService(process.env.M3O_API_TOKEN);

async function getTheTimezoneInfoForAspecificLocation() {
  const rsp = await timeService.zone({
    location: "London",
  });
  console.log(rsp);
}

getTheTimezoneInfoForAspecificLocation();
