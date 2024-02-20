export interface TimeStamp {
  seconds: number;
  nanoseconds: number;
}

export interface Products {
  id: string;
  like?: boolean;
  price: number;
  title: string;
  createdAt: TimeStamp;
  content: string;
  imgUrl: string[];
}