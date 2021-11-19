const { StreamService } = require("m3o/stream");
// List all the active channels

const streamService = new StreamService(process.env.M3O_API_TOKEN);

async function listChannels() {
  const rsp = await streamService.listChannels({});
  console.log(rsp);
}

listChannels();
