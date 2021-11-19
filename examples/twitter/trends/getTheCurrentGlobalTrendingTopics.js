const { TwitterService } = require("m3o/twitter");
// Get the current global trending topics

const twitterService = new TwitterService(process.env.M3O_API_TOKEN);

async function getTheCurrentGlobalTrendingTopics() {
  const rsp = await twitterService.trends({});
  console.log(rsp);
}

getTheCurrentGlobalTrendingTopics();
