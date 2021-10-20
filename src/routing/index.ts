import * as m3o from '@m3o/m3o-node';

export class RoutingService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Turn by turn directions from a start point to an end point including maneuvers and bearings
  directions(
    request: RoutingDirectionsRequest
  ): Promise<RoutingDirectionsResponse> {
    return this.client.call(
      'routing',
      'Directions',
      request
    ) as Promise<RoutingDirectionsResponse>;
  }
  // Get the eta for a route from origin to destination. The eta is an estimated time based on car routes
  eta(request: RoutingEtaRequest): Promise<RoutingEtaResponse> {
    return this.client.call(
      'routing',
      'Eta',
      request
    ) as Promise<RoutingEtaResponse>;
  }
  // Retrieve a route as a simple list of gps points along with total distance and estimated duration
  route(request: RoutingRouteRequest): Promise<RoutingRouteResponse> {
    return this.client.call(
      'routing',
      'Route',
      request
    ) as Promise<RoutingRouteResponse>;
  }
}

export interface RoutingDirection {
  // distance to travel in meters
  distance?: number;
  // duration to travel in seconds
  duration?: number;
  // human readable instruction
  instruction?: string;
  // intersections on route
  intersections?: RoutingIntersection[];
  // maneuver to take
  maneuver?: { [key: string]: any };
  // street name or location
  name?: string;
  // alternative reference
  reference?: string;
}

export interface RoutingDirectionsRequest {
  // The destination of the journey
  destination?: RoutingPoint;
  // The staring point for the journey
  origin?: RoutingPoint;
}

export interface RoutingDirectionsResponse {
  // Turn by turn directions
  directions?: RoutingDirection[];
  // Estimated distance of the route in meters
  distance?: number;
  // Estimated duration of the route in seconds
  duration?: number;
  // The waypoints on the route
  waypoints?: RoutingWaypoint[];
}

export interface RoutingEtaRequest {
  // The end point for the eta calculation
  destination?: RoutingPoint;
  // The starting point for the eta calculation
  origin?: RoutingPoint;
  // speed in kilometers
  speed?: number;
  // type of transport. Only "car" is supported currently.
  type?: string;
}

export interface RoutingEtaResponse {
  // eta in seconds
  duration?: number;
}

export interface RoutingIntersection {
  bearings?: number[];
  location?: RoutingPoint;
}

export interface RoutingManeuver {
  action?: string;
  bearingAfter?: number;
  bearingBefore?: number;
  direction?: string;
  location?: RoutingPoint;
}

export interface RoutingPoint {
  // Lat e.g 52.523219
  latitude?: number;
  // Long e.g 13.428555
  longitude?: number;
}

export interface RoutingRouteRequest {
  // Point of destination for the trip
  destination?: RoutingPoint;
  // Point of origin for the trip
  origin?: RoutingPoint;
}

export interface RoutingRouteResponse {
  // estimated distance in meters
  distance?: number;
  // estimated duration in seconds
  duration?: number;
  // waypoints on the route
  waypoints?: RoutingWaypoint[];
}

export interface RoutingWaypoint {
  // gps point coordinates
  location?: RoutingPoint;
  // street name or related reference
  name?: string;
}
