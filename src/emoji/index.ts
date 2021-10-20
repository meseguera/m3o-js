import * as m3o from '@m3o/m3o-node';

export class EmojiService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Find an emoji by its alias e.g :beer:
  find(request: EmojiFindRequest): Promise<EmojiFindResponse> {
    return this.client.call(
      'emoji',
      'Find',
      request
    ) as Promise<EmojiFindResponse>;
  }
  // Get the flag for a country. Requires country code e.g GB for great britain
  flag(request: EmojiFlagRequest): Promise<EmojiFlagResponse> {
    return this.client.call(
      'emoji',
      'Flag',
      request
    ) as Promise<EmojiFlagResponse>;
  }
  // Print text and renders the emojis with aliases e.g
  // let's grab a :beer: becomes let's grab a 🍺
  print(request: EmojiPrintRequest): Promise<EmojiPrintResponse> {
    return this.client.call(
      'emoji',
      'Print',
      request
    ) as Promise<EmojiPrintResponse>;
  }
  // Send an emoji to anyone via SMS. Messages are sent in the form '<message> Sent from <from>'
  send(request: EmojiSendRequest): Promise<EmojiSendResponse> {
    return this.client.call(
      'emoji',
      'Send',
      request
    ) as Promise<EmojiSendResponse>;
  }
}

export interface EmojiFindRequest {
  // the alias code e.g :beer:
  alias?: string;
}

export interface EmojiFindResponse {
  // the unicode emoji 🍺
  emoji?: string;
}

export interface EmojiFlagRequest {
  // country code e.g GB
  code?: string;
}

export interface EmojiFlagResponse {
  // the emoji flag
  flag?: string;
}

export interface EmojiPrintRequest {
  // text including any alias e.g let's grab a :beer:
  text?: string;
}

export interface EmojiPrintResponse {
  // text with rendered emojis
  text?: string;
}

export interface EmojiSendRequest {
  // the name of the sender from e.g Alice
  from?: string;
  // message to send including emoji aliases
  message?: string;
  // phone number to send to (including international dialing code)
  to?: string;
}

export interface EmojiSendResponse {
  // whether or not it succeeded
  success?: boolean;
}
