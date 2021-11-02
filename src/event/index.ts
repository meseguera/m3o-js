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
  // Subscribe to messages for a given topic.
  subscribe(request: SubscribeRequest): Promise<SubscribeResponse> {
    return this.client.call(
      "event",
      "Subscribe",
      request
    ) as Promise<SubscribeResponse>;
  }
}

export interface PublishRequest {
  // The json message to publish
  message?: { [key: string]: any };
  // The topic to publish to
  topic?: string;
}

export interface PublishResponse {}

export interface SubscribeRequest {
  // Optional group for the subscription
  group?: string;
  // The topic to subscribe to
  topic?: string;
}

export interface SubscribeResponse {
  // The next json message on the topic
  message?: { [key: string]: any };
  // The topic subscribed to
  topic?: string;
}
