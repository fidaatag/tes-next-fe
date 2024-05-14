import Navbar from "@/../../src/components/Navbar";
import Sidebar from "@/../../src/components/Sidebar";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
};

export default LayoutDashboard;
