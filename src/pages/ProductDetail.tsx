import Header from "@/layout/Header"
import HomeCategory from "@/components/home/HomeCategory"
import ProductDetailCard from "@/components/products/ProductDetailCard"
import GlobalLayout from "@/layout/GlobalLayout"

const ProductDetail = () => {
  return (
    <>
      <GlobalLayout>
        <Header />
        <div className="flex m-10 mr-2">
          <div className="w-1/6 mr-20">
            <HomeCategory />
          </div>
          <ProductDetailCard />
        </div>
      </GlobalLayout>
    </>
  )
}

export default ProductDetail
