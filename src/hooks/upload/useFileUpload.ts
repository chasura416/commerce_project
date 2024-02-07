import { useState, useEffect } from "react";

import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";

import { db, storage, auth } from "@/firebase";
// import { timeStamp } from "console";

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");

  const [products, setProducts] = useState([]);

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

  const deleteImage = async () => {
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);

    await deleteObject(imageRef)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("failed");
      });
  };
  
  const selectImg = (e) => {
    const reader = new FileReader();
    const theFile = e.current.files[0];
    reader.readAsDataURL(theFile);
    reader.onload = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setSelectedFile(result);
    }
  }
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "text") {
      setText(value);
    }
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
      console.log(initialProducts)
    };

    fetchData();
  }, []);


  const addProduct = async (event) => {
    event.preventDefault();
    const newProducts = { 
      title: text,
      // date: timeStamp,
      price: Number, 
      like: false 
    };

    const collectionRef = collection(db, "Products");
    console.log(collectionRef)
    const { id } = await addDoc(collectionRef, newProducts);

    setProducts((prev) => {
      return [...products, { ...newProducts, id }];
    });
    setText("");
  };

  return {selectedFile, text, handleFileSelect,handleUpload, deleteImage, selectImg, onChange, addProduct, products }

};

export default useFileUpload;