import * as m3o from '@m3o/m3o-node';

export class OtpService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Generate an OTP (one time pass) code
  generate(request: OtpGenerateRequest): Promise<OtpGenerateResponse> {
    return this.client.call(
      'otp',
      'Generate',
      request
    ) as Promise<OtpGenerateResponse>;
  }
  // Validate the OTP code
  validate(request: OtpValidateRequest): Promise<OtpValidateResponse> {
    return this.client.call(
      'otp',
      'Validate',
      request
    ) as Promise<OtpValidateResponse>;
  }
}

export interface OtpGenerateRequest {
  // expiration in seconds (default: 60)
  expiry?: number;
  // unique id, email or user to generate an OTP for
  id?: string;
  // number of characters (default: 6)
  size?: number;
}

export interface OtpGenerateResponse {
  // one time pass code
  code?: string;
}

export interface OtpValidateRequest {
  // one time pass code to validate
  code?: string;
  // unique id, email or user for which the code was generated
  id?: string;
}

export interface OtpValidateResponse {
  // returns true if the code is valid for the ID
  success?: boolean;
}
