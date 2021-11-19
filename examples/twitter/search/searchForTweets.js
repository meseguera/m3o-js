const { TwitterService } = require("m3o/twitter");
// Search for tweets with a simple query

const twitterService = new TwitterService(process.env.M3O_API_TOKEN);

async function searchForTweets() {
  const rsp = await twitterService.search({
    query: "cats",
  });
  console.log(rsp);
}

searchForTweets();
