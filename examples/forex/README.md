# Forex

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Forex/api](https://m3o.com/Forex/api).

Endpoints:

## Price

Get the latest price for a given forex ticker


[https://m3o.com/forex/api#Price](https://m3o.com/forex/api#Price)

```js
const { ForexService } = require('m3o/forex');
// Get the latest price for a given forex ticker

const forexService = new ForexService(process.env.M3O_API_TOKEN)

async function getAnFxPrice() {
	const rsp = await forexService.price({
  "symbol": "GBPUSD"
})
	console.log(rsp)
	
}

getAnFxPrice()
```
## Quote

Get the latest quote for the forex


[https://m3o.com/forex/api#Quote](https://m3o.com/forex/api#Quote)

```js
const { ForexService } = require('m3o/forex');
// Get the latest quote for the forex

const forexService = new ForexService(process.env.M3O_API_TOKEN)

async function getAfxQuote() {
	const rsp = await forexService.quote({
  "symbol": "GBPUSD"
})
	console.log(rsp)
	
}

getAfxQuote()
```
## History

Returns the data for the previous close


[https://m3o.com/forex/api#History](https://m3o.com/forex/api#History)

```js
const { ForexService } = require('m3o/forex');
// Returns the data for the previous close

const forexService = new ForexService(process.env.M3O_API_TOKEN)

async function getPreviousClose() {
	const rsp = await forexService.history({
  "symbol": "GBPUSD"
})
	console.log(rsp)
	
}

getPreviousClose()
```
