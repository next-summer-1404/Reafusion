export interface IHouseCard {
  id: string;
  HomeName: string;
  HomeAddress: string;
  HomePrice: string;
  HomeOffer: string | null;
  HomeImage: string[];
  HomeBathroomCount: number;
  HomeParkingCount: number;
  HomeCapacityCount: number;
  HomeRoomCount: number;
  isQuickReservation?: boolean;
  DetailAdress?: string;
  onReserveClick?: () => void;
}
