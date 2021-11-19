const { UrlService } = require("m3o/url");

const urlService = new UrlService(process.env.M3O_API_TOKEN);

// List information on all the shortened URLs that you have created
async function listYourShortenedUrls() {
  const rsp = await urlService.list({});
  console.log(rsp);
}

listYourShortenedUrls();
