import { useState, useRef, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { addDoc, doc, updateDoc, collection, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage, auth } from "@/firebase";

import useGetProduct from "./useGetProduct";
import { ProductsUpload } from "@/interface/Products";
import { title } from "process";

const useFileUpload = () => {
  const [addCart, setAddCart] = useState<boolean>(false);

  const { products } = useGetProduct();

  const navigate = useNavigate();
  
  // 다시 짠 이미지 업로드 로직 스테이트
  const fileInput = useRef(null);
  const [imageUpload, setImageUpload] = useState<File>();

  const handleImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      setImageUpload(event.target?.files[0]);
    }
  };
  
  const cartProductHandle = () => {
    setAddCart(!addCart);
  };
  
  const addProduct = async ({title,price,content}: ProductsUpload) => {
    if(!imageUpload) return;
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${imageUpload?.name}`);
    await uploadBytes(imageRef, imageUpload);
    const downloadURL = await getDownloadURL(imageRef);

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

  const updateProduct = async (id: string, {title, price, content}: ProductsUpload) => {
    const productRef = doc(db, `Products/${id}`)
    const snapshot = await getDoc(productRef)
    const data = snapshot.data()
    if (!data) return
    if(!imageUpload) return;
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${imageUpload?.name}`);
    await uploadBytes(imageRef, imageUpload);
    const downloadURL = await getDownloadURL(imageRef);
    try {
      await updateDoc(productRef, {
        title: title,
        price: price,
        content: content,
        imgUrl: downloadURL,
      });
      navigate(`/productdetail/${id}`);
    }
    catch(error) {
      console.log(error);
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
  

  return {
    products, 
    fileInput, 
    imageUpload,
    addCart,
    cartUpdate,
    setAddCart,
    cartProductHandle, 
    addProduct,
    handleImageFile,
    updateProduct,
  }
};

export default useFileUpload;