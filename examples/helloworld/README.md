# Helloworld

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Helloworld/api](https://m3o.com/Helloworld/api).

Endpoints:

## Call

Call returns a personalised "Hello $name" response


[https://m3o.com/helloworld/api#Call](https://m3o.com/helloworld/api#Call)

```js
const { HelloworldService } = require('m3o/helloworld');
// Call returns a personalised "Hello $name" response

const helloworldService = new HelloworldService(process.env.M3O_API_TOKEN)

async function callTheHelloworldService() {
	const rsp = await helloworldService.call({
  "name": "John"
})
	console.log(rsp)
	
}

callTheHelloworldService()
```
## Stream

Stream returns a stream of "Hello $name" responses


[https://m3o.com/helloworld/api#Stream](https://m3o.com/helloworld/api#Stream)

```js
const { HelloworldService } = require('m3o/helloworld');
// Stream returns a stream of "Hello $name" responses

const helloworldService = new HelloworldService(process.env.M3O_API_TOKEN)

async function streamsResponsesFromTheServerUsingWebsockets() {
	const rsp = await helloworldService.stream({
  "messages": 10,
  "name": "John"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

streamsResponsesFromTheServerUsingWebsockets()
```
