export interface ICategoryDatas {
  id: string;
  name: string;
}

export interface ICategoryResponse {
  data: ICategoryDatas[];
  totalCount: number;
}