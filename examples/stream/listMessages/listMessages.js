const { StreamService } = require("m3o/stream");

// List messages for a given channel
async function listMessages() {
  let streamService = new StreamService(process.env.M3O_API_TOKEN);
  let rsp = await streamService.listMessages({
    channel: "general",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

listMessages();
