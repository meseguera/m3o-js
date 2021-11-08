const { TwitterService } = require("m3o/twitter");

// Get a user's twitter profile
async function getAusersTwitterProfile() {
  let twitterService = new TwitterService(process.env.M3O_API_TOKEN);
  let rsp = await twitterService.user({
    username: "crufter",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getAusersTwitterProfile();
