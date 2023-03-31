import { useDispatch, useSelector } from "react-redux";
import { walletBalance } from "../features/wallet/walletSlice";
import { showModal, modalWindow } from "../features/wallet/modalSlice";
import FundModal from "../components/FundModal";
import Menu from "../components/Menu";

const Wallet = () => {
  const dispatch = useDispatch();
  let window = useSelector(modalWindow);

  let currentWalletBalance = useSelector(walletBalance);
  console.log(currentWalletBalance.transactions);

  const transactions = currentWalletBalance.transactions.map((transaction) => (
    <div>
      <div className="flex justify-around font-innerbody font-semibold text-[#6C6C6C]">
        <p>Funded/Deducted</p>
        <p>{transaction.description}</p>
        <p>Date</p>
        <p>{transaction.amount}</p>
        <button>Status</button>
      </div>
      <hr />
    </div>
  ));

  return (
    <div className="flex bg-backgroundColor">
      <div>
        <Menu />
      </div>
      <div>
        <div className="m-10">
          <div className="w-fit h-[230px] rounded-2xl bg-[#fff] ">
            <div className="flex justify-between items-center px-10 py-7">
              <div>
                <p className="text-[#6C6C6C] font-innerbody text-xs font-semibold">
                  Wallet Balance
                </p>
                <p className="text-[#27AE60] font-bold text-2xl font-innerbody">
                  N{currentWalletBalance.balance}
                </p>
              </div>
              <div>
                <p className="text-[#6C6C6C] font-innerbody text-xs font-semibold ">
                  Pending Orders
                </p>
                <p className="text-[#F77F00] font-bold text-2xl font-innerbody">
                  N150,000
                </p>
              </div>
              <div>
                <p className="text-[#6C6C6C] font-innerbody text-xs font-semibold">
                  Main Balance
                </p>
                <p className="text-[#D62828] font-bold text-2xl font-innerbody">
                  N450,000
                </p>
              </div>
            </div>
            <div className="px-10">
              <p className="text-xs">
                Your Current Balance is the amount you have available to use on
                our platform at any given time. This is calculated by
                subtracting the total value of your Pending Orders from your
                Main Balance. When your Pending Orders are confirmed, the total
                value of those orders is subtracted from your Main Balance,
                which then synchronizes with your Current Balance. If you cancel
                a Pending Order, the value of that order is added to your
                Current Balance,which then synchronizes with your Main Balance.
              </p>
              <button
                className="bg-mainColor text-[#fff] rounded-2xl w-36 h-12 text-center mt-2"
                onClick={() => {
                  dispatch(showModal(true));
                }}
              >
                Fund Wallet
              </button>
            </div>
          </div>
          {window.window ? <FundModal /> : null}

          <section className="w-[1000px] mt-4 rounded-2xl bg-[#fff] h-[230px]">
            <h2 className="font-innerbody font-semibold text-2xl text-bodyColor ml-10">
              Transactions
            </h2>

            <div>{transactions}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
