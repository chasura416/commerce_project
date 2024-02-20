import Header from "@/layout/Header"
import HomeCategory from "@/components/home/HomeCategory"
import ProductDetailCard from "@/components/products/ProductDetailCard"

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="flex m-10">
        <div className="w-1/6">
          <div className="border-b">사이드 카테고리</div>
          <HomeCategory />
        </div>
        <ProductDetailCard />
      </div>
    </>
  )
}

export default ProductDetail
