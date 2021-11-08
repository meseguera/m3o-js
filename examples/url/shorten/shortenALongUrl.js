const { UrlService } = require("m3o/url");

// Shortens a destination URL and returns a full short URL.
async function shortenAlongUrl() {
  let urlService = new UrlService(process.env.M3O_API_TOKEN);
  let rsp = await urlService.shorten({
    destinationURL: "https://mysite.com/this-is-a-rather-long-web-address",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

shortenAlongUrl();
