import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import ProductDetail from "./components/ProductDetail";
import Wallet from "./pages/Wallet";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPageSample from "./pages/TestPage";
import Verify from "./pages/Verification";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="/inventory/:slug" element={<ProductDetail />} /> */}
        <Route path="/inventory/:id" element={<ProductDetail />} />
        <Route path="/buyer-wallet" element={<Wallet />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/test" element={<ProductPageSample />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
