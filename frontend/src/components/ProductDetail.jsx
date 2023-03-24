import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams();

  return (
    <div className="product-details">
      <h1>{slug}</h1>
      <p>Product details go here</p>
    </div>
  );
};

export default ProductDetail;
