import { useState, useRef, ChangeEvent, FormEvent } from "react";

import { addDoc, doc, updateDoc, collection, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


import { db, storage, auth } from "@/firebase";

import { useNavigate } from "react-router-dom";

import useGetProduct from "./useGetProduct";
import { Products, ProductsUpload, ProductsUpload1 } from "@/interface/Products";

const useFileUpload = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(Number);
  const [addCart, setAddCart] = useState<boolean>(false);

  const { products } = useGetProduct();

  const navigate = useNavigate();
  
  // 다시 짠 이미지 업로드 로직 스테이트
  const fileInput = useRef(null);
  const [imageUpload, setImageUpload] = useState<File>();
  const [image, setImage] = useState("");
  // const [images, setImages] = useState([]);
  // const [uploadStep, setUploadStep] = useState(1);



  const handleImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files) return
    // const imagefile = event.target.files[0]
    // setImageUpload((prev)=>{
    //   console.log(prev)
    //   return imagefile
    // });
    setImageUpload(event.target?.files[0]);
    console.log(imageUpload)
  };
  
  
  const cartProductHandle = () => {
    setAddCart(!addCart);
  }
  
  
  const addProduct = async ({title, price, content}: ProductsUpload1) => {
    const imageRef = ref(
      storage,
      `${auth.currentUser?.uid}/${imageUpload?.name}`
      );
      console.log(imageUpload)
      if (imageUpload === undefined) return;
      await uploadBytes(imageRef, imageUpload);
    // const imageRef = ref(
    //   storage,
    //   `${auth.currentUser?.uid}/${image?.name}`
    //   );
    //   console.log(image)
    //   if (image === undefined) return;
    //   await uploadBytes(imageRef, image);


    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
    setImage(()=>downloadURL);
    
    // 업로드 글 firebase database로 add. 이미지는 따로임.
    const collectionRef = collection(db, "Products");
    const docRef = await addDoc(collectionRef, { 
      title: title,
      createdAt: new Date(),
      price: price,
      content: content, 
      imgUrl: downloadURL,
      uid: auth.currentUser?.uid,
      addCart: addCart,
    });
    
    const productRef = doc(db, `Products/${docRef.id}`)
    await updateDoc(productRef, {id: docRef.id});
    navigate("/");
  }


  const cartUpdate = async (id: string) => {
    const productRef = doc(db, `Products/${id}`)
    const snapshot = await getDoc(productRef)
    const data = snapshot.data()
    if (!data) return
    try {
      await updateDoc(productRef, {addCart: !data.addCart});
    }
    catch(error) {
      console.log(error);
    }
    if(data.addCart === false) {
      alert("상품을 장바구니로 이동시마스")
    }else {
      location.reload();
    }
  }


  // 필요없는 부분이니까 이미지까지 제대로 되면 지울 것.
  
  // const [attachment, setAttachment] = useState("");

  // const selectImg = (e) => {
  //   const reader = new FileReader();
  //   const theFile = fileInput.current.files[0];
  //   reader.readAsDataURL(theFile);
  //   reader.onload = (finishedEvent) => {
  //     const {
  //       currentTarget: { result },
  //     } = finishedEvent;
  //     setAttachment(result);
  //   }
  // }


  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "price") {
      setPrice(Number(value));
    }
    if (name === "content") {
      setContent(value);
    }
  };
  

  return {
    products, 
    title, 
    price, 
    image, 
    content, 
    fileInput, 
    imageUpload,
    addCart,
    cartUpdate,
    setAddCart,
    cartProductHandle, 
    onChange, 
    addProduct,
    handleImageFile,
  }
};

export default useFileUpload;