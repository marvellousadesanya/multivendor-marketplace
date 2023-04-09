import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { selectAllProducts } from "../features/products/productsSlice";
import { buyItem, walletBalance } from "../features/wallet/walletSlice";

const CartItem = ({ title, price, productImg, id }) => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const [buyBtnClicked, setBuyBtnClicked] = useState(false);

  const product = products.find((p) => p.id === +id);

  const purchaseDescription = product.title;

  const handleBuyItem = () => {
    dispatch(buyItem(parseInt(product.price), purchaseDescription));
    setBuyBtnClicked(true);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const walletBalanceTest = useSelector(walletBalance);
  console.log(walletBalanceTest);

  return (
    <div className="flex  items-center w-[700px] h-[250px] rounded-2xl bg-[#fff] px-5 m-5">
      <div className="flex justify-between w-[650px]">
        <div className="flex space-x-3">
          <div>
            <img className="w-32" src={productImg} alt="" />
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-base font-innerbody text-bodyColor font-semibold">
                {title}
              </h3>
              <p>Seller: me</p>
            </div>

            <div className="flex space-x-3">
              <button
                className="bg-mainColor text-[#fff] rounded-xl px-4 py-2"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
              <button
                className="bg-mainColor text-[#fff] rounded-xl px-4 py-2"
                onClick={handleBuyItem}
              >
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl text-bodyColor font-innerbody font-semibold">
            {price}
          </h3>
          <div className="flex justify-center">
            <div className="flex space-x-3">
              <button className="bg-mainColor text-[#fff] h-8 w-8 rounded-xl">
                -
              </button>
              <span className="text-2xl font-innerbody text-bodyColor font-semibold">
                1
              </span>
              <button className="bg-mainColor text-[#fff] h-8 w-8 rounded-xl">
                +
              </button>
            </div>
          </div>
        </div>

        {buyBtnClicked && walletBalanceTest.error === false ? (
          <div className="flex justify-center items-center shadow bg-[#fff] w-[500px] h-[200px] rounded top-0 bottom-0 left-0 right-0 m-auto absolute">
            <div className="w-[400px]">
              <p className="font-innerbody text-bodyColor">
                Thank you for ordering this product. ${product.price} has been
                deducted from your wallet! Please check your wallet balance.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-mainColor px-4 py-3 text-center text-[#fff] rounded-2xl"
                  onClick={() => setBuyBtnClicked(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {buyBtnClicked && walletBalanceTest.error === true ? (
          <span className="text-center bg-[#fff] w-[500px] h-[200px] rounded top-0 bottom-0 left-0 right-0 m-auto absolute">
            Insufficient funds! Kindly add more funds to your wallet.
            <div className="flex justify-center text-[#fff] font-innerbody space-x-3">
              <button className="py-2 px-4 bg-mainColor rounded-xl">
                Fund Wallet
              </button>
              <button
                className="py-2 px-4 bg-mainColor rounded-xl"
                onClick={() => setBuyBtnClicked(false)}
              >
                Close
              </button>
            </div>
          </span>
        ) : // console.log(walletBalance.error)
        null}
      </div>
    </div>
  );
};

export default CartItem;
