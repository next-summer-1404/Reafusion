export interface IHouseCard {
  HomeName: string;
  HomeAddress: string;
  HomePrice: string;
  HomeOffer: string | null;
  HomeImage: string[];
  HomeBathroomCount: number;
  HomeParkingCount: number;
  HomeCapacityCount: number;
  HomeRoomCount: number;
  customClass?: string;
}
