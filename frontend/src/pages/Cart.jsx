import { useState } from "react";
import Menu from "../components/Menu";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import cartIcon from "../images/cart-png.png";
import { Link } from "react-router-dom";
import { getTotal, removeAllItems } from "../features/cart/cartSlice";
import { buyItem } from "../features/wallet/walletSlice";
import { walletBalance } from "../features/wallet/walletSlice";
import { orderedProduct } from "../features/orders/ordersSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const cartTotal = useSelector(getTotal);

  const currentWalletBalance = useSelector(walletBalance);

  const [buyBtnClicked, setBuyBtnClicked] = useState(false);

  const handleBuyAllItems = () => {
    dispatch(buyItem(cartTotal));
    setBuyBtnClicked(true);
    dispatch(orderedProduct());

    // if (currentWalletBalance.error === false) dispatch(removeAllItems());
  };

  console.log(currentWalletBalance.error);

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
                  <Link to="/inventory">
                    <button className="text-[#fff] font-innerbody bg-mainColor rounded-xl py-2 px-4">
                      Start Shopping
                    </button>
                  </Link>
                </div>
              </span>
            </div>
          ) : null}

          {/* Shows the cart items from latest to first. The Slice method creates a new array, the reverse renders the last first */}
          <div className="flex">
            <section>
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
            </section>
            <section className="rounded-2xl bg-[#fff] h-32 mt-5 w-64 p-3">
              <h3 className="font-innerbody font-semibold text-bodyColor">
                Summary
              </h3>
              <p className="font-innerbody text-[#6c6c6c] text-3xl">
                ${cartTotal}
              </p>
              <button
                className="bg-mainColor py-2 w-full font-innerbody font-semibold text-[#fff] rounded-xl"
                onClick={handleBuyAllItems}
              >
                Proceed to Checkout
              </button>
            </section>

            {buyBtnClicked && currentWalletBalance.error === false ? (
              <div className="flex justify-center items-center shadow bg-[#fff] w-[500px] h-[200px] rounded top-0 bottom-0 left-0 right-0 m-auto absolute">
                <div className="w-[400px]">
                  <p className="font-innerbody text-bodyColor">
                    Thank you for your purchase! {cartTotal} has been debited
                    from your wallet. Please check your wallet balance.
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="bg-mainColor px-4 py-3 text-center text-[#fff] rounded-2xl"
                      onClick={() => {
                        setBuyBtnClicked(false);
                        dispatch(removeAllItems());
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {buyBtnClicked && currentWalletBalance.error ? (
              <span className="text-center bg-[#fff] w-[500px] h-[200px] rounded top-0 bottom-0 left-0 right-0 m-auto absolute">
                Insufficient funds! Kindly add more funds to your wallet.
                <div className="flex justify-center text-[#fff] font-innerbody space-x-3">
                  <Link to="/buyer-wallet">
                    <button className="py-2 px-4 bg-mainColor rounded-xl">
                      Fund Wallet
                    </button>
                  </Link>
                  <button
                    className="py-2 px-4 bg-mainColor rounded-xl"
                    onClick={() => {
                      setBuyBtnClicked(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
