"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  WalletIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import LogoutPopup from "../logout/logoutpopup";

export default function MainSideBar() {
  const [selectedItem, setSelectedItem] = useState<null | string>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <aside className="w-[22.5rem] h-full text-[#6C6C6C] flex sticky top-0">
      <div className="pl-7">
        <div className="space-y-4">
          <p className="uppercase text-sm mt-32">Menu</p>
          <div className="space-y-7 text-base list-none">
            <div>
              <Link href="/products">
                <li
                  className={`cursor-pointer ${
                    selectedItem === "products"
                      ? "text-[#003049] font-bold"
                      : "hover:text-[#003049] hover:font-bold"
                  } flex gap-2 items-center`}
                  onClick={() => handleItemClick("products")}>
                  <BuildingStorefrontIcon className="w-5 h-5" />
                  <p>Products</p>
                </li>
              </Link>
            </div>

            <div>
              <Link href="/sales">
                <li
                  className={`cursor-pointer ${
                    selectedItem === "sales"
                      ? "text-[#003049] font-bold"
                      : "hover:text-[#003049] hover:font-bold"
                  } flex gap-2 items-center`}
                  onClick={() => handleItemClick("sales")}>
                  <ShoppingCartIcon className="w-5 h-5" />
                  <p>Sales</p>
                </li>
              </Link>
            </div>

            <div>
              <Link href="/wallet">
                <li
                  className={`cursor-pointer ${
                    selectedItem === "wallet"
                      ? "text-[#003049] font-bold border-l-[5px] border-l-[#003049]"
                      : "hover:text-[#003049] hover:font-bold"
                  } flex gap-2 items-center w-full`}
                  onClick={() => handleItemClick("wallet")}>
                  <WalletIcon className="w-5 h-5" />
                  <p>Wallet</p>
                </li>
              </Link>
            </div>

            <div>
              <Link href="/account">
                <li
                  className={`cursor-pointer ${
                    selectedItem === "account"
                      ? "text-[#003049] font-bold"
                      : "hover:text-[#003049] hover:font-bold"
                  } flex gap-2 items-center`}
                  onClick={() => handleItemClick("account")}>
                  <UserIcon className="w-5 h-5" />
                  <p>Account</p>
                </li>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-40 flex gap-2 cursor-pointer">
          <Image
            src="/assets/icons/logout.svg"
            alt="log out icon"
            height={20}
            width={20}
          />
          <p>Log out</p>
        </div>
      </div>
    </aside>
  );
}
