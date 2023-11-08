// import data from "./data/products.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Hadphones from "./features/headphones/Hadphones";
import { useAppDispatch } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { getProductData } from "./dataUtils";
import { setProductData } from "./features/products/productsSlice";
function App() {
  const productData = getProductData();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProductData(productData));
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Hadphones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
