const { SunnahService } = require("m3o/sunnah");

// Hadiths returns a list of hadiths and their corresponding text for a
// given book within a collection.
async function listTheHadithsInAbook() {
  let sunnahService = new SunnahService(process.env.M3O_API_TOKEN);
  let rsp = await sunnahService.hadiths({
    book: 1,
    collection: "bukhari",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

listTheHadithsInAbook();
