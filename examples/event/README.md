# Event

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Event/api](https://m3o.com/Event/api).

Endpoints:

## Publish

Publish a message to the event stream.


[https://m3o.com/event/api#Publish](https://m3o.com/event/api#Publish)

```js
const { EventService } = require('m3o/event');

// Publish a message to the event stream.
async function publishAmessage() {
	let eventService = new EventService(process.env.M3O_API_TOKEN)
	let rsp = await eventService.publish({
  "message": {
    "id": "1",
    "type": "signup",
    "user": "john"
  },
  "topic": "user"
})
	console.log(rsp)
}

publishAmessage()
```
## Subscribe

Subscribe to messages for a given topic.


[https://m3o.com/event/api#Subscribe](https://m3o.com/event/api#Subscribe)

```js
const { EventService } = require('m3o/event');

// Subscribe to messages for a given topic.
async function subscribeToAtopic() {
	let eventService = new EventService(process.env.M3O_API_TOKEN)
	let rsp = await eventService.subscribe({
  "topic": "user"
})
	console.log(rsp)
}

subscribeToAtopic()
```
## Read

Read stored events


[https://m3o.com/event/api#Read](https://m3o.com/event/api#Read)

```js
const { EventService } = require('m3o/event');

// Read stored events
async function readEventsOnAtopic() {
	let eventService = new EventService(process.env.M3O_API_TOKEN)
	let rsp = await eventService.read({
  "topic": "user"
})
	console.log(rsp)
}

readEventsOnAtopic()
```
