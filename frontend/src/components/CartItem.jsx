import Laptop from "../images/laptop.png";

const CartItem = () => {
  return (
    <div className="flex  items-center w-[700px] h-[250px] rounded-2xl bg-[#fff] px-5 m-5">
      <div className="flex justify-between w-[650px]">
        <div className="flex space-x-3">
          <div>
            <img src={Laptop} alt="" />
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-base font-innerbody text-bodyColor font-semibold">
                Apple MacBook 2018
              </h3>
              <p>Seller: me</p>
            </div>

            <div>
              <button className="bg-mainColor text-[#fff] rounded-xl px-4 py-2">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl text-bodyColor font-innerbody font-semibold">
            N1,800,400.00
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
      </div>
    </div>
  );
};

export default CartItem;
