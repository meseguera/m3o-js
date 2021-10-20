import * as m3o from '@m3o/m3o-node';

export class PostcodeService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup a postcode to retrieve the related region, county, etc
  lookup(request: PostcodeLookupRequest): Promise<PostcodeLookupResponse> {
    return this.client.call(
      'postcode',
      'Lookup',
      request
    ) as Promise<PostcodeLookupResponse>;
  }
  // Return a random postcode and its related info
  random(request: PostcodeRandomRequest): Promise<PostcodeRandomResponse> {
    return this.client.call(
      'postcode',
      'Random',
      request
    ) as Promise<PostcodeRandomResponse>;
  }
  // Validate a postcode.
  validate(
    request: PostcodeValidateRequest
  ): Promise<PostcodeValidateResponse> {
    return this.client.call(
      'postcode',
      'Validate',
      request
    ) as Promise<PostcodeValidateResponse>;
  }
}

export interface PostcodeLookupRequest {
  // UK postcode e.g SW1A 2AA
  postcode?: string;
}

export interface PostcodeLookupResponse {
  // country e.g United Kingdom
  country?: string;
  // e.g Westminster
  district?: string;
  // e.g 51.50354
  latitude?: number;
  // e.g -0.127695
  longitude?: number;
  // UK postcode e.g SW1A 2AA
  postcode?: string;
  // related region e.g London
  region?: string;
  // e.g St James's
  ward?: string;
}

export interface PostcodeRandomRequest {}

export interface PostcodeRandomResponse {
  // country e.g United Kingdom
  country?: string;
  // e.g Westminster
  district?: string;
  // e.g 51.50354
  latitude?: number;
  // e.g -0.127695
  longitude?: number;
  // UK postcode e.g SW1A 2AA
  postcode?: string;
  // related region e.g London
  region?: string;
  // e.g St James's
  ward?: string;
}

export interface PostcodeValidateRequest {
  // UK postcode e.g SW1A 2AA
  postcode?: string;
}

export interface PostcodeValidateResponse {
  // Is the postcode valid (true) or not (false)
  valid?: boolean;
}
