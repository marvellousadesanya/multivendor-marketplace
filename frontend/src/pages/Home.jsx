import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Button from "../components/Button";
import ButtonWhite from "../components/ButtonWhite";
import Category from "../components/Category";

import HeaderImage from "../images/header-image.png";
import HeaderImage2 from "../images/header-image-2.png";
import HeaderImage3 from "../images/header-image-3.png";

import listIcon from "../images/listBarIcon.png";
import shoppingIcon from "../images/shoppingIcon.png";
import secureIcon from "../images/secureIcon.png";
import appleIcon from "../images/appleIcon.png";
import dellIcon from "../images/dellIcon.png";
import hpIcon from "../images/hpIcon.png";
import technoIcon from "../images/technoIcon.png";
import samsungIcon from "../images/samsungIcon.png";

const HeaderImages = [
  HeaderImage,
  // HeaderImage2, HeaderImage3
];

const headerVariants = {
  visible: {
    x: ["100vw"],
    transition: {
      delay: 1.5,
      duration: 5,
      repeat: 2,
    },
  },
};

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <header className="bg-[#E5E5E5] h-[100vh] flex flex-col items-center gap-y-0 pt-5">
        <h3 className="font-innerbody mb-[-5%] p-0 font-semibold">
          Your ultimate tech
        </h3>
        
          <h1 className=" font-heading text-[220px] text-mainColor mt-0">
            DESTINATION
          </h1>
        

        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="m-[-13%] flex justify-between space-x-[50vw]"
        >
          {/* <div className="m-[-13%]  flex"> */}
          {HeaderImages.map((image) => (
            <img src={image} alt="Header" className="w-[400px] " />
          ))}
          {/* </div> */}
        </motion.div>

        <motion.div
          transition={{ delay: 2.0, duration: 0.2 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ButtonWhite btnText="Shop Now" />
        </motion.div>
      </header>

      <section>
        <div>
          <h2 className="font-heading text-mainColor text-[50px] text-center">
            Shop By Category
          </h2>

          <div className="flex justify-center gap-12">
            <Category categoryTitle="Laptop" />
            <Category categoryTitle="Phones" />
            <Category categoryTitle="Tablets" />
          </div>
        </div>
      </section>

      <section className="bg-[#E5E5E5] px-[56px]">
        <h2 className="text-[25px] font-bold font-innerbody">
          Why ByteMarket?
        </h2>
        <h3 className="font-bold font-innerbody">Various Categories</h3>

        <div className="flex items-center gap-x-20">
          <div className="w-[1200px]">
            At ByteMarket, we pride ourselves on offering a vast selection of
            tech products to suit every taste and budget. From smartphones and
            laptops to smart home devices and gaming accessories, our platform
            is home to a diverse range of categories, ensuring that our
            customers have access to the latest and greatest in tech. With our
            easy-to-navigate website and intuitive search functionality, finding
            the perfect product has never been easier!
          </div>

          <div>
            <img src={listIcon} alt="listicon" className="w-[280px]" />
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <img alt="shopping" src={shoppingIcon} className="w-[500px]" />
          </div>
          <div className="w-[1200px]">
            We understand that when it comes to technology, time is of the
            essence. That's why we offer fast and reliable shipping options to
            get your products to you as quickly as possible. Our partnerships
            with top-rated carriers ensure that your products arrive on time and
            in perfect condition, no matter where you are in the world. Plus,
            with our real-time tracking and updates, you'll always know where
            your order is and when to expect it.
          </div>
        </div>

        <div>
          <div className="flex">
            <div className="w-[1200px]">
              At ByteMarket, we take your online security seriously. That's why
              we use the latest encryption and security measures to protect your
              personal and financial information when you shop with us. Our
              secure payment gateway ensures that your transactions are safe and
              reliable, giving you peace of mind when you make a purchase. Plus,
              with our fraud detection and prevention tools, you can shop with
              confidence, knowing that we're always working to keep your
              information safe.
            </div>
            <div>
              <img src={secureIcon} alt="secure" />
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center">
              <Button btnText="Shop Now" />
            </div>
          </div>
        </div>
      </section>

      <section className=" px-[56px] py-[30px]">
        <div className="">
          <h2 className="font-innerbody font-bold text-[30px]">
            Some Brands we sell
          </h2>
          <div className="flex space-x-12 h-[50px] justify-center mt-12">
            <img src={appleIcon} alt="apple" className="" />
            <img src={dellIcon} alt="dell" />
            <img src={hpIcon} alt="hp" />
            <img src={technoIcon} alt="techno" />
            <img src={samsungIcon} alt="samsung" />
          </div>

          <div className="flex justify-center items-center my-7">
            <Button btnText="Explore Brands" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
