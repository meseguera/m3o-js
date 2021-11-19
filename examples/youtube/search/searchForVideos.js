const { YoutubeService } = require("m3o/youtube");
// Search for videos on YouTube

const youtubeService = new YoutubeService(process.env.M3O_API_TOKEN);

async function searchForVideos() {
  const rsp = await youtubeService.search({
    query: "donuts",
  });
  console.log(rsp);
}

searchForVideos();
