const { EventService } = require("m3o/event");
// Read stored events

const eventService = new EventService(process.env.M3O_API_TOKEN);

async function readEventsOnAtopic() {
  const rsp = await eventService.read({
    topic: "user",
  });
  console.log(rsp);
}

readEventsOnAtopic();
