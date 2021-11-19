# Prayer

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Prayer/api](https://m3o.com/Prayer/api).

Endpoints:

## Times

Get the prayer (salah) times for a location on a given date


[https://m3o.com/prayer/api#Times](https://m3o.com/prayer/api#Times)

```js
const { PrayerService } = require('m3o/prayer');
// Get the prayer (salah) times for a location on a given date

const prayerService = new PrayerService(process.env.M3O_API_TOKEN)

async function prayerTimes() {
	const rsp = await prayerService.times({
  "location": "london"
})
	console.log(rsp)
	
}

prayerTimes()
```
