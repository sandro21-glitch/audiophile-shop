// import data from "./data/products.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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

function App() {
  const productData = getProductData();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProductData(productData));
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <CartPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Hadphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:prodId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
