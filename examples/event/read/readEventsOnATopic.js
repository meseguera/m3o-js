const { EventService } = require("m3o/event");

// Read stored events
async function readEventsOnAtopic() {
  let eventService = new EventService(process.env.M3O_API_TOKEN);
  let rsp = await eventService.read({
    topic: "user",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

readEventsOnAtopic();
