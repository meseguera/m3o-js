# Emoji

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Emoji/api](https://m3o.com/Emoji/api).

Endpoints:

## Find

Find an emoji by its alias e.g :beer:


[https://m3o.com/emoji/api#Find](https://m3o.com/emoji/api#Find)

```js
const { EmojiService } = require('m3o/emoji');

const emojiService = new EmojiService(process.env.M3O_API_TOKEN)

// Find an emoji by its alias e.g :beer:
async function findEmoji() {
	const rsp = await emojiService.find({
  "alias": ":beer:"
})
	console.log(rsp)
	
}

findEmoji()
```
## Flag

Get the flag for a country. Requires country code e.g GB for great britain


[https://m3o.com/emoji/api#Flag](https://m3o.com/emoji/api#Flag)

```js
const { EmojiService } = require('m3o/emoji');

const emojiService = new EmojiService(process.env.M3O_API_TOKEN)

// Get the flag for a country. Requires country code e.g GB for great britain
async function getFlagByCountryCode() {
	const rsp = await emojiService.flag({
  "alias": "GB"
})
	console.log(rsp)
	
}

getFlagByCountryCode()
```
## Print

Print text and renders the emojis with aliases e.g
let's grab a :beer: becomes let's grab a 🍺


[https://m3o.com/emoji/api#Print](https://m3o.com/emoji/api#Print)

```js
const { EmojiService } = require('m3o/emoji');

const emojiService = new EmojiService(process.env.M3O_API_TOKEN)

// Print text and renders the emojis with aliases e.g
// let's grab a :beer: becomes let's grab a 🍺
async function printTextIncludingEmoji() {
	const rsp = await emojiService.print({
  "text": "let's grab a :beer:"
})
	console.log(rsp)
	
}

printTextIncludingEmoji()
```
## Send

Send an emoji to anyone via SMS. Messages are sent in the form '<message> Sent from <from>'


[https://m3o.com/emoji/api#Send](https://m3o.com/emoji/api#Send)

```js
const { EmojiService } = require('m3o/emoji');

const emojiService = new EmojiService(process.env.M3O_API_TOKEN)

// Send an emoji to anyone via SMS. Messages are sent in the form '<message> Sent from <from>'
async function sendAtextContainingAnEmojiToAnyoneViaSms() {
	const rsp = await emojiService.send({
  "from": "Alice",
  "message": "let's grab a :beer:",
  "to": "+44782669123"
})
	console.log(rsp)
	
}

sendAtextContainingAnEmojiToAnyoneViaSms()
```
