import HeaderImage from "../images/header-image.png";
import listIcon from "../images/listBarIcon.png";
import shoppingIcon from "../images/shoppingIcon.png";
import secureIcon from "../images/secureIcon.png";

const HomePage = () => {
  return (
    <div>
      <header className="bg-[#E5E5E5] h-[100vh] flex flex-col items-center gap-y-0 pt-5">
        <h3 className="font-innerbody mb-[-5%] p-0">Your ultimate tech</h3>
        <h1 className=" font-heading text-[220px] text-mainColor mt-0">
          DESTINATION
        </h1>
        <img src={HeaderImage} alt="Header" className="m-[-13%] w-[400px]" />
        <button className="bg-[#fff] font-innerbody text-mainColor px-12 py-2 rounded">
          Shop Now
        </button>
      </header>

      <section>
        <div>
          <h2 className="font-heading text-mainColor text-[50px] text-center">
            Shop By Category
          </h2>
          <div>
            <p>Pic 1</p>
            <p>Pic 2</p>
            <p>Pic 3</p>
          </div>
        </div>
      </section>

      <section className="bg-[#E5E5E5] px-[56px]">
        <h2 className="text-[30px] font-innerbody">Why Choose ByteMarket?</h2>
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
            <button className="px-[80px] py-[5px] font-semibold text-[#fff] bg-mainColor rounded">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-innerbody font-bold text-[30px]">Brands we sell</h2>
        <div className="flex">
          <li>Apple</li>
          <li>Samsung</li>
          <li>HP</li>
          <li>Lenovo</li>
        </div>

        <div className="text-center">
          <button className="px-[80px] py-[5px] font-semibold text-[#fff] bg-mainColor rounded">
            Explore Brands
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
