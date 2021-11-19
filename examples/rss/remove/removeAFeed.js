const { RssService } = require("m3o/rss");
// Remove an RSS feed by name

const rssService = new RssService(process.env.M3O_API_TOKEN);

async function removeAfeed() {
  const rsp = await rssService.remove({
    name: "bbc",
  });
  console.log(rsp);
}

removeAfeed();
