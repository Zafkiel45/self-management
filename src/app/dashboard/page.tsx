import { Navbar } from "@/components/navbar";
import { NavItem } from "@/components/nav_item";
import { Home } from "../../../public/svg_components/home";

export default function Dashboard() {
  return (
    <div className="flex gap-2 h-screen w-screen">
      <Navbar>
        <NavItem content="Dashboard" icon={<Home/>} />
      </Navbar>
    </div>
  );
}
