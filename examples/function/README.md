# Function

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Function/api](https://m3o.com/Function/api).

Endpoints:

## Describe

Get the info for a deployed function


[https://m3o.com/function/api#Describe](https://m3o.com/function/api#Describe)

```js
const { FunctionService } = require('m3o/function');
// Get the info for a deployed function

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

async function describeFunctionStatus() {
	const rsp = await functionService.describe({
  "name": "my-first-func",
  "project": "tests"
})
	console.log(rsp)
	
}

describeFunctionStatus()
```
## Deploy

Deploy a group of functions


[https://m3o.com/function/api#Deploy](https://m3o.com/function/api#Deploy)

```js
const { FunctionService } = require('m3o/function');
// Deploy a group of functions

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

async function deployAfunction() {
	const rsp = await functionService.deploy({
  "entrypoint": "helloworld",
  "name": "my-first-func",
  "project": "tests",
  "repo": "github.com/m3o/nodejs-function-example",
  "runtime": "nodejs14"
})
	console.log(rsp)
	
}

deployAfunction()
```
## Call

Call a function by name


[https://m3o.com/function/api#Call](https://m3o.com/function/api#Call)

```js
const { FunctionService } = require('m3o/function');
// Call a function by name

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

async function callAfunction() {
	const rsp = await functionService.call({
  "name": "my-first-func",
  "request": {}
})
	console.log(rsp)
	
}

callAfunction()
```
## List

List all the deployed functions


[https://m3o.com/function/api#List](https://m3o.com/function/api#List)

```js
const { FunctionService } = require('m3o/function');
// List all the deployed functions

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

async function listFunctions() {
	const rsp = await functionService.list({})
	console.log(rsp)
	
}

listFunctions()
```
## Delete

Delete a function by name


[https://m3o.com/function/api#Delete](https://m3o.com/function/api#Delete)

```js
const { FunctionService } = require('m3o/function');
// Delete a function by name

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

async function deleteAfunction() {
	const rsp = await functionService.delete({
  "name": "my-first-func",
  "project": "tests"
})
	console.log(rsp)
	
}

deleteAfunction()
```
