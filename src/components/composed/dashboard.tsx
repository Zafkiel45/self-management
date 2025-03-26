"use client";
import { Home } from "../../../public/svg_components/home";
import { NavItem } from "../nav_item";
import { Navbar } from "../navbar";
import { MainContent } from "../main_content";
import { StatsCard } from "./stats_card";

export const DashboardComponent = () => {
  const data = [{name: 'janeiro', value: 24}, {name: 'feveireiro', value: 24}]

  return (
    <div className="flex h-screen w-screen">
      <Navbar>
        <NavItem content="Dashboard" icon={<Home />} />
      </Navbar>
      <MainContent>
        <StatsCard data={data} />
      </MainContent>
    </div>
  );
};
