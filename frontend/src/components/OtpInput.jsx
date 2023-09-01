import React, { useEffect, useRef, useState } from "react";

function OtpInput() {
  const inputLength = Array.from({ length: 6 });
  const [digit, setDigit] = useState(["", "", "", "", "", ""]);
  const [token, setToken] = useState("");
  const [remainingTime, setRemainingTime] = useState(59);
  const [error, setError] = useState(false);
  const inputRef = Array.from({ length: 6 }, () => React.createRef());

  function handleInput(i, value) {
    if (value !== "" && i < inputLength.length - 1) {
      inputRef[i + 1].current.focus();
    }
    const newDigit = [...digit];
    newDigit[i] = value;
    setDigit(newDigit);
    setToken(digit.join(""));
  }

  function handleSubmit() {
    if (token.length < 5) {
      setError(true);
      return;
    } else {
      setError(false);
      alert("token: " + token);
    }
  }

  useEffect(function () {
    inputRef[0].current.focus();
    const id = setInterval(
      () => setRemainingTime((r) => (0 < r ? r - 1 : 0)),
      1000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {inputLength.map((_, i) => (
        <input
          key={i}
          type="text"
          value={digit[i]}
          ref={inputRef[i]}
          maxLength={1}
          onChange={(e) => handleInput(i, e.target.value)}
          className="h-16 w-16 p-4 mr-6 bg-slate-100 text-2xl focus:outline-none focus:ring focus:ring-stone-300 text-center rounded-lg"
        />
      ))}
      <p className="mt-1 mb-4">
        00: {remainingTime < 10 ? "0" : ""}
        {remainingTime} remaining
      </p>
      <button
        onClick={handleSubmit}
        className="bg-[#F77F00] w-full px-8 py-3 text-xl font-semibold xl hover:bg-[#F77F00]/80 rounded-lg text-white"
      >
        Verify Email
      </button>
      {error && <p className="text-red-700">Token incomplete</p>}
    </div>
  );
}

export default OtpInput;
