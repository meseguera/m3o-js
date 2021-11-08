const { TimeService } = require("m3o/time");

// Get the timezone info for a specific location
async function getTheTimezoneInfoForAspecificLocation() {
  let timeService = new TimeService(process.env.M3O_API_TOKEN);
  let rsp = await timeService.zone({
    location: "London",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getTheTimezoneInfoForAspecificLocation();
