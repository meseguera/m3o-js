# User

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/User/api](https://m3o.com/User/api).

Endpoints:

## VerifyEmail

Verify the email address of an account from a token sent in an email to the user.


[https://m3o.com/user/api#VerifyEmail](https://m3o.com/user/api#VerifyEmail)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Verify the email address of an account from a token sent in an email to the user.
async function verifyEmail() {
	const rsp = await userService.verifyEmail({
  "email": "joe@example.com",
  "token": "012345"
})
	console.log(rsp)
	
}

verifyEmail()
```
## Delete

Delete an account by id


[https://m3o.com/user/api#Delete](https://m3o.com/user/api#Delete)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Delete an account by id
async function deleteUserAccount() {
	const rsp = await userService.delete({
  "id": "8b98acbe-0b6a-4d66-a414-5ffbf666786f"
})
	console.log(rsp)
	
}

deleteUserAccount()
```
## Logout

Logout a user account


[https://m3o.com/user/api#Logout](https://m3o.com/user/api#Logout)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Logout a user account
async function logAuserOut() {
	const rsp = await userService.logout({
  "sessionId": "df91a612-5b24-4634-99ff-240220ab8f55"
})
	console.log(rsp)
	
}

logAuserOut()
```
## ReadSession

Read a session by the session id. In the event it has expired or is not found and error is returned.


[https://m3o.com/user/api#ReadSession](https://m3o.com/user/api#ReadSession)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Read a session by the session id. In the event it has expired or is not found and error is returned.
async function readAsessionByTheSessionId() {
	const rsp = await userService.readSession({
  "sessionId": "df91a612-5b24-4634-99ff-240220ab8f55"
})
	console.log(rsp)
	
}

readAsessionByTheSessionId()
```
## List

List all users. Returns a paged list of results


[https://m3o.com/user/api#List](https://m3o.com/user/api#List)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// List all users. Returns a paged list of results
async function listAllUsers() {
	const rsp = await userService.list({
  "limit": 100,
  "offset": 0
})
	console.log(rsp)
	
}

listAllUsers()
```
## Create

Create a new user account. The email address and username for the account must be unique.


[https://m3o.com/user/api#Create](https://m3o.com/user/api#Create)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Create a new user account. The email address and username for the account must be unique.
async function createAnAccount() {
	const rsp = await userService.create({
  "email": "joe@example.com",
  "id": "user-1",
  "password": "Password1",
  "username": "joe"
})
	console.log(rsp)
	
}

createAnAccount()
```
## SendPasswordResetEmail

Send an email with a verification code to reset password.
Call "ResetPassword" endpoint once user provides the code.


[https://m3o.com/user/api#SendPasswordResetEmail](https://m3o.com/user/api#SendPasswordResetEmail)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Send an email with a verification code to reset password.
// Call "ResetPassword" endpoint once user provides the code.
async function sendPasswordResetEmail() {
	const rsp = await userService.sendPasswordResetEmail({
  "email": "joe@example.com",
  "fromName": "Awesome Dot Com",
  "subject": "Password reset",
  "textContent": "Hi there,\n click here to reset your password: myapp.com/reset/code?=$code"
})
	console.log(rsp)
	
}

sendPasswordResetEmail()
```
## ResetPassword

Reset password with the code sent by the "SendPasswordResetEmail" endoint.


[https://m3o.com/user/api#ResetPassword](https://m3o.com/user/api#ResetPassword)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Reset password with the code sent by the "SendPasswordResetEmail" endoint.
async function resetPassword() {
	const rsp = await userService.resetPassword({
  "code": "012345",
  "confirmPassword": "NewPassword1",
  "email": "joe@example.com",
  "newPassword": "NewPassword1"
})
	console.log(rsp)
	
}

resetPassword()
```
## SendVerificationEmail

Send a verification email
to the user being signed up. Email from will be from 'noreply@email.m3ocontent.com',
but you can provide the title and contents.
The verification link will be injected in to the email as a template variable, $micro_verification_link.
Example: 'Hi there, welcome onboard! Use the link below to verify your email: $micro_verification_link'
The variable will be replaced with an actual url that will look similar to this:
'https://user.m3o.com/user/verify?token=a-verification-token&redirectUrl=your-redir-url'


[https://m3o.com/user/api#SendVerificationEmail](https://m3o.com/user/api#SendVerificationEmail)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Send a verification email
// to the user being signed up. Email from will be from 'noreply@email.m3ocontent.com',
// but you can provide the title and contents.
// The verification link will be injected in to the email as a template variable, $micro_verification_link.
// Example: 'Hi there, welcome onboard! Use the link below to verify your email: $micro_verification_link'
// The variable will be replaced with an actual url that will look similar to this:
// 'https://user.m3o.com/user/verify?token=a-verification-token&redirectUrl=your-redir-url'
async function sendVerificationEmail() {
	const rsp = await userService.sendVerificationEmail({
  "email": "joe@example.com",
  "failureRedirectUrl": "https://m3o.com/verification-failed",
  "fromName": "Awesome Dot Com",
  "redirectUrl": "https://m3o.com",
  "subject": "Email verification",
  "textContent": "Hi there,\n\nPlease verify your email by clicking this link: $micro_verification_link"
})
	console.log(rsp)
	
}

sendVerificationEmail()
```
## Login

Login using username or email. The response will return a new session for successful login,
401 in the case of login failure and 500 for any other error


[https://m3o.com/user/api#Login](https://m3o.com/user/api#Login)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Login using username or email. The response will return a new session for successful login,
// 401 in the case of login failure and 500 for any other error
async function logAuserIn() {
	const rsp = await userService.login({
  "email": "joe@example.com",
  "password": "Password1"
})
	console.log(rsp)
	
}

logAuserIn()
```
## Update

Update the account username or email


[https://m3o.com/user/api#Update](https://m3o.com/user/api#Update)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Update the account username or email
async function updateAnAccount() {
	const rsp = await userService.update({
  "email": "joe+2@example.com",
  "id": "user-1"
})
	console.log(rsp)
	
}

updateAnAccount()
```
## UpdatePassword

Update the account password


[https://m3o.com/user/api#UpdatePassword](https://m3o.com/user/api#UpdatePassword)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Update the account password
async function updateTheAccountPassword() {
	const rsp = await userService.updatePassword({
  "confirmPassword": "Password2",
  "id": "user-1",
  "newPassword": "Password2",
  "oldPassword": "Password1"
})
	console.log(rsp)
	
}

updateTheAccountPassword()
```
## Read

Read an account by id, username or email. Only one need to be specified.


[https://m3o.com/user/api#Read](https://m3o.com/user/api#Read)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Read an account by id, username or email. Only one need to be specified.
async function readAnAccountById() {
	const rsp = await userService.read({
  "id": "user-1"
})
	console.log(rsp)
	
}

readAnAccountById()
```
## Read

Read an account by id, username or email. Only one need to be specified.


[https://m3o.com/user/api#Read](https://m3o.com/user/api#Read)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Read an account by id, username or email. Only one need to be specified.
async function readAccountByUsernameOrEmail() {
	const rsp = await userService.read({
  "username": "joe"
})
	console.log(rsp)
	
}

readAccountByUsernameOrEmail()
```
## Read

Read an account by id, username or email. Only one need to be specified.


[https://m3o.com/user/api#Read](https://m3o.com/user/api#Read)

```js
const { UserService } = require('m3o/user');

const userService = new UserService(process.env.M3O_API_TOKEN)

// Read an account by id, username or email. Only one need to be specified.
async function readAccountByEmail() {
	const rsp = await userService.read({
  "email": "joe@example.com"
})
	console.log(rsp)
	
}

readAccountByEmail()
```
