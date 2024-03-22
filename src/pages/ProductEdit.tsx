import GlobalLayout from "@/layout/GlobalLayout"
import Header from "@/layout/Header"
import ProductEditCard from "@/components/products/ProductEditCard"
import ProductEditCardTwo from "@/components/products/ProductEditCardTwo"

const ProductEdit = () => {
  return (
    <>
      <GlobalLayout>
        <Header />
        <div className="m-auto max-w-[600px]">
          {/* <ProductEditCard /> */}
          <ProductEditCardTwo />
        </div>
      </GlobalLayout>
    </>
  )
}

export default ProductEdit;
