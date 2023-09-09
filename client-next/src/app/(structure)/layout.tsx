import MainSideBar from "@/components/sidebar/mainsidebar";
import NavBarInner from "@/components/navbar/navbarinner";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBarInner />
      <div className="flex">
        <MainSideBar />

        {children}
      </div>
    </section>
  );
}
