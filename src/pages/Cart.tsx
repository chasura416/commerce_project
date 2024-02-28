import Header from "@/layout/Header";
import CartCard from "@/components/cart/CartCard";
import GlobalLayout from "@/layout/GlobalLayout";
import Footer from "@/layout/Footer";

const Cart = () => {
  return (
    <>
      <GlobalLayout>
        <Header />
        <CartCard />
        <Footer />
      </GlobalLayout>
    </>
  );
};

export default Cart;
