import Image from "next/image";
import Navbar from "@/components/HomePage/Navbar";
import Header from "@/components/HomePage/Header";
import ProductsSection from "@/components/HomePage/ProductsSection";
import AboutUsSection from "@/components/HomePage/AboutUs";
import BrandsSection from "@/components/HomePage/BrandsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Header />
      <ProductsSection />
      <AboutUsSection />
      <BrandsSection />
      <Footer />
    </div>
  );
}
