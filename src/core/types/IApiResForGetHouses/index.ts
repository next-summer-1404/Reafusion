import { IHouse } from "../IHouse";

export interface IApiResponse {
  houses: IHouse[];
  totalCount?: number;
}