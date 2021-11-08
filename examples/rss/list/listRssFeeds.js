const { RssService } = require("m3o/rss");

// List the saved RSS fields
async function listRssFeeds() {
  let rssService = new RssService(process.env.M3O_API_TOKEN);
  let rsp = await rssService.list({});
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

listRssFeeds();
