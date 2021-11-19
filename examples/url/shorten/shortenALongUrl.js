const { UrlService } = require("m3o/url");
// Shortens a destination URL and returns a full short URL.

const urlService = new UrlService(process.env.M3O_API_TOKEN);

async function shortenAlongUrl() {
  const rsp = await urlService.shorten({
    destinationURL: "https://mysite.com/this-is-a-rather-long-web-address",
  });
  console.log(rsp);
}

shortenAlongUrl();
