const { EventService } = require("m3o/event");

// Publish a event to the event stream.
async function publishAnEvent() {
  let eventService = new EventService(process.env.M3O_API_TOKEN);
  let rsp = await eventService.publish({
    message: {
      id: "1",
      type: "signup",
      user: "john",
    },
    topic: "user",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

publishAnEvent();
