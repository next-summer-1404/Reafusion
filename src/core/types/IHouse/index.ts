export interface IHouse {
  address: string;
  bathrooms: number;
  bookings: number;
  capacity: number;
  caption: string;
  categories: {
    name: string;
  };
  discount_id: string | null;
  discounted_price: string | null;
  favoriteId: string | null;
  id: string;
  isFavorite: boolean;
  last_updated: string;
  location: {
    lat: number;
    lng: number;
  };
  num_comments: number;
  parking: number;
  photos: string[];
  price: string;
  rate: number | null;
  rooms: number;
  sellerId: string;
  sellerName: string;
  tags: string[];
  title: string;
  transaction_type: string;
  yard_type: string;
}