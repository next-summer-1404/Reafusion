import { IComment } from "../ICommentResponse";

export interface IProps {
  id: string,
  houseName: string;
  houseAddress: string;
  houseCaption: string;
  houseType: string;
  houseCapacity: number;
  BathroomsLength: number;
  parkingLength: number;
  roomLength: number;
  discounted_price: string;
  price: string;
  yardType: string;
  sellerName: string;
  CommnetList: IComment[];
  CommentCount: number;
  userId: string;
  userProfile: string;
  userName: string;
  lat?: number;
  lng?: number;
  isMortageDetail: boolean;
}