const { SunnahService } = require("m3o/sunnah");

// Get all the chapters of a given book within a collection.
async function listTheChaptersInAbook() {
  let sunnahService = new SunnahService(process.env.M3O_API_TOKEN);
  let rsp = await sunnahService.chapters({
    book: 1,
    collection: "bukhari",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

listTheChaptersInAbook();
