import { NavItem } from "@/components/nav_item";
import { Navbar } from "@/components/navbar";
import { Home } from "../../../public/svg_components/home";
import { Person } from "../../../public/svg_components/person";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#070709] flex ">
      <Navbar>
        <Link href={'/dashboard'} className="w-full">
            <NavItem content="Dashboard" icon={<Home />} /> 
        </Link>
        <Link href={'/dashboard/habits'} className="w-full">
            <NavItem content="Habits" icon={<Person />} />
        </Link>
      </Navbar>
      {children}
    </div>
  );
}
