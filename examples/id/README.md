# Id

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Id/api](https://m3o.com/Id/api).

Endpoints:

## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

// Generate a unique ID. Defaults to uuid.
async function generateAuniqueId() {
	let idService = new IdService(process.env.M3O_API_TOKEN)
	let rsp = await idService.generate({
  "type": "uuid"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

generateAuniqueId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

// Generate a unique ID. Defaults to uuid.
async function generateAshortId() {
	let idService = new IdService(process.env.M3O_API_TOKEN)
	let rsp = await idService.generate({
  "type": "shortid"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

generateAshortId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

// Generate a unique ID. Defaults to uuid.
async function generateAsnowflakeId() {
	let idService = new IdService(process.env.M3O_API_TOKEN)
	let rsp = await idService.generate({
  "type": "snowflake"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

generateAsnowflakeId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

// Generate a unique ID. Defaults to uuid.
async function generateAbigflakeId() {
	let idService = new IdService(process.env.M3O_API_TOKEN)
	let rsp = await idService.generate({
  "type": "bigflake"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

generateAbigflakeId()
```
## Types

List the types of IDs available. No query params needed.


[https://m3o.com/id/api#Types](https://m3o.com/id/api#Types)

```js
const { IdService } = require('m3o/id');

// List the types of IDs available. No query params needed.
async function listTheTypesOfIdsAvailable() {
	let idService = new IdService(process.env.M3O_API_TOKEN)
	let rsp = await idService.types({})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

listTheTypesOfIdsAvailable()
```
