import Image from "next/image";

interface ProductProps {
  productPrice: number;
  productName: string;
  productImage: string;
  productSlug: string;
}

export default function Product({
  productPrice,
  productName,
  productImage,
  productSlug,
}: ProductProps) {
  return (
    <div className="w-40 2xl:w-48 p-2 h-64 bg-white rounded-md">
      <div className="relative bg-[url('/assets/backdrop.png')] w-full h-40 rounded-md flex justify-center items-center">
        <div className="absolute hover:scale-125 cursor-pointer hover:bg-red-600 top-2 right-2 w-4 h-4 flex justify-center items-center  rounded-full bg-[#BBBBBB]">
          <Image
            src="/assets/icons/heart-icon.svg"
            alt="icon"
            height={10}
            width={10}
            className="z-3"
          />
        </div>
        <Image
          src={`http://localhost:4500/${productImage}`}
          alt=""
          height={80}
          width={80}
        />
      </div>

      <div className="mt-4">
        <p className="font-semibold">{productName}</p>
        <p className="text-xs text-[#6C6C6C]">Product description here</p>
        <p className="text-sm font-semibold">{productPrice}</p>
        <p>{productSlug}</p>
      </div>
    </div>
  );
}
