import * as m3o from '@m3o/m3o-node';

export class UrlService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // List information on all the shortened URLs that you have created
  list(request: UrlListRequest): Promise<UrlListResponse> {
    return this.client.call('url', 'List', request) as Promise<UrlListResponse>;
  }
  // Proxy returns the destination URL of a short URL.
  proxy(request: UrlProxyRequest): Promise<UrlProxyResponse> {
    return this.client.call(
      'url',
      'Proxy',
      request
    ) as Promise<UrlProxyResponse>;
  }
  // Shortens a destination URL and returns a full short URL.
  shorten(request: UrlShortenRequest): Promise<UrlShortenResponse> {
    return this.client.call(
      'url',
      'Shorten',
      request
    ) as Promise<UrlShortenResponse>;
  }
}

export interface UrlListRequest {
  // filter by short URL, optional
  shortURL?: string;
}

export interface UrlListResponse {
  urlPairs?: UrlURLPair;
}

export interface UrlProxyRequest {
  // short url ID, without the domain, eg. if your short URL is
  // `m3o.one/u/someshorturlid` then pass in `someshorturlid`
  shortURL?: string;
}

export interface UrlProxyResponse {
  destinationURL?: string;
}

export interface UrlShortenRequest {
  destinationURL?: string;
}

export interface UrlShortenResponse {
  shortURL?: string;
}

export interface UrlURLPair {
  created?: number;
  destinationURL?: string;
  // HitCount keeps track many times the short URL has been resolved.
  // Hitcount only gets saved to disk (database) after every 10th hit, so
  // its not intended to be 100% accurate, more like an almost correct estimate.
  hitCount?: number;
  owner?: string;
  shortURL?: string;
}
