# Stream

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Stream/api](https://m3o.com/Stream/api).

Endpoints:

## ListMessages

List messages for a given channel


[https://m3o.com/stream/api#ListMessages](https://m3o.com/stream/api#ListMessages)

```js
const { StreamService } = require('m3o/stream');

// List messages for a given channel
async function listMessages() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.listMessages({
  "channel": "general"
})
	console.log(rsp)
}

listMessages()
```
## ListChannels

List all the active channels


[https://m3o.com/stream/api#ListChannels](https://m3o.com/stream/api#ListChannels)

```js
const { StreamService } = require('m3o/stream');

// List all the active channels
async function listChannels() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.listChannels({})
	console.log(rsp)
}

listChannels()
```
## SendMessage

SendMessage a message to the stream.


[https://m3o.com/stream/api#SendMessage](https://m3o.com/stream/api#SendMessage)

```js
const { StreamService } = require('m3o/stream');

// SendMessage a message to the stream.
async function sendAmessage() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.sendMessage({
  "channel": "general",
  "text": "Hey checkout this tweet https://twitter.com/m3oservices/status/1455291054295498752"
})
	console.log(rsp)
}

sendAmessage()
```
