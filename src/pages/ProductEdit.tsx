import Header from "@/layout/Header"
import ProductEditCard from "@/components/products/ProductEditCard"
import GlobalLayout from "@/layout/GlobalLayout"

const ProductEdit = () => {
  return (
    <>
      <GlobalLayout>
        <Header />
        <div className="flex m-10 mr-2">
          <ProductEditCard />
        </div>
      </GlobalLayout>
    </>
  )
}

export default ProductEdit;
