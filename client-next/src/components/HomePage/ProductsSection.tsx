import Category from "../ProductCategory";

function ProductsSection() {
  return (
    <section className="py-7">
      <div className="space-y-3">
        <h2 className="font-bebas text-brand-orange text-[50px] text-center">
          Shop By Category
        </h2>

        <div className="flex justify-center gap-12">
          <Category categoryTitle="Laptops" />
          <Category categoryTitle="Phones" />
          <Category categoryTitle="Tablets" />
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
