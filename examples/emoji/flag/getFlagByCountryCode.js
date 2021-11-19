const { EmojiService } = require("m3o/emoji");
// Get the flag for a country. Requires country code e.g GB for great britain

const emojiService = new EmojiService(process.env.M3O_API_TOKEN);

async function getFlagByCountryCode() {
  const rsp = await emojiService.flag({
    alias: "GB",
  });
  console.log(rsp);
}

getFlagByCountryCode();
