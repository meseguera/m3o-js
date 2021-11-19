const { TwitterService } = require("m3o/twitter");
// Get a user's twitter profile

const twitterService = new TwitterService(process.env.M3O_API_TOKEN);

async function getAusersTwitterProfile() {
  const rsp = await twitterService.user({
    username: "crufter",
  });
  console.log(rsp);
}

getAusersTwitterProfile();
