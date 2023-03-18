const Product = () => {
  return (
    <div className="h-[308px] w-[187px] flex justify-center rounded-lg bg-[#fff]">
      <div>
        <div className="bg-product-bg mt-5 w-[152px] rounded-lg">
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
