import * as m3o from "@m3o/m3o-node";

export class LocationService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Read an entity by its ID
  read(request: ReadRequest): Promise<ReadResponse> {}
  // Save an entity's current position
  save(request: SaveRequest): Promise<SaveResponse> {}
  // Search for entities in a given radius
  search(request: SearchRequest): Promise<SearchResponse> {}
}

export interface Entity {
  id?: string;
  location?: Point;
  type?: string;
}

export interface Point {
  latitude?: number;
  longitude?: number;
  timestamp?: number;
}

export interface ReadRequest {
  // the entity id
  id?: string;
}

export interface ReadResponse {
  entity?: { [key: string]: any };
}

export interface SaveRequest {
  entity?: { [key: string]: any };
}

export interface SaveResponse {}

export interface SearchRequest {
  // Central position to search from
  center?: Point;
  // Maximum number of entities to return
  numEntities?: number;
  // radius in meters
  radius?: number;
  // type of entities to filter
  type?: string;
}

export interface SearchResponse {
  entities?: Entity[];
}
