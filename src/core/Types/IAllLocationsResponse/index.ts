export interface ILocationsDatas {
  id: string;
  area_name: string;
  lat: string;
  lng: string;
}

export interface IAllLocationsResponse {
  data: ILocationsDatas[];
  totalCount: number;
}
