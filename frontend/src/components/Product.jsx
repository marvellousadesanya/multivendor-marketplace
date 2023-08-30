import { Link } from "react-router-dom";

const Product = ({ id, productName, productImage, productPrice }) => {
  // const slug = `${productName.toLowerCase().replace(/\s+/g, "-")}-${id}`;

  return (
    <div className="h-[200px] lg:h-[308px] w-[140px] 2xl:w-[184px] flex justify-center rounded-lg bg-[#fff] p-2">
      <div className="overflow-hidden">
        <Link to={`/inventory/${id}`}>
          <div className="flex justify-center bg-product-bg rounded-lg overflow-hidden">
            <img
              alt=""
              src={`http://localhost:4500/${productImage}`}
              className="hover:scale-110 transition-all ease-in  h-[173px] rounded-lg object-contain"
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
