const { ThumbnailService } = require("m3o/thumbnail");
// Create a thumbnail screenshot by passing in a url, height and width

const thumbnailService = new ThumbnailService(process.env.M3O_API_TOKEN);

async function takeScreenshotOfAurl() {
  const rsp = await thumbnailService.screenshot({
    height: 600,
    url: "https://google.com",
    width: 600,
  });
  console.log(rsp);
}

takeScreenshotOfAurl();
