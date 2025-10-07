export interface IRegisterStep1 {
  email: string;
}

export interface IRegisterStep1Response {
  message: string;
  tempUserId: string;
}

export interface IRegisterStep2 {
  tempUserId: string;
  verificationCode: string;
}
