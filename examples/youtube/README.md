# Youtube

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Youtube/api](https://m3o.com/Youtube/api).

Endpoints:

## Search

Search for videos on YouTube


[https://m3o.com/youtube/api#Search](https://m3o.com/youtube/api#Search)

```js
const { YoutubeService } = require('m3o/youtube');

const youtubeService = new YoutubeService(process.env.M3O_API_TOKEN)

// Search for videos on YouTube
async function searchForVideos() {
	const rsp = await youtubeService.search({
  "query": "donuts"
})
	console.log(rsp)
	
}

searchForVideos()
```
