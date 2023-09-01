import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import Button from "../components/Button";
import OtpInput from "../components/OtpInput";

function Verify() {
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <LeftSidebar />
        <div className="w-full flex justify-center items-center">
          <div className="text-left space-y-8 ">
            <h2 className="text-6xl ">Email Verification </h2>
            <h3 className="text-stone-400">
              A 6 digit code as been sent to your email x@gmail.com{" "}
            </h3>
            <div>
              <OtpInput />
            </div>

            <p className="text-stone-400">
              Didnt recieve the code?{" "}
              <span className="text-stone-800">Resend</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
