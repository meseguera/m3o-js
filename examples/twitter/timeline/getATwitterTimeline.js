const { TwitterService } = require("m3o/twitter");

// Get the timeline for a given user
async function getAtwitterTimeline() {
  let twitterService = new TwitterService(process.env.M3O_API_TOKEN);
  let rsp = await twitterService.timeline({
    limit: 1,
    username: "m3oservices",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getAtwitterTimeline();
