const { StreamService } = require("m3o/stream");
// List messages for a given channel

const streamService = new StreamService(process.env.M3O_API_TOKEN);

async function listMessages() {
  const rsp = await streamService.listMessages({
    channel: "general",
  });
  console.log(rsp);
}

listMessages();
