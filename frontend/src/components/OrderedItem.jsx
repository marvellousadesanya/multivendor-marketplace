import Laptop from "../images/laptop.png";

const OrderedItem = ({ title, productImg, price }) => {
  return (
    <div className="w-[821px] bg-[#fff] rounded-2xl flex h-[231px]  justify-between p-7 text-xs text-[#00304]">
      <div>
        <img src={productImg} alt="" className="rounded-xl w-32" />
      </div>
      <div className="space-y-5">
        <h3 className="font-innerbody font-semibold text-base">{title}</h3>
        <p>Seller | Marv</p>
        <div className="flex space-x-3 font-bold font-innerbody">
          <button className="py-2 px-4 bg-[#D4D4D4] rounded-xl">
            Processing
          </button>
          <button className="bg-[#F77F00] rounded-xl py-2 px-4 text-[#fff]">
            Confirm delivery
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-2xl">${price}</h3>
        <p>
          Qty <span className="text-2xl">1</span>
        </p>
      </div>
    </div>
  );
};

export default OrderedItem;
