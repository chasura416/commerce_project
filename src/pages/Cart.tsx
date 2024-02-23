import Header from "@/layout/Header"
import CartCard from "@/components/cart/CartCard"
import GlobalLayout from "@/layout/GlobalLayout"

const Cart = () => {
  return (
    <>
      <Header />
      <GlobalLayout>
        <CartCard />
      </GlobalLayout>
    </>
  )
}

export default Cart