export interface IFavoriteData {
  id: string;
  user_id: string;
  house_id: string;
  createdAt: string;
  updatedAt: string;
  house: {
    id: string;
    title: string;
    address: string;
    photos: string[];
    rate: string;
    price: string;
  };
}

export interface IFavoriteResponse {
  data: IFavoriteData[];
  totalCount: number;
}