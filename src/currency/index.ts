import * as m3o from '@m3o/m3o-node';

export class CurrencyService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Codes returns the supported currency codes for the API
  codes(request: CurrencyCodesRequest): Promise<CurrencyCodesResponse> {
    return this.client.call(
      'currency',
      'Codes',
      request
    ) as Promise<CurrencyCodesResponse>;
  }
  // Convert returns the currency conversion rate between two pairs e.g USD/GBP
  convert(request: CurrencyConvertRequest): Promise<ConvertResponse> {
    return this.client.call(
      'currency',
      'Convert',
      request
    ) as Promise<ConvertResponse>;
  }
  // Returns the historic rates for a currency on a given date
  history(request: CurrencyHistoryRequest): Promise<CurrencyHistoryResponse> {
    return this.client.call(
      'currency',
      'History',
      request
    ) as Promise<CurrencyHistoryResponse>;
  }
  // Rates returns the currency rates for a given code e.g USD
  rates(request: CurrencyRatesRequest): Promise<CurrencyRatesResponse> {
    return this.client.call(
      'currency',
      'Rates',
      request
    ) as Promise<CurrencyRatesResponse>;
  }
}

export interface CurrencyCode {
  // e.g United States Dollar
  currency?: string;
  // e.g USD
  name?: string;
}

export interface CurrencyCodesRequest {}

export interface CurrencyCodesResponse {
  codes?: CurrencyCode[];
}

export interface CurrencyConvertRequest {
  // optional amount to convert e.g 10.0
  amount?: number;
  // base code to convert from e.g USD
  from?: string;
  // target code to convert to e.g GBP
  to?: string;
}

export interface ConvertResponse {
  // converted amount e.g 7.10
  amount?: number;
  // the base code e.g USD
  from?: string;
  // conversion rate e.g 0.71
  rate?: number;
  // the target code e.g GBP
  to?: string;
}

export interface CurrencyHistoryRequest {
  // currency code e.g USD
  code?: string;
  // date formatted as YYYY-MM-DD
  date?: string;
}

export interface CurrencyHistoryResponse {
  // The code of the request
  code?: string;
  // The date requested
  date?: string;
  // The rate for the day as code:rate
  rates?: { [key: string]: number };
}

export interface CurrencyRatesRequest {
  // The currency code to get rates for e.g USD
  code?: string;
}

export interface CurrencyRatesResponse {
  // The code requested e.g USD
  code?: string;
  // The rates for the given code as key-value pairs code:rate
  rates?: { [key: string]: number };
}
