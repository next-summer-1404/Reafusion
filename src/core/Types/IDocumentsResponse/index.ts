export interface IDocumentsDatas {
  id: string;
  houseId: string;
  documentType: string;
  filePath:string;
  signed: boolean;
  signature: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDocumentResponse {
  documents: IDocumentsDatas[];
  totalCount: number;
}