# Twitter

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Twitter/api](https://m3o.com/Twitter/api).

Endpoints:

## Search

Search for tweets with a simple query


[https://m3o.com/twitter/api#Search](https://m3o.com/twitter/api#Search)

```js
const { TwitterService } = require('m3o/twitter');

// Search for tweets with a simple query
async function searchForTweets() {
	let twitterService = new TwitterService(process.env.M3O_API_TOKEN)
	let rsp = await twitterService.search({
  "query": "cats"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

searchForTweets()
```
## Trends

Get the current global trending topics


[https://m3o.com/twitter/api#Trends](https://m3o.com/twitter/api#Trends)

```js
const { TwitterService } = require('m3o/twitter');

// Get the current global trending topics
async function getTheCurrentGlobalTrendingTopics() {
	let twitterService = new TwitterService(process.env.M3O_API_TOKEN)
	let rsp = await twitterService.trends({})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

getTheCurrentGlobalTrendingTopics()
```
## User

Get a user's twitter profile


[https://m3o.com/twitter/api#User](https://m3o.com/twitter/api#User)

```js
const { TwitterService } = require('m3o/twitter');

// Get a user's twitter profile
async function getAusersTwitterProfile() {
	let twitterService = new TwitterService(process.env.M3O_API_TOKEN)
	let rsp = await twitterService.user({
  "username": "crufter"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

getAusersTwitterProfile()
```
## Timeline

Get the timeline for a given user


[https://m3o.com/twitter/api#Timeline](https://m3o.com/twitter/api#Timeline)

```js
const { TwitterService } = require('m3o/twitter');

// Get the timeline for a given user
async function getAtwitterTimeline() {
	let twitterService = new TwitterService(process.env.M3O_API_TOKEN)
	let rsp = await twitterService.timeline({
  "limit": 1,
  "username": "m3oservices"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

getAtwitterTimeline()
```
