import * as m3o from "@m3o/m3o-node";

export class EventService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Publish a message to the event stream.
  publish(request: PublishRequest): Promise<PublishResponse> {
    return this.client.call(
      "event",
      "Publish",
      request
    ) as Promise<PublishResponse>;
  }
  // Read stored events
  read(request: ReadRequest): Promise<ReadResponse> {
    return this.client.call("event", "Read", request) as Promise<ReadResponse>;
  }
  // Subscribe to messages for a given topic.
  subscribe(request: SubscribeRequest): Promise<SubscribeResponse> {
    return this.client.call(
      "event",
      "Subscribe",
      request
    ) as Promise<SubscribeResponse>;
  }
}

export interface Ev {
  // event id
  id?: string;
  // event message
  message?: { [key: string]: any };
  // event timestamp
  timestamp?: string;
}

export interface PublishRequest {
  // The json message to publish
  message?: { [key: string]: any };
  // The topic to publish to
  topic?: string;
}

export interface PublishResponse {}

export interface ReadRequest {
  // number of events to read; default 25
  limit?: number;
  // offset for the events; default 0
  offset?: number;
  // topic to read from
  topic?: string;
}

export interface ReadResponse {
  // the events
  events?: Ev[];
}

export interface SubscribeRequest {
  // Optional group for the subscription
  group?: string;
  // Optional offset to read from e.g "2006-01-02T15:04:05.999Z07:00"
  offset?: string;
  // The topic to subscribe to
  topic?: string;
}

export interface SubscribeResponse {
  // Unique message id
  id?: string;
  // The next json message on the topic
  message?: { [key: string]: any };
  // Timestamp of publishing
  timestamp?: string;
  // The topic subscribed to
  topic?: string;
}
