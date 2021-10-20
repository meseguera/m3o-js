import * as m3o from '@m3o/m3o-node';

export class ForexService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Returns the data for the previous close
  history(request: ForexHistoryRequest): Promise<ForexHistoryResponse> {
    return this.client.call(
      'forex',
      'History',
      request
    ) as Promise<ForexHistoryResponse>;
  }
  // Get the latest price for a given forex ticker
  price(request: ForexPriceRequest): Promise<ForexPriceResponse> {
    return this.client.call(
      'forex',
      'Price',
      request
    ) as Promise<ForexPriceResponse>;
  }
  // Get the latest quote for the forex
  quote(request: ForexQuoteRequest): Promise<ForexQuoteResponse> {
    return this.client.call(
      'forex',
      'Quote',
      request
    ) as Promise<ForexQuoteResponse>;
  }
}

export interface ForexHistoryRequest {
  // the forex symbol e.g GBPUSD
  symbol?: string;
}

export interface ForexHistoryResponse {
  // the close price
  close?: number;
  // the date
  date?: string;
  // the peak price
  high?: number;
  // the low price
  low?: number;
  // the open price
  open?: number;
  // the forex symbol
  symbol?: string;
  // the volume
  volume?: number;
}

export interface ForexPriceRequest {
  // forex symbol e.g GBPUSD
  symbol?: string;
}

export interface ForexPriceResponse {
  // the last price
  price?: number;
  // the forex symbol e.g GBPUSD
  symbol?: string;
}

export interface ForexQuoteRequest {
  // the forex symbol e.g GBPUSD
  symbol?: string;
}

export interface ForexQuoteResponse {
  // the asking price
  askPrice?: number;
  // the bidding price
  bidPrice?: number;
  // the forex symbol
  symbol?: string;
  // the UTC timestamp of the quote
  timestamp?: string;
}
