import Image from "next/image";
import ButtonColored from "../buttons/ButtonColored";

function BrandsSection() {
  return (
    <section className=" px-[60px] py-[30px]">
      <div className="">
        <h2 className="font-innerbody font-bold text-[30px]">
          Some Brands we sell
        </h2>
        <div className="flex max-w-[1920px] w-full items-center justify-between pt-12 px-5">
          <Image
            src="/assets/appleIcon.png"
            alt="apple"
            height={90}
            width={70}
          />
          <Image src="/assets/dellIcon.png" alt="dell" height={70} width={70} />
          <Image
            src="/assets/samsungIcon.png"
            alt="samsung"
            height={50}
            width={200}
            className="self-center"
          />
          <Image src="/assets/hpIcon.png" alt="hp" height={70} width={70} />
          <Image
            src="/assets/technoIcon.png"
            alt="techno"
            height={40}
            width={200}
            className="self-center"
          />
        </div>

        <div className="flex justify-center items-center my-7">
          <ButtonColored title="Explore Brands" />
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
