// All copied from buyer wallet, will refactor later

import { useDispatch, useSelector } from "react-redux";
import { walletBalance } from "../features/wallet/walletSlice";
import { showModal, modalWindow } from "../features/wallet/modalSlice";
import FundModal from "../components/FundModal";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import addIcon from "../images/add.png";
import subtractIcon from "../images/subtract.png";

const Wallet = () => {
  const dispatch = useDispatch();
  let window = useSelector(modalWindow);

  let currentWalletBalance = useSelector(walletBalance);

  const transactions = currentWalletBalance.transactions.map(
    (transaction, index) => (
      <div>
        <div className="flex justify-around items-center text-xs h-12 font-innerbody font-semibold text-[#6C6C6C]">
          {currentWalletBalance.transactions[index].funded ? (
            <img src={addIcon} alt="" />
          ) : (
            <img src={subtractIcon} alt="" />
          )}
          <p className="w-24">{transaction.description}</p>
          <p className="w-4">Date</p>
          <p className="w-4">{transaction.amount}</p>
          <button>Successful</button>
        </div>
        <div className="flex justify-center text-[#D9D9D9]">
          <hr className="w-[90%] text-center" />
        </div>
      </div>
    )
  );

  return (
    <div className=" bg-backgroundColor">
      <NavBar />
      <div className="flex">
        <Menu />

        <div>
          <div className="m-5">
            <div className="w-[900px] h-[230px] rounded-2xl bg-[#fff] ">
              <div className="flex justify-between items-center px-10 py-7">
                <div>
                  <p className="text-[#6C6C6C] font-innerbody text-xs font-semibold">
                    Wallet Balance
                  </p>
                  <p className="text-[#27AE60] font-bold text-2xl font-innerbody">
                    ${currentWalletBalance.balance}
                  </p>
                </div>
                <div>
                  <p className="text-[#6C6C6C] font-innerbody text-xs font-semibold ">
                    Pending Orders
                  </p>
                  <p className="text-[#F77F00] font-bold text-2xl font-innerbody">
                    $0
                  </p>
                </div>
                <div>
                  <p className="text-[#6C6C6C] font-innerbody text-xs font-semibold">
                    Main Balance
                  </p>
                  <p className="text-[#D62828] font-bold text-2xl font-innerbody">
                    $0
                  </p>
                </div>
              </div>
              <div className="px-10">
                <p className="text-xs">
                  Your Current Balance is the amount you have available to use
                  on our platform at any given time. This is calculated by
                  subtracting the total value of your Pending Orders from your
                  Main Balance. When your Pending Orders are confirmed, the
                  total value of those orders is subtracted from your Main
                  Balance, which then synchronizes with your Current Balance. If
                  you cancel a Pending Order, the value of that order is added
                  to your Current Balance,which then synchronizes with your Main
                  Balance.
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

            <section className="w-full mt-4 rounded-2xl bg-[#fff] ">
              <h2 className="font-innerbody pt-8 font-semibold text-2xl text-bodyColor ml-10">
                Transactions
              </h2>

              <div>{transactions}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
