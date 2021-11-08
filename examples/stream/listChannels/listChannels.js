const { StreamService } = require("m3o/stream");

// List all the active channels
async function listChannels() {
  let streamService = new StreamService(process.env.M3O_API_TOKEN);
  let rsp = await streamService.listChannels({});
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

listChannels();
