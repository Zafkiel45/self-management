import { MainContent } from "@/components/main_content";
import { StatsCard } from "@/components/composed/stats_card";

export default function Dashboard() {
  const data = [
    { name: "janeiro", value: 24 },
    { name: "feveireiro", value: 24 },
    { name: "Março", value: 64 },
    { name: "Abril", value: 34 },
    { name: "Maio", value: 22 },
    { name: "Junho", value: 2 },
    { name: "Julho", value: 244 },
    { name: "Agosto", value: 64 },
    { name: "Setembro", value: 54 },
    { name: "Outubro", value: 87 },
    { name: "Novembro", value: 7 },
    { name: "Dezembro", value: 10 },
  ];
  return (
    <MainContent configs="flex-col">
      <StatsCard data={data} title="Dias em que você estudou" />
      <StatsCard data={data} title="Vezes em que você praticou hobbies" />
      <StatsCard data={data} title="Vezes em que você superou um vício" />
    </MainContent>
  );
}
