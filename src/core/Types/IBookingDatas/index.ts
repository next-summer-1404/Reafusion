// core/types/IBookingDatas.ts

// یک رزرو
export interface IBookingData {
  id: number;
  user_id: number;
  houseId: number;
  reservedDates: [
    { 
      value: string; 
      inclusive: boolean 
    },
    { 
      value: string; 
      inclusive: boolean 
    }
  ];
  traveler_details: [
    {
      gender: string;
      lastName: string;
      birthDate: string;
      firstName: string;
      nationalId: string;
    },
    {
      gender: string;
      lastName: string;
      birthDate: string;
      firstName: string;
      nationalId: string;
    }
  ];
  status: string;
  sharedEmail: string;
  sharedMobile: string;
  createdAt: string;
  updatedAt: string;
  house: {
    title: string;
    price: string;
  };
}

export interface IBookingResponse {
  data: IBookingData[];  
  totalCount: number;
}
