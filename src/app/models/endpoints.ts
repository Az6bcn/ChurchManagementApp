import { environment } from './../../environments/environment';
export class Endpoints {
  static readonly getDashBoardDataUrl = `${environment.baseUrl}/dashboard`;
  static readonly addMember = `${environment.baseUrl}/members`;
  static readonly getMembers = `${environment.baseUrl}/members`;
  static readonly getWorkerMembers = `${environment.baseUrl}/members/workers`;
  static readonly deleteMember = `${environment.baseUrl}/members`;
}
