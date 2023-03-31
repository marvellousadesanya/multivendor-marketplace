import { Link } from "react-router-dom";

const Product = ({ id, productName, productImage, productPrice }) => {
  // const slug = `${productName.toLowerCase().replace(/\s+/g, "-")}-${id}`;

  return (
    <div className="h-[308px] 2xl:w-[184px] w-[140px] flex justify-center rounded-lg bg-[#fff]">
      <div className="">
        <Link to={`/inventory/${id}`}>
          <div className="bg-product-bg 2xl:mt-5 mt-2 2xl:w-[144px] w-[130px] rounded-lg">
            <img
              alt=""
              src={productImage}
              className="w-[144px] h-[173px] rounded-lg object-contain"
            />
          </div>

          <p className="font-innerbody">{productName}</p>
          <p className="font-semibold font-innerbody">${productPrice}</p>
        </Link>
      </div>
    </div>
  );
};

export default Product;
