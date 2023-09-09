import Image from "next/image";
import Link from "next/link";
import ButtonColored from "../buttons/ButtonColored";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function NavBarInner() {
  return (
    <nav className="z-10 sticky top-0 h-20 px-7 w-screen flex justify-between items-center bg-[#fff]">
      <div>
        <Link href="/">
          <Image
            alt=""
            src="/assets/bytemarketLogo.png"
            width={100}
            height={40}
            className="z-3"
          />
        </Link>
      </div>

      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-4" />
        <input
          type="text"
          className="rounded-lg pl-5 bg-[#ECF0FF] w-[500px] h-[40px] placeholder:pl-8"
          placeholder="Search"
        />
      </div>

      {/* <ButtonColored title="Add Products" /> */}

      <div className="flex space-x-2 items-center overflow-hidden">
        <div className="text-right">
          <p className="">User name</p>
          <p className="text-xs">Buyer</p>
        </div>
        <div className="rounded-full overflow-hidden">
          <Image
            src="/assets/user.jpeg"
            alt="user image"
            height={30}
            width={30}
          />
        </div>
      </div>
    </nav>
  );
}
