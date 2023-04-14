import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import OrderedItem from "../components/OrderedItem";
import { useDispatch, useSelector } from "react-redux";
import { buyItem } from "../features/wallet/walletSlice";
import { getTotal, removeAllItems } from "../features/cart/cartSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.cart.items);
  const testValidation = useSelector((state) => state.orders.successful);
  console.log(orderedItems);

  const cartTotal = useSelector(getTotal);

  const handleBuyAllItems = () => {
    dispatch(buyItem(cartTotal));
    // setBuyBtnClicked(true);
    // dispatch(orderedProduct());
  };

  return (
    <div className="bg-[#ECF0FF] ">
      <NavBar />
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div className="flex m-5">
          {/* <OrderedItem /> */}
          {/* {testValidation && <h2>test</h2>} */}
          <div className="space-y-5">
            {orderedItems.map((item) => (
              <div className="">
                <OrderedItem
                  title={item.title}
                  productImg={item.images[0]}
                  price={item.price}
                />
              </div>
            ))}
          </div>

          <div>
            <h3>Ordered items total</h3>
            <p>N1,200,000</p>
          </div>
        </div>
      </div>
      <section className="relative left-[220px]">
        <h2>Delivered Items</h2>
        <p>Section for delivered items</p>
      </section>
    </div>
  );
};

export default Orders;
