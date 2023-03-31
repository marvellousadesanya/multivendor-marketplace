import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { buyItem } from "../features/wallet/walletSlice";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { selectAllProducts } from "../features/products/productsSlice";

const ProductDetail = () => {
  // const { slug } = useParams();
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector(selectAllProducts);
  console.log(products);

  const product = products.find((p) => p.id === +id);

  const purchaseDescription = product.title;

  return (
    <div className="bg-[#E5E5E5] h-screen">
      <NavBar />
      <div className="flex justify-center my-5">
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
                  className="bg-mainColor text-[#fff] px-12 py-3 rounded-xl"
                  onClick={() =>
                    dispatch(
                      buyItem(parseInt(product.price), purchaseDescription)
                    )
                  }
                >
                  Buy
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

          <button
            onClick={() =>
              dispatch(buyItem(parseInt(product.price), purchaseDescription))
            }
          >
            Buy
          </button>

          <Link to="/buyer-wallet">
            <button>Check Balance</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
