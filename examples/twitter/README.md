# Twitter

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Twitter/api](https://m3o.com/Twitter/api).

Endpoints:

## Timeline

Get the timeline for a given user


[https://m3o.com/twitter/api#Timeline](https://m3o.com/twitter/api#Timeline)

```js
const { TwitterService } = require('m3o/twitter');
// Get the timeline for a given user

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

async function getAtwitterTimeline() {
	const rsp = await twitterService.timeline({
  "limit": 1,
  "username": "m3oservices"
})
	console.log(rsp)
	
}

getAtwitterTimeline()
```
## Search

Search for tweets with a simple query


[https://m3o.com/twitter/api#Search](https://m3o.com/twitter/api#Search)

```js
const { TwitterService } = require('m3o/twitter');
// Search for tweets with a simple query

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

async function searchForTweets() {
	const rsp = await twitterService.search({
  "query": "cats"
})
	console.log(rsp)
	
}

searchForTweets()
```
## Trends

Get the current global trending topics


[https://m3o.com/twitter/api#Trends](https://m3o.com/twitter/api#Trends)

```js
const { TwitterService } = require('m3o/twitter');
// Get the current global trending topics

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

async function getTheCurrentGlobalTrendingTopics() {
	const rsp = await twitterService.trends({})
	console.log(rsp)
	
}

getTheCurrentGlobalTrendingTopics()
```
## User

Get a user's twitter profile


[https://m3o.com/twitter/api#User](https://m3o.com/twitter/api#User)

```js
const { TwitterService } = require('m3o/twitter');
// Get a user's twitter profile

const twitterService = new TwitterService(process.env.M3O_API_TOKEN)

async function getAusersTwitterProfile() {
	const rsp = await twitterService.user({
  "username": "crufter"
})
	console.log(rsp)
	
}

getAusersTwitterProfile()
```
