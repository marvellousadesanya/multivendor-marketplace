import { useState } from "react";
import { fundWallet } from "../features/wallet/walletSlice";
import { useSelector, useDispatch } from "react-redux";
import { showModal, modalWindow } from "../features/wallet/modalSlice";

const FundModal = () => {
  let fundModal = useSelector(modalWindow);
  console.log(fundModal);

  const dispatch = useDispatch();
  const [amountToAdd, setAmountToAdd] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      {fundModal.window ? (
        <div className="absolute z-10 rounded-2xl w-72 text-bodyColor font-innerbody bg-[#fff] p-5">
          <form className="flex flex-col space-y-2 justify-center">
            <h3 className="font-bold text-4xl">Add Product</h3>
            <p>You can ignore the card details for now...</p>
            <label className="font-semibold text-base">Amount:</label>
            <input
              type="number"
              className="w-60 rounded-xl h-12 border border-[#8A8A8A]"
              onChange={(e) => setAmountToAdd(parseInt(e.target.value))}
              value={amountToAdd}
            />

            <label className="font-semibold text-base">Description:</label>
            <input
              type="text"
              className="w-60 rounded-2xl h-12 border border-[#8A8A8A]"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <label className="font-semibold text-base">Card details:</label>
            <input
              type="number"
              className="w-60 rounded-xl h-12 border border-[#8A8A8A]"
            />

            <div className="flex space-x-3">
              <button
                className="rounded-2xl bg-[#D4D4D4] w-36 h-12"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showModal(false));
                }}>
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fundWallet(amountToAdd, description));
                }}
                className="bg-mainColor text-[#fff] rounded-2xl w-36 h-12">
                Fund
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default FundModal;
