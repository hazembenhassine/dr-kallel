export interface Blog {
  _id: string;
  nbrVues: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  cover: string;
  isExpanded: boolean;
}
