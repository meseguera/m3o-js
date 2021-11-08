const { TimeService } = require("m3o/time");

// Get the current time
async function returnsCurrentTimeOptionallyWithLocation() {
  let timeService = new TimeService(process.env.M3O_API_TOKEN);
  let rsp = await timeService.now({});
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

returnsCurrentTimeOptionallyWithLocation();
