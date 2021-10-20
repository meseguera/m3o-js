import * as m3o from '@m3o/m3o-node';

export class UserService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Create a new user account. The email address and username for the account must be unique.
  create(request: UserCreateRequest): Promise<UserCreateResponse> {
    return this.client.call(
      'user',
      'Create',
      request
    ) as Promise<UserCreateResponse>;
  }
  // Delete an account by id
  delete(request: UserDeleteRequest): Promise<UserDeleteResponse> {
    return this.client.call(
      'user',
      'Delete',
      request
    ) as Promise<UserDeleteResponse>;
  }
  // Login using username or email. The response will return a new session for successful login,
  // 401 in the case of login failure and 500 for any other error
  login(request: UserLoginRequest): Promise<UserLoginResponse> {
    return this.client.call(
      'user',
      'Login',
      request
    ) as Promise<UserLoginResponse>;
  }
  // Logout a user account
  logout(request: UserLogoutRequest): Promise<UserLogoutResponse> {
    return this.client.call(
      'user',
      'Logout',
      request
    ) as Promise<UserLogoutResponse>;
  }
  // Read an account by id, username or email. Only one need to be specified.
  read(request: UserReadRequest): Promise<UserReadResponse> {
    return this.client.call(
      'user',
      'Read',
      request
    ) as Promise<UserReadResponse>;
  }
  // Read a session by the session id. In the event it has expired or is not found and error is returned.
  readSession(
    request: UserReadSessionRequest
  ): Promise<UserReadSessionResponse> {
    return this.client.call(
      'user',
      'ReadSession',
      request
    ) as Promise<UserReadSessionResponse>;
  }
  // Send a verification email
  // to the user being signed up. Email from will be from 'support@m3o.com',
  // but you can provide the title and contents.
  // The verification link will be injected in to the email as a template variable, $micro_verification_link.
  // Example: 'Hi there, welcome onboard! Use the link below to verify your email: $micro_verification_link'
  // The variable will be replaced with an actual url that will look similar to this:
  // 'https://user.m3o.com/user/verify?token=a-verification-token&rediretUrl=your-redir-url'
  sendVerificationEmail(
    request: UserSendVerificationEmailRequest
  ): Promise<UserSendVerificationEmailResponse> {
    return this.client.call(
      'user',
      'SendVerificationEmail',
      request
    ) as Promise<UserSendVerificationEmailResponse>;
  }
  // Update the account password
  updatePassword(
    request: UserUpdatePasswordRequest
  ): Promise<UserUpdatePasswordResponse> {
    return this.client.call(
      'user',
      'UpdatePassword',
      request
    ) as Promise<UserUpdatePasswordResponse>;
  }
  // Update the account username or email
  update(request: UserUpdateRequest): Promise<UserUpdateResponse> {
    return this.client.call(
      'user',
      'Update',
      request
    ) as Promise<UserUpdateResponse>;
  }
  // Verify the email address of an account from a token sent in an email to the user.
  verifyEmail(
    request: UserVerifyEmailRequest
  ): Promise<UserVerifyEmailResponse> {
    return this.client.call(
      'user',
      'VerifyEmail',
      request
    ) as Promise<UserVerifyEmailResponse>;
  }
}

export interface UserAccount {
  // unix timestamp
  created?: number;
  // an email address
  email?: string;
  // unique account id
  id?: string;
  // Store any custom data you want about your users in this fields.
  profile?: { [key: string]: string };
  // unix timestamp
  updated?: number;
  // alphanumeric username
  username?: string;
  verificationDate?: number;
  verified?: boolean;
}

export interface UserCreateRequest {
  // the email address
  email?: string;
  // optional account id
  id?: string;
  // the user password
  password?: string;
  // optional user profile as map<string,string>
  profile?: { [key: string]: string };
  // the username
  username?: string;
}

export interface UserCreateResponse {
  account?: { [key: string]: any };
}

export interface UserDeleteRequest {
  // the account id
  id?: string;
}

export interface UserDeleteResponse {}

export interface UserLoginRequest {
  // The email address of the user
  email?: string;
  // The password of the user
  password?: string;
  // The username of the user
  username?: string;
}

export interface UserLoginResponse {
  // The session of the logged in  user
  session?: { [key: string]: any };
}

export interface UserLogoutRequest {
  sessionId?: string;
}

export interface UserLogoutResponse {}

export interface UserReadRequest {
  // the account email
  email?: string;
  // the account id
  id?: string;
  // the account username
  username?: string;
}

export interface UserReadResponse {
  account?: { [key: string]: any };
}

export interface UserReadSessionRequest {
  // The unique session id
  sessionId?: string;
}

export interface UserReadSessionResponse {
  session?: { [key: string]: any };
}

export interface UserSendVerificationEmailRequest {
  email?: string;
  failureRedirectUrl?: string;
  // Display name of the sender for the email. Note: the email address will still be 'support@m3o.com'
  fromName?: string;
  redirectUrl?: string;
  subject?: string;
  // Text content of the email. Don't forget to include the string '$micro_verification_link' which will be replaced by the real verification link
  // HTML emails are not available currently.
  textContent?: string;
}

export interface UserSendVerificationEmailResponse {}

export interface UserSession {
  // unix timestamp
  created?: number;
  // unix timestamp
  expires?: number;
  // the session id
  id?: string;
  // the associated user id
  userId?: string;
}

export interface UserUpdatePasswordRequest {
  // confirm new password
  confirmPassword?: string;
  // the new password
  newPassword?: string;
  // the old password
  oldPassword?: string;
  // the account id
  userId?: string;
}

export interface UserUpdatePasswordResponse {}

export interface UserUpdateRequest {
  // the new email address
  email?: string;
  // the account id
  id?: string;
  // the user profile as map<string,string>
  profile?: { [key: string]: string };
  // the new username
  username?: string;
}

export interface UserUpdateResponse {}

export interface UserVerifyEmailRequest {
  // The token from the verification email
  token?: string;
}

export interface UserVerifyEmailResponse {}
