import { NavItem } from "@/components/nav_item";
import { Navbar } from "@/components/navbar";
import { Home } from "../../../public/svg_components/home";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#070709] flex ">
      <Navbar>
        <NavItem content="Dashboard" icon={<Home />} />
      </Navbar>
      {children}
    </div>
  );
}
