# File

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/File/api](https://m3o.com/File/api).

Endpoints:

## List

List files by their project and optionally a path.


[https://m3o.com/file/api#List](https://m3o.com/file/api#List)

```js
const { FileService } = require('m3o/file');
// List files by their project and optionally a path.

const fileService = new FileService(process.env.M3O_API_TOKEN)

async function listFiles() {
	const rsp = await fileService.list({
  "project": "examples"
})
	console.log(rsp)
	
}

listFiles()
```
## Delete

Delete a file by project name/path


[https://m3o.com/file/api#Delete](https://m3o.com/file/api#Delete)

```js
const { FileService } = require('m3o/file');
// Delete a file by project name/path

const fileService = new FileService(process.env.M3O_API_TOKEN)

async function deleteFile() {
	const rsp = await fileService.delete({
  "path": "/document/text-files/file.txt",
  "project": "examples"
})
	console.log(rsp)
	
}

deleteFile()
```
## Read

Read a file by path


[https://m3o.com/file/api#Read](https://m3o.com/file/api#Read)

```js
const { FileService } = require('m3o/file');
// Read a file by path

const fileService = new FileService(process.env.M3O_API_TOKEN)

async function readFile() {
	const rsp = await fileService.read({
  "path": "/document/text-files/file.txt",
  "project": "examples"
})
	console.log(rsp)
	
}

readFile()
```
## Save

Save a file


[https://m3o.com/file/api#Save](https://m3o.com/file/api#Save)

```js
const { FileService } = require('m3o/file');
// Save a file

const fileService = new FileService(process.env.M3O_API_TOKEN)

async function saveFile() {
	const rsp = await fileService.save({
  "file": {
    "content": "file content example",
    "path": "/document/text-files/file.txt",
    "project": "examples"
  }
})
	console.log(rsp)
	
}

saveFile()
```
