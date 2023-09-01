import Image from "next/image";

interface ProductCategoryProps {
  categoryTitle: string;
}

const Category = ({ categoryTitle }: ProductCategoryProps) => {
  return (
    <div className="rounded-xl cursor-pointer overflow-hidden w-[250px] h-72  flex justify-center p-3 shadow bg-brand-light-blue">
      <div className="h-48 w-full rounded-xl">
        <div className="h-48 w-full flex justify-center bg-white rounded-xl">
          <Image
            className="transition-all ease-in hover:scale-110"
            src="/assets/laptop.png"
            height={140}
            width={140}
            alt=""
          />
        </div>
        <h3 className="pt-3 font-semibold text-brand-blue">{categoryTitle}</h3>
      </div>
    </div>
  );
};

export default Category;
