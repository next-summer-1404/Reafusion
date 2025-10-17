export interface IFastReservePage {
  searchParams: {
    page?: string;
    search?: string;
    transactionType?: "rental" | "mortgage";
    minPrice?: number;
    maxPrice?: number;
  };
}