const { QuranService } = require("m3o/quran");
// List the Chapters (surahs) of the Quran

const quranService = new QuranService(process.env.M3O_API_TOKEN);

async function listChapters() {
  const rsp = await quranService.chapters({
    language: "en",
  });
  console.log(rsp);
}

listChapters();
