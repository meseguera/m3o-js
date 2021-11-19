const { MqService } = require("m3o/mq");
// Subscribe to messages for a given topic.

const mqService = new MqService(process.env.M3O_API_TOKEN);

async function subscribeToAtopic() {
  const rsp = await mqService.subscribe({
    topic: "events",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

subscribeToAtopic();
