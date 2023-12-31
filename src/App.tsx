// import data from "./data/products.json";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Hadphones from "./features/headphones/Headphones";
import { useAppDispatch } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { getProductData } from "./dataUtils";
import { setProductData } from "./features/products/productsSlice";
import Speakers from "./features/speakers/Speakers";
import Earphones from "./features/earphones/Earphones";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./utils/ScrollToTop";
import CartPopup from "./features/cart/CartPopup";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./features/orderConfirmation/OrderConfirmation";

function App() {
  const productData = getProductData();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProductData(productData));
  }, []);
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <CartPopup /> 
      <OrderConfirmation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Hadphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:prodId" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <Toaster
        position="top-left"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </HashRouter>
  );
}

export default App;
