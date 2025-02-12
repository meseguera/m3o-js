# Routing

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Routing/api](https://m3o.com/Routing/api).

Endpoints:

## Directions

Turn by turn directions from a start point to an end point including maneuvers and bearings


[https://m3o.com/routing/api#Directions](https://m3o.com/routing/api#Directions)

```js
const { RoutingService } = require('m3o/routing');

const routingService = new RoutingService(process.env.M3O_API_TOKEN)

// Turn by turn directions from a start point to an end point including maneuvers and bearings
async function turnByTurnDirections() {
	const rsp = await routingService.directions({
  "destination": {
    "latitude": 52.529407,
    "longitude": 13.397634
  },
  "origin": {
    "latitude": 52.517037,
    "longitude": 13.38886
  }
})
	console.log(rsp)
	
}

turnByTurnDirections()
```
## Route

Retrieve a route as a simple list of gps points along with total distance and estimated duration


[https://m3o.com/routing/api#Route](https://m3o.com/routing/api#Route)

```js
const { RoutingService } = require('m3o/routing');

const routingService = new RoutingService(process.env.M3O_API_TOKEN)

// Retrieve a route as a simple list of gps points along with total distance and estimated duration
async function gpsPointsForAroute() {
	const rsp = await routingService.route({
  "destination": {
    "latitude": 52.529407,
    "longitude": 13.397634
  },
  "origin": {
    "latitude": 52.517037,
    "longitude": 13.38886
  }
})
	console.log(rsp)
	
}

gpsPointsForAroute()
```
## Eta

Get the eta for a route from origin to destination. The eta is an estimated time based on car routes


[https://m3o.com/routing/api#Eta](https://m3o.com/routing/api#Eta)

```js
const { RoutingService } = require('m3o/routing');

const routingService = new RoutingService(process.env.M3O_API_TOKEN)

// Get the eta for a route from origin to destination. The eta is an estimated time based on car routes
async function etaFromPointAtoPointB() {
	const rsp = await routingService.eta({
  "destination": {
    "latitude": 52.529407,
    "longitude": 13.397634
  },
  "origin": {
    "latitude": 52.517037,
    "longitude": 13.38886
  }
})
	console.log(rsp)
	
}

etaFromPointAtoPointB()
```
