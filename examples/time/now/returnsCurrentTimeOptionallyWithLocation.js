const { TimeService } = require("m3o/time");
// Get the current time

const timeService = new TimeService(process.env.M3O_API_TOKEN);

async function returnsCurrentTimeOptionallyWithLocation() {
  const rsp = await timeService.now({});
  console.log(rsp);
}

returnsCurrentTimeOptionallyWithLocation();
