const { RssService } = require("m3o/rss");
// Get an RSS feed by name. If no name is given, all feeds are returned. Default limit is 25 entries.

const rssService = new RssService(process.env.M3O_API_TOKEN);

async function readAfeed() {
  const rsp = await rssService.feed({
    name: "bbc",
  });
  console.log(rsp);
}

readAfeed();
