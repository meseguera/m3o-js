const { GoogleService } = require("m3o/google");
// Search for videos on Google

const googleService = new GoogleService(process.env.M3O_API_TOKEN);

async function searchForVideos() {
  const rsp = await googleService.search({
    query: "how to make donuts",
  });
  console.log(rsp);
}

searchForVideos();
