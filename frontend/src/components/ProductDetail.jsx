import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { buyItem } from "../features/wallet/walletSlice";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { selectAllProducts } from "../features/products/productsSlice";
import Menu from "./Menu";
import { moveToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  // const { slug } = useParams();
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector(selectAllProducts);
  const [moveBtnClicked, setMoveBtnClicked] = useState(false);

  const product = products.find((p) => p.id === +id);

  const purchaseDescription = product.title;

  const handleMoveToCart = () => {
    dispatch(moveToCart(product));
    setMoveBtnClicked(true);
  };

  return (
    <div className="bg-[#E5E5E5] h-screen">
      <NavBar />
      <div className="flex">
        <Menu />
        <div className="flex justify-center m-5">
          <div className="w-[1000px] bg-[#fff] rounded px-12">
            <div className="  flex space-x-12 m-8">
              <div>
                <img src={product.images[0]} alt="" className="w-[360px]" />
              </div>
              <div className="space-y-5">
                <h1 className="font-innerbody text-[40px] text-bodyColor">
                  {product.title}
                </h1>
                <p>{product.description}</p>
                <p className="font-innerbody text-[40px] text-bodyColor">
                  ${product.price}
                </p>

                <div className="flex space-x-5">
                  <button
                    onClick={handleMoveToCart}
                    className="bg-mainColor text-[#fff] px-12 py-3 rounded-xl"
                  >
                    Move to Cart
                  </button>

                  <Link to="/buyer-wallet">
                    <button className="bg-[#fff] text-[#000] px-12 py-3 rounded-xl">
                      Check Balance
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <h3 className="font-innerbody text-[40px] text-bodyColor">
              Product details
            </h3>
            <p>Lorem Ipsum</p>

            {moveBtnClicked ? (
              <div className="flex justify-center items-center shadow bg-[#fff] w-[500px] h-[200px] rounded top-0 bottom-0 left-0 right-0 m-auto absolute">
                <div className="w-[400px]">
                  <p className="font-innerbody text-bodyColor">
                    Product moved to Cart Page.
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="bg-mainColor px-4 py-3 text-center text-[#fff] rounded-2xl"
                      onClick={() => setMoveBtnClicked(false)}
                    >
                      Close
                    </button>
                    <Link to="/cart">
                      <button className="bg-mainColor px-4 py-3 text-center text-[#fff] rounded-2xl">
                        Visit Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
