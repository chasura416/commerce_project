import { useState, useEffect, useRef } from "react";

import { addDoc, collection, getDocs, getFirestore, orderBy, query, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";

import { db, storage, auth } from "@/firebase";

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  
  const [products, setProducts] = useState([]);
  
  const fileInput = useRef(null);
  const [imageUpload, setImageUpload] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [uploadStep, setUploadStep] = useState(1);


  const fetchImages = async () => {
    const photo = collection(getFirestore(firebaseApp), "photo");
    const result  = await getDocs(query(photo, orderBy("timestamp", desc)));
    const fetchData = result.docs.map((el) => el.data());
    setImages(fetchData);
  }

  useEffect(() => {
    fetchImages();
  }, [])


  const UploadImgUrl = async () => {
    await addDoc(collection(db, `${auth.currentUser?.uid}`), {
      imgUrl: image,
      timestamp: new Date(),
    });
    fetchImages();
    setImageUpload("");
    setImage("");
    setUploadStep(1);
  }


  const selectFile = (file) => {
    console.log(file);
    setImageUpload(file);
    setUploadStep(2);
  }


  useEffect(()=>{
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${imageUpload.name}`)
    if (!imageUpload) return;
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
        console.log(url);
      })
    })
  }, [imageUpload]);



  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile);

    // 파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);

    //내용 업로드 되야함 
    event.preventDefault();
    const newProducts = { 
      title: String,
      createdAt: Timestamp,
      price: Number, 
    };

    const collectionRef = collection(db, "Products");
    console.log(collectionRef)
    const { id } = await addDoc(collectionRef, newProducts);

    setProducts((prev) => {
      return [...products, { ...newProducts, id }];
    });
    setTitle("");
    setPrice("");
    setContent("");
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
    if (name === "title") {
      setTitle(value);
    }
    if (name === "price") {
      setPrice(value);
    }
    if (name === "content") {
      setContent(value);
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
      title: String,
      createdAt: Timestamp,
      price: Number, 
    };

    const collectionRef = collection(db, "Products");
    console.log(collectionRef)
    const { id } = await addDoc(collectionRef, newProducts);

    setProducts((prev) => {
      return [...products, { ...newProducts, id }];
    });
    setText("");
  };

  return {selectedFile, products, title, price, image, content, fileInput, imageUpload ,images, uploadStep, handleFileSelect, handleUpload, deleteImage, selectImg, onChange, addProduct }

};

export default useFileUpload;