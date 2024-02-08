import { useState, useEffect } from "react";

import { addDoc, collection, getDocs, query, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";

import { db, storage, auth } from "@/firebase";

interface products {
  id: string;
  like: boolean;
  price: number;
  title: string;
  date: Timestamp;
}


const useGetProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const [products, setProducts] = useState<products>([]);
  const [like, setLike] = useState<boolean>(false);


  const handleLike = () => {
    setLike(!like);
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile);

    // 파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
  };


  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Products"));
      const querySnapshot = await getDocs(q);

      const initialProducts = [];

      querySnapshot.forEach((doc) => {
        initialProducts.push({ id: doc.id, ...doc.data() });
      });

      setProducts(initialProducts);
    };

    
    fetchData();
  }, []);
  console.log(products)
  
  const addProduct = async (event) => {
    event.preventDefault();
    const newProducts = { 
      title: text,
      date: Timestamp,
      price: Number, 
      like: false 
    };

    const collectionRef = collection(db, "Products");
    const { id } = await addDoc(collectionRef, newProducts);

    setProducts((prev) => {
      return [...products, { ...newProducts, id }];
    });
    setText("");
  };

  return{addProduct, products, like, handleLike}
}

export default useGetProduct