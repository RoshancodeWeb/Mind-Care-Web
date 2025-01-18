import Navbar from "./Dashboard-Components/Navbar";
import SideMenu from "./Dashboard-Components/SideMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col">
        <Navbar/>
        <div className="w-full h-full flex ">
          <SideMenu/>
          {children}
        </div>
        
    </div>
  );
}
