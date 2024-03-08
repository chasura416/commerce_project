import { useState, useRef, ChangeEvent, FormEvent } from "react";

import { addDoc, doc, updateDoc, collection, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


import { db, storage, auth } from "@/firebase";

import { useNavigate } from "react-router-dom";

// import { Products } from "@/interface/Products";
import useGetProduct from "./useGetProduct";

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
    setImageUpload(event.target.files[0]);
  };

  const cartProductHandle = () => {
    setAddCart(!addCart);
  }




  // useEffect(()=>{
  //   const imageRef = ref(storage, `${auth.currentUser?.uid}/${imageUpload.name}`)
  //   if (!imageUpload) return;
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImage(url);
  //       console.log(url);
  //     })
  //   })
  // }, [imageUpload]);


  const addProduct = async (event: FormEvent) => {
    event.preventDefault();
    console.log("111111111")
    const imageRef = ref(
      storage,
      `${auth.currentUser?.uid}/${imageUpload?.name}`
      );
      if (imageUpload === undefined) return;
      console.log("222222222")
      await uploadBytes(imageRef, imageUpload);
    // const uploadTask = await uploadBytes(imageRef, imageUpload);
    
    // // uploadTask.then()
    // uploadTask.then( (snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImages((prev) => {
    //       [
    //         ...prev,
    //         { url: url, id: `${auth.currentUser?.uid}/${imageUpload.name}` }
    //       ];
    //     });
    //   })
    // })


    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
    setImage(()=>downloadURL);
    
    // 업로드 글 firebase database로 add. 이미지는 따로임.
    const collectionRef = collection(db, "Products");
    console.log(collectionRef)

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
    console.log(productRef)

    navigate("/");
  }


  const cartUpdate = async (id: string) => {
    const productRef = doc(db, `Products/${id}`)
    const snapshot = await getDoc(productRef)
    const data = snapshot.data()
    if(data.addCart === false) {
      try {
        await updateDoc(productRef, {addCart: !data.addCart});
        alert("장바구니로 이동시마스")
      }
      catch(error) {
        console.log(error);
      }
    }else {
      try {
        await updateDoc(productRef, {addCart: !data.addCart});
        location.reload()
      }
      catch(error) {
        console.log(error);
      }
    }
  }


  // 일단 여기는 이미지고 일단 제목 내용부터 위에서 다시 짠다.
  // const fetchImages = async () => {
  //   const photo = collection(db, `${auth.currentUser?.uid}`);
  //   const result  = await getDocs(query(photo, orderBy("timestamp", "desc")));
  //   const fetchData = result.docs.map((el) => el.data());
  //   setImages(fetchData);
  // }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const q = query(collection(db, "Products"));
  //     const querySnapshot = await getDocs(q);

  //     const initialProducts = [];

  //     querySnapshot.forEach((doc) => {
  //       initialProducts.push({ id: doc.id, ...doc.data() });
  //     });

  //     setProducts(initialProducts);
  //     console.log(initialProducts)
  //   };

  //   fetchData();
  // }, []);


  // useEffect(() => {
  //   fetchImages();
  // }, [])


  // const UploadImgUrl = async () => {
  //   await addDoc(collection(db, `${auth.currentUser?.uid}`), {
  //     imgUrl: image,
  //     timestamp: new Date(),
  //   });
  //   fetchImages();
  //   setImageUpload("");
  //   setImage("");
  //   setUploadStep(1);
  // }


  // const selectFile = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setImageUpload(file);
  //   setUploadStep(2);
  // }


  // useEffect(()=>{
  //   const imageRef = ref(storage, `${auth.currentUser?.uid}/${imageUpload.name}`)
  //   if (!imageUpload) return;
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImage(url);
  //       console.log(url);
  //     })
  //   })
  // }, [imageUpload]);




  // ⬆︎ 이 위부터 새로 만든 로직 


  // 필요없는 부분이니까 이미지까지 제대로 되면 지울 것.

  // const handleFileSelect = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = async (event) => {
  //   // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
  //   const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);
  //   await uploadBytes(imageRef, selectedFile);

  //   // 파일 URL 가져오기
  //   const downloadURL = await getDownloadURL(imageRef);
  //   console.log(downloadURL);

  //   //내용 업로드 되야함 
  //   event.preventDefault();
  //   const newProducts = { 
  //     title: String,
  //     createdAt: Timestamp,
  //     price: Number, 
  //   };

  //   const collectionRef = collection(db, "Products");
  //   console.log(collectionRef)
  //   const { id } = await addDoc(collectionRef, newProducts);

  //   setProducts((prev) => {
  //     return [...products, { ...newProducts, id }];
  //   });
  //   setTitle("");
  //   setPrice("");
  //   setContent("");
  // };

  // const deleteImage = async () => {
  //   const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);

  //   await deleteObject(imageRef)
  //     .then(() => {
  //       console.log("success");
  //     })
  //     .catch((error) => {
  //       console.log("failed");
  //     });
  // };
  
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