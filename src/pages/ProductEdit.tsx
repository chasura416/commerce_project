import GlobalLayout from "@/layout/GlobalLayout"
import Header from "@/layout/Header"
import ProductEditCard from "@/components/products/ProductEditCard"
import ProductEditCardTwo from "@/components/products/ProductEditCardTwo"
import useGetProduct from "@/hooks/upload/useGetProduct"
import { useParams } from "react-router-dom"

const ProductEdit = () => {
  const { products } = useGetProduct();
  const { id } = useParams();
  const [data] = products.filter((v) => v.id === id);
  if (!data) return null
  return (
    <>
      <GlobalLayout>
        <Header />
        <div className="m-auto max-w-[600px]">
          {/* <ProductEditCard /> */}
          <ProductEditCardTwo data={data}/>
        </div>
      </GlobalLayout>
    </>
  )
}

export default ProductEdit;
