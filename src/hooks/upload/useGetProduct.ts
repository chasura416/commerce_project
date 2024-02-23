import { useState, useEffect } from "react";

import { addDoc, deleteDoc, doc, updateDoc, collection, getDocs, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";

import { db, storage, auth } from "@/firebase";

import { Products } from "@/interface/Products";

import { useNavigate } from "react-router-dom";

import { FirebaseError } from "firebase/app";

const useGetProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [products, setProducts] = useState([]);
  const [like, setLike] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLike = () => {
    setLike(!like);
  }


  // 이미지 업로드 어디로 뺄지 고민

  // const handleFileSelect = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = async () => {
  //   // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
  //   const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);
  //   await uploadBytes(imageRef, selectedFile);

  //   // 파일 URL 가져오기
  //   const downloadURL = await getDownloadURL(imageRef);
  //   console.log(downloadURL);
  // };


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

  console.log(auth)

  // data는 productDetail에서 drilling 해준 값
  const deleteProduct = async (data) => {
    const productRef = doc(db, `Products/${data[0].id}`);
    const ok = confirm("진짜로 삭제해요??");
    if (ok) {
      try {
        await deleteDoc(productRef);
        console.log("success");
        navigate("/");
      } 
      catch (error) {
        console.log(error);
      }
    }
  }


  return{products, like, handleLike, deleteProduct}
}

export default useGetProduct