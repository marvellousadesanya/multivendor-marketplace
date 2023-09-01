import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full flex bg-[#EFF2FF] items-center py-2 px-10">
      <div className="flex justify-between w-full">
        <Image
          src="/assets/bytemarketLogo.png"
          alt="brand logo"
          height={64}
          width={112}
          className="cursor-pointer"
        />

        <div className="flex gap-5 text-sm font-semibold text-brand-blue">
          <span className="cursor-pointer">Sign up</span>
          <span className="cursor-pointer">Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
