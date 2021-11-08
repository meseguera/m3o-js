const { EmojiService } = require("m3o/emoji");

// Print text and renders the emojis with aliases e.g
// let's grab a :beer: becomes let's grab a 🍺
async function printTextIncludingEmoji() {
  let emojiService = new EmojiService(process.env.M3O_API_TOKEN);
  let rsp = await emojiService.print({
    text: "let's grab a :beer:",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

printTextIncludingEmoji();
