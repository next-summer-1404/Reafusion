export interface IHouseDetailData {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  discounted_price: string;
  price: string;
  tags: string[];
  capacity: number;
  location: {
    lat: number;
    lng: number;
  }
  categories: {
    name: string;
  },
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  discount_id: string;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: string;
  bookings: number;
  favoriteId: string;
  isFavorite: boolean;
}