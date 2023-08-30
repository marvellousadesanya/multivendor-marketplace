import Image from "next/image";
import ButtonWhite from "../buttons/ButtonWhite";

function Header() {
  return (
    <>
      <div className="relative flex justify-center text-center bg-brand-light-blue pt-[40px] h-full">
        <div className="flex flex-col justify-center">
          <h4 className="text-brand-blue text-[22px] font-bold">
            Your Ultimate Tech
          </h4>
          <h1 className="uppercase text-brand-orange mt-[-70px] font-bebas text-[200px]">
            destination
          </h1>
          <div className="absolute m-auto right-0 left-0 bottom-[35%] flex justify-center">
            <ButtonWhite title="Shop Now" />
          </div>
          <div className="mt-[-150px] flex justify-center">
            <>
              <Image
                src="/assets/header-image-3.png"
                alt="Header image"
                height={300}
                width={500}
              />
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
