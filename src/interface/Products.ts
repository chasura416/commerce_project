export interface TimeStamp {
  seconds: number;
  nanoseconds: number;
}

export interface Products {
  uid: string;
  pid: string;
  like?: boolean;
  price: number;
  title: string;
  createdAt: TimeStamp;
  content: string;
  imgUrl: string[];
}