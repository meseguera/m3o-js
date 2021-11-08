const { MqService } = require("m3o/mq");

// Publish a message. Specify a topic to group messages for a specific topic.
async function publishAmessage() {
  let mqService = new MqService(process.env.M3O_API_TOKEN);
  let rsp = await mqService.publish({
    message: {
      id: "1",
      type: "signup",
      user: "john",
    },
    topic: "events",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

publishAmessage();
