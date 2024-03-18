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
  addCart: boolean;
}

export interface ProductsUpload {
  price: number;
  title: string;
  content: string;
  image?: File;
}


export type ProductsUpload1 = Pick<Products, "title" | "price" | "content">