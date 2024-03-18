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
  image?: Blob | ArrayBuffer | Uint8Array;
}


export type ProductsUpload = Pick<Products, "title" | "price" | "content">