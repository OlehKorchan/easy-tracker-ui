import { IResponse } from '../../shared/response';

export interface ILoginResponse extends IResponse {
  username: string;
  token: string;
  expiresIn: number;
}
