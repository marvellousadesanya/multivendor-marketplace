import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
