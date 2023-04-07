import Menu from "../components/Menu";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="bg-[#ECF0FF]">
      <NavBar />
      <div className="flex">
        <Menu />
        <div>
          {cart.length === 0 ? (
            <div>
              <span>Your Cart is empty</span>
            </div>
          ) : null}

          {cart.map((item, index) => (
            <CartItem
              key={index}
              title={item.title}
              price={item.price}
              productImg={item.images[0]}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
