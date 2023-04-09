import Menu from "../components/Menu";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import cartIcon from "../images/cart-png.png";
import Button from "../components/Button";

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
            <div className="rounded shadow-md h-48 bg-[#fff] m-5 flex justify-center items-center w-[1000px]">
              <span className="font-innerbody space-y-3 text-bodyColor text-base font-semibold">
                <div className="flex justify-center">
                  <img src={cartIcon} alt="" />
                </div>
                <p className="text-center text-xl">Your Cart is empty</p>
                <div className="flex justify-center">
                  <button className="text-[#fff] font-innerbody bg-mainColor rounded-xl py-2 px-4">
                    Start Shopping
                  </button>
                </div>
              </span>
            </div>
          ) : null}

          {cart
            .slice(0)
            .reverse()
            .map((item, index) => (
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
