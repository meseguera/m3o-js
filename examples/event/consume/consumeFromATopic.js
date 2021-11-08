const { EventService } = require("m3o/event");

// Consume events from a given topic.
async function consumeFromAtopic() {
  let eventService = new EventService(process.env.M3O_API_TOKEN);
  let rsp = await eventService.consume({
    topic: "user",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

consumeFromAtopic();
