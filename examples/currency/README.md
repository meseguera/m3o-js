# Currency

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Currency/api](https://m3o.com/Currency/api).

Endpoints:

## Codes

Codes returns the supported currency codes for the API


[https://m3o.com/currency/api#Codes](https://m3o.com/currency/api#Codes)

```js
const { CurrencyService } = require('m3o/currency');
// Codes returns the supported currency codes for the API

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN)

async function getSupportedCodes() {
	const rsp = await currencyService.codes({})
	console.log(rsp)
	
}

getSupportedCodes()
```
## Rates

Rates returns the currency rates for a given code e.g USD


[https://m3o.com/currency/api#Rates](https://m3o.com/currency/api#Rates)

```js
const { CurrencyService } = require('m3o/currency');
// Rates returns the currency rates for a given code e.g USD

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN)

async function getRatesForUsd() {
	const rsp = await currencyService.rates({
  "code": "USD"
})
	console.log(rsp)
	
}

getRatesForUsd()
```
## Convert

Convert returns the currency conversion rate between two pairs e.g USD/GBP


[https://m3o.com/currency/api#Convert](https://m3o.com/currency/api#Convert)

```js
const { CurrencyService } = require('m3o/currency');
// Convert returns the currency conversion rate between two pairs e.g USD/GBP

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN)

async function convertUsdToGbp() {
	const rsp = await currencyService.convert({
  "from": "USD",
  "to": "GBP"
})
	console.log(rsp)
	
}

convertUsdToGbp()
```
## Convert

Convert returns the currency conversion rate between two pairs e.g USD/GBP


[https://m3o.com/currency/api#Convert](https://m3o.com/currency/api#Convert)

```js
const { CurrencyService } = require('m3o/currency');
// Convert returns the currency conversion rate between two pairs e.g USD/GBP

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN)

async function convert10usdToGbp() {
	const rsp = await currencyService.convert({
  "amount": 10,
  "from": "USD",
  "to": "GBP"
})
	console.log(rsp)
	
}

convert10usdToGbp()
```
## History

Returns the historic rates for a currency on a given date


[https://m3o.com/currency/api#History](https://m3o.com/currency/api#History)

```js
const { CurrencyService } = require('m3o/currency');
// Returns the historic rates for a currency on a given date

const currencyService = new CurrencyService(process.env.M3O_API_TOKEN)

async function historicRatesForAcurrency() {
	const rsp = await currencyService.history({
  "code": "USD",
  "date": "2021-05-30"
})
	console.log(rsp)
	
}

historicRatesForAcurrency()
```
