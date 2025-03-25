import Home from "@/app/page";
import { NavItem } from "../nav_item";
import { Navbar } from "../navbar";

export const DashboardComponent = () => {
  return (
    <div className="flex gap-2 h-screen w-screen">
      <Navbar>
        <NavItem content="Dashboard" icon={<Home />} />
      </Navbar>
    </div>
  );
};
