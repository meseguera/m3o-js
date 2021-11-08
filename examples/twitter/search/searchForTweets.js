const { TwitterService } = require("m3o/twitter");

// Search for tweets with a simple query
async function searchForTweets() {
  let twitterService = new TwitterService(process.env.M3O_API_TOKEN);
  let rsp = await twitterService.search({
    query: "cats",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

searchForTweets();
