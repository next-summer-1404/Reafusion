export interface IMortageAndRent {
  searchParams: {
    page?: string;
    search?: string;
    transactionType?: "rental" | "mortgage";
    minPrice?: number;
    maxPrice?: number;
    minMortgage?: number;
    maxMortgage?: number;
    minRent?: number;
    maxRent?: number;
    minArea?: number;
    maxArea?: number;
    location?: string;
    sort?: "price";
  };
}
