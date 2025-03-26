"use client";
import { Home } from "../../../public/svg_components/home";
import { NavItem } from "../nav_item";
import { Navbar } from "../navbar";
import { MainContent } from "../main_content";
import { StatsCard } from "./stats_card";

export const DashboardComponent = () => {
  const data = [
    {name: 'janeiro', value: 24}, 
    {name: 'feveireiro', value: 24},
    {name: 'Março', value: 64},
    {name: 'Abril', value: 34},
    {name: 'Maio', value: 22},
    {name: 'Junho', value: 2},
    {name: 'Julho', value: 244},
    {name: 'Agosto', value: 64},
    {name: 'Setembro', value: 54},
    {name: 'Outubro', value: 87},
    {name: 'Novembro', value: 7},
    {name: 'Dezembro', value: 10},
  ]

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
