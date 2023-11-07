import data from "./data/products.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
function App() {
  console.log(data);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
