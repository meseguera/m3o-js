const { SunnahService } = require("m3o/sunnah");
// Get all the chapters of a given book within a collection.

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN);

async function listTheChaptersInAbook() {
  const rsp = await sunnahService.chapters({
    book: 1,
    collection: "bukhari",
  });
  console.log(rsp);
}

listTheChaptersInAbook();
