import FilterSideBar from "@/components/sidebar/filtersidebar";

export default function ProductsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex w-full ">
        {children}
        <FilterSideBar />
      </div>
    </section>
  );
}
