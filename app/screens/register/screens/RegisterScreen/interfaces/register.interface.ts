export interface IRegisterReq {
  name: string;
  username: string;
  password: string;
  phone: string;
  dob: string;
}

export interface IRegisterRes {
  statusCode: number;
  message: string;
}
