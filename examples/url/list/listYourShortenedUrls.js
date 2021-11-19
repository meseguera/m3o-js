const { UrlService } = require("m3o/url");
// List information on all the shortened URLs that you have created

const urlService = new UrlService(process.env.M3O_API_TOKEN);

async function listYourShortenedUrls() {
  const rsp = await urlService.list({});
  console.log(rsp);
}

listYourShortenedUrls();
