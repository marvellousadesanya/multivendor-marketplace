import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import ProductDetail from "./components/ProductDetail";
import Wallet from "./pages/Wallet";
import Cart from "./pages/Cart";

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
      </Routes>
    </div>
  );
}

export default App;
