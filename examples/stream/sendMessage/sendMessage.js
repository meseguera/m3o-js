const { StreamService } = require("m3o/stream");
// Send a message to the stream.

const streamService = new StreamService(process.env.M3O_API_TOKEN);

async function sendMessage() {
  const rsp = await streamService.sendMessage({
    channel: "general",
    text: "Hey checkout this tweet https://twitter.com/m3oservices/status/1455291054295498752",
  });
  console.log(rsp);
}

sendMessage();
