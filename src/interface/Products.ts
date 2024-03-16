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

export interface ProductsUpload1 {
  price: number;
  title: string;
  content: string;
  image: File[] | File;
}


export type ProductsUpload = Pick<Products, "title" | "price" | "content">