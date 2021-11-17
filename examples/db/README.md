# Db

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Db/api](https://m3o.com/Db/api).

Endpoints:

## RenameTable

Rename a table


[https://m3o.com/db/api#RenameTable](https://m3o.com/db/api#RenameTable)

```js
const { DbService } = require('m3o/db');

// Rename a table
async function renameTable() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.renameTable({
  "from": "events",
  "to": "events_backup"
})
	console.log(rsp)
	
}

renameTable()
```
## Truncate

Truncate the records in a table


[https://m3o.com/db/api#Truncate](https://m3o.com/db/api#Truncate)

```js
const { DbService } = require('m3o/db');

// Truncate the records in a table
async function truncateTable() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.truncate({
  "table": "users"
})
	console.log(rsp)
	
}

truncateTable()
```
## Update

Update a record in the database. Include an "id" in the record to update.


[https://m3o.com/db/api#Update](https://m3o.com/db/api#Update)

```js
const { DbService } = require('m3o/db');

// Update a record in the database. Include an "id" in the record to update.
async function updateArecord() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.update({
  "record": {
    "age": 43,
    "id": "1"
  },
  "table": "users"
})
	console.log(rsp)
	
}

updateArecord()
```
## Read

Read data from a table. Lookup can be by ID or via querying any field in the record.


[https://m3o.com/db/api#Read](https://m3o.com/db/api#Read)

```js
const { DbService } = require('m3o/db');

// Read data from a table. Lookup can be by ID or via querying any field in the record.
async function readRecords() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.read({
  "query": "age == 43",
  "table": "users"
})
	console.log(rsp)
	
}

readRecords()
```
## Delete

Delete a record in the database by id.


[https://m3o.com/db/api#Delete](https://m3o.com/db/api#Delete)

```js
const { DbService } = require('m3o/db');

// Delete a record in the database by id.
async function deleteArecord() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.delete({
  "id": "1",
  "table": "users"
})
	console.log(rsp)
	
}

deleteArecord()
```
## DropTable

Drop a table in the DB


[https://m3o.com/db/api#DropTable](https://m3o.com/db/api#DropTable)

```js
const { DbService } = require('m3o/db');

// Drop a table in the DB
async function dropTable() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.dropTable({
  "table": "users"
})
	console.log(rsp)
	
}

dropTable()
```
## Count

Count records in a table


[https://m3o.com/db/api#Count](https://m3o.com/db/api#Count)

```js
const { DbService } = require('m3o/db');

// Count records in a table
async function countEntriesInAtable() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.count({
  "table": "users"
})
	console.log(rsp)
	
}

countEntriesInAtable()
```
## ListTables

List tables in the DB


[https://m3o.com/db/api#ListTables](https://m3o.com/db/api#ListTables)

```js
const { DbService } = require('m3o/db');

// List tables in the DB
async function listTables() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.listTables({})
	console.log(rsp)
	
}

listTables()
```
## Create

Create a record in the database. Optionally include an "id" field otherwise it's set automatically.


[https://m3o.com/db/api#Create](https://m3o.com/db/api#Create)

```js
const { DbService } = require('m3o/db');

// Create a record in the database. Optionally include an "id" field otherwise it's set automatically.
async function createArecord() {
	let dbService = new DbService(process.env.M3O_API_TOKEN)
	let rsp = await dbService.create({
  "record": {
    "age": 42,
    "id": "1",
    "isActive": true,
    "name": "Jane"
  },
  "table": "users"
})
	console.log(rsp)
	
}

createArecord()
```
