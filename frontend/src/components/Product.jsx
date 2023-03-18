const Product = () => {
  return (
    <div className="h-[308px] 2xl:w-[184px] w-[140px] flex justify-center rounded-lg bg-[#fff]">
      <div className="">
        <div className="bg-product-bg 2xl:mt-5 mt-2 2xl:w-[144px] w-[130px] rounded-lg">
          <img
            alt=""
            src={require("../images/laptop.png")}
            className="w-[144px] h-[173px] rounded-lg"
          />
        </div>

        <p className="font-innerbody">The product</p>
        <p className="font-semibold font-innerbody">N3,000,000</p>
      </div>
    </div>
  );
};

export default Product;
