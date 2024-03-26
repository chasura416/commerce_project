import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "@/firebase";
import { deleteDoc, doc, collection, getDocs, getDoc, query } from "firebase/firestore";

import { Products } from "@/interface/Products";

// import { FirebaseError } from "firebase/app";

const useGetProduct = () => {
  const [products, setProducts] = useState<Products[] | undefined>([]);
  // const [product, setProduct] = useState<Products[] | undefined>([]);
  const [like, setLike] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLike = () => {
    setLike(!like);
  };


  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Products"));
      const querySnapshot = await getDocs(q);

      const product = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Products;
        return { ...data, id: doc.id };
      });

      setProducts(product);
    };

    fetchData();
  }, []);

  const getData = async (id: string) => {
    const ProductDoc = await getDoc(doc(db, `Products/${id}`));
    const ProductData = ProductDoc.data();

    console.log(ProductData)
    // setProduct(ProductData)
  };


  // data는 productDetail에서 drilling 해준 값
  const deleteProduct = async (id: string) => {
    const productRef = doc(db, `Products/${id}`);
    const ok = confirm("진짜로 삭제해요??");
    if (ok) {
      try {
        await deleteDoc(productRef);
        console.log("success");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { products, like, handleLike, deleteProduct, navigate, getData };
};

export default useGetProduct;
