// import Header from "@/layout/Header"
// import { db,storage, auth } from "@/firebase"
import CartItem from "@/components/seller/CartItem"

// 상품은 프로덕트카드에 따로 빼서 컴포넌트화 할 것.
const SellerPage = () => {


  return (
    <>
    {/* <Header /> */}
    <nav className="m-5 mt-8">
      <ul className="flex space-x-3">
        <li>임시 카테고리</li>
        <li>상품 등록</li>
        <li>상품 목록</li>
      </ul>
    </nav>
    <CartItem />
    <CartItem />
    <CartItem />
    <CartItem />
    </>
  )
}

export default SellerPage


// import React, { useState, useContext } from 'react';
// // import { useInfiniteQuery } from 'react-query';
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
// import { useInView } from 'react-intersection-observer';
// import { db, storage, auth } from '@/firebase';
// import { AuthContext } from "@/apis/AuthContext";


// const SellerPage: React.FC = () => {
//   // const { user } = useAuth();
//   const [productName, setProductName] = useState('');
//   const [productImage, setProductImage] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { user } = useContext(AuthContext);

//   // const {
//   //   data,
//   //   fetchNextPage,
//   //   hasNextPage,
//   //   isFetchingNextPage,
//   // } = useInfiniteQuery(
//   //   'products',
//   //   async ({ pageParam }) => {
//   //     const productsRef = collection(db, 'products');
//   //     const querySnapshot = await getDocs(productsRef);
//   //     const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   //     return products;
//   //   },
//   //   {
//   //     getNextPageParam: (lastPage) => lastPage.length > 0,
//   //   }
//   // );

//   const { ref, inView } = useInView({
//     triggerOnce: false,
//   });

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setProductImage(e.target.files[0]);
//     }
//   };

//   const handleAddProduct = async () => {
//     if (!user) return;

//     if (!productName || !productImage) {
//       alert('상품명과 이미지를 입력하세요.');
//       return;
//     }

//     setLoading(true);

//     try {
//       // 이미지 업로드
//       const storageRef = ref(storage, `${auth.currentUser?.uid}/${productImage.name}`);
//       await uploadBytes(storageRef, productImage);

//       // 이미지 다운로드 URL 가져오기
//       const imageUrl = await getDownloadURL(storageRef);

//       // 상품 등록
//       const productsRef = collection(db, 'products');
//       await addDoc(productsRef, { name: productName, imageUrl, sellerId: user.uid });

//       // 초기화
//       setProductName('');
//       setProductImage(null);
//     } catch (error) {
//       console.error('Error adding product:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteProduct = async (productId: string) => {
//     try {
//       // 상품 이미지 삭제
//       const storageRef = ref(storage, `product-images/${productId}`);
//       await deleteObject(storageRef);

//       // 상품 삭제
//       const productRef = doc(db, 'products', productId);
//       await deleteDoc(productRef);
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleUpdateProduct = async (productId: string) => {
//     try {
//       // TODO: 상품 수정 기능 추가
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Seller Page</h2>
//       {user && (
//         <div>
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <input type="file" onChange={handleImageChange} />
//           <button onClick={handleAddProduct} disabled={loading}>
//             Add Product
//           </button>
//         </div>
//       )}

//       {data?.pages.map((page, index) => (
//         <React.Fragment key={index}>
//           {page.map((product: any) => (
//             <div key={product.id}>
//               <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
//               <p>{product.name}</p>
//               {user && user.uid === product.sellerId && (
//                 <>
//                   <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
//                   <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                 </>
//               )}
//             </div>
//           ))}
//         </React.Fragment>
//       ))}

//       <div ref={inView ? ref : undefined}>
//         {hasNextPage && (
//           <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
//             Load More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SellerPage;
