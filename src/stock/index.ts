import * as m3o from '@m3o/m3o-node';

export class StockService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the historic open-close for a given day
  history(request: StockHistoryRequest): Promise<StockHistoryResponse> {
    return this.client.call(
      'stock',
      'History',
      request
    ) as Promise<StockHistoryResponse>;
  }
  // Get the historic order book and each trade by timestamp
  orderBook(request: StockOrderBookRequest): Promise<StockOrderBookResponse> {
    return this.client.call(
      'stock',
      'OrderBook',
      request
    ) as Promise<StockOrderBookResponse>;
  }
  // Get the last price for a given stock ticker
  price(request: StockPriceRequest): Promise<StockPriceResponse> {
    return this.client.call(
      'stock',
      'Price',
      request
    ) as Promise<StockPriceResponse>;
  }
  // Get the last quote for the stock
  quote(request: StockQuoteRequest): Promise<StockQuoteResponse> {
    return this.client.call(
      'stock',
      'Quote',
      request
    ) as Promise<StockQuoteResponse>;
  }
}

export interface StockHistoryRequest {
  // date to retrieve as YYYY-MM-DD
  date?: string;
  // the stock symbol e.g AAPL
  stock?: string;
}

export interface StockHistoryResponse {
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
  // the stock symbol
  symbol?: string;
  // the volume
  volume?: number;
}

export interface StockOrder {
  // the asking price
  askPrice?: number;
  // the ask size
  askSize?: number;
  // the bidding price
  bidPrice?: number;
  // the bid size
  bidSize?: number;
  // the UTC timestamp of the quote
  timestamp?: string;
}

export interface StockOrderBookRequest {
  // the date in format YYYY-MM-dd
  date?: string;
  // optional RFC3339Nano end time e.g 2006-01-02T15:04:05.999999999Z07:00
  end?: string;
  // limit number of prices
  limit?: number;
  // optional RFC3339Nano start time e.g 2006-01-02T15:04:05.999999999Z07:00
  start?: string;
  // stock to retrieve e.g AAPL
  stock?: string;
}

export interface StockOrderBookResponse {
  // date of the request
  date?: string;
  // list of orders
  orders?: StockOrder[];
  // the stock symbol
  symbol?: string;
}

export interface StockPriceRequest {
  // stock symbol e.g AAPL
  symbol?: string;
}

export interface StockPriceResponse {
  // the last price
  price?: number;
  // the stock symbol e.g AAPL
  symbol?: string;
}

export interface StockQuoteRequest {
  // the stock symbol e.g AAPL
  symbol?: string;
}

export interface StockQuoteResponse {
  // the asking price
  askPrice?: number;
  // the ask size
  askSize?: number;
  // the bidding price
  bidPrice?: number;
  // the bid size
  bidSize?: number;
  // the stock symbol
  symbol?: string;
  // the UTC timestamp of the quote
  timestamp?: string;
}
