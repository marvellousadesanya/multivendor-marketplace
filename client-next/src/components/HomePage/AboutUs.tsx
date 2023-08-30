"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import ButtonColored from "../buttons/ButtonColored";

function AboutUsSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-[#E5E5E5] px-[56px] py-5 text-brand-blue">
      <h2 className="text-[25px] font-bold ">Why ByteMarket?</h2>
      <h3 className="font-bold ">Various Categories</h3>
      <div className="flex items-center gap-x-20">
        <div className="w-[1200px] text-[#6C6C6C]" data-aos="slide-left">
          At ByteMarket, we pride ourselves on offering a vast selection of tech
          products to suit every taste and budget. From smartphones and laptops
          to smart home devices and gaming accessories, our platform is home to
          a diverse range of categories, ensuring that our customers have access
          to the latest and greatest in tech. With our easy-to-navigate website
          and intuitive search functionality, finding the perfect product has
          never been easier!
        </div>

        <div data-aos="slide-right">
          <Image
            src="/assets/listBarIcon.png"
            alt="list icon"
            height={200}
            width={200}
          />
        </div>
      </div>

      <div className="flex items-center">
        <div data-aos="slide-right">
          <Image
            alt="shopping"
            height={200}
            width={200}
            src="/assets/shoppingIcon.png"
            className="w-[500px]"
          />
        </div>
        <div className="w-[1200px] text-[#6C6C6C]" data-aos="slide-left">
          We understand that when it comes to technology, time is of the
          essence. Thats why we offer fast and reliable shipping options to get
          your products to you as quickly as possible. Our partnerships with
          top-rated carriers ensure that your products arrive on time and in
          perfect condition, no matter where you are in the world. Plus, with
          our real-time tracking and updates, youll always know where your order
          is and when to expect it.
        </div>
      </div>

      <div>
        <div className="flex">
          <div className="w-[1200px] text-[#6C6C6C]" data-aos="slide-right">
            At ByteMarket, we take your online security seriously. Thats why we
            use the latest encryption and security measures to protect your
            personal and financial information when you shop with us. Our secure
            payment gateway ensures that your transactions are safe and
            reliable, giving you peace of mind when you make a purchase. Plus,
            with our fraud detection and prevention tools, you can shop with
            confidence, knowing that were always working to keep your
            information safe.
          </div>
          <div data-aos="slide-left">
            <Image
              src="/assets/secureIcon.png"
              height={200}
              width={200}
              alt="secure"
            />
          </div>
        </div>

        <div className="text-center pb-8">
          <div
            className="flex justify-center pb-7 items-center"
            data-aos="slide-up">
            <ButtonColored title="Shop Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
