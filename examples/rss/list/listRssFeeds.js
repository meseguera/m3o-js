const { RssService } = require("m3o/rss");
// List the saved RSS fields

const rssService = new RssService(process.env.M3O_API_TOKEN);

async function listRssFeeds() {
  const rsp = await rssService.list({});
  console.log(rsp);
}

listRssFeeds();
