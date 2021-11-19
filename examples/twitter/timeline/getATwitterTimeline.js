const { TwitterService } = require("m3o/twitter");
// Get the timeline for a given user

const twitterService = new TwitterService(process.env.M3O_API_TOKEN);

async function getAtwitterTimeline() {
  const rsp = await twitterService.timeline({
    limit: 1,
    username: "m3oservices",
  });
  console.log(rsp);
}

getAtwitterTimeline();
