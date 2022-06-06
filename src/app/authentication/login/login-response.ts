import { IResponse } from '../../models/response';

export interface ILoginResponse extends IResponse {
  username: string;
  token: string;
  expiresIn: number;
}
