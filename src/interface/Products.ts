export interface TimeStamp {
  seconds: number;
  nanoseconds: number;
}

export interface Products {
  uid: string;
  pid: string;
  id: string;
  like?: string[];
  price: number;
  title: string;
  createdAt: TimeStamp;
  content: string;
  imgUrl: string[] | string;
}