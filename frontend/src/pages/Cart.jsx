import Menu from "../components/Menu";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";

const Cart = () => {
  return (
    <div className="bg-[#ECF0FF]">
      <NavBar />
      <div className="flex">
        <Menu />
        <div>
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default Cart;
