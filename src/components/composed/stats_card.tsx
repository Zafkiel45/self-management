"use client";

import { List } from "../list";
import { Title } from "../title";
import { BarChart } from "../bar_chart";

interface argsSignature {
  data: { name: string; value: number }[];
};

export const dataColors = [
  "bg-green-400",
  "bg-yellow-400",
  "bg-blue-400",
  "bg-red-400",
  "bg-cyan-400",
  "bg-gray-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-slate-400",
  "bg-red-700",
  "bg-blue-700",
  "bg-green-700",
];

export const StatsCard = ({ data }: argsSignature) => {
  const responsiveClasses = "gap-5 w-full max-h-96 p-7";

  return (
    <div
      className={`flex flex-col bg-[#171717] border border-[#5A5A5A] rounded-lg shadow-sm justify-start ${responsiveClasses}`}
    >
      <Title content="Dias Ativos" />
      <BarChart data={data}/>
      <div className="w-full">
        <List isColumn={false}>
          {data.map((item, idx) => {
            return (
              <li key={idx + 1} className="flex gap-2 items-center">
                {/* ball */}
                <div className={`h-3 w-3 rounded-md ${dataColors[idx]}`}></div>
                {/* content */}
                {item.name}: {item.value}
              </li>
            );
          })}
        </List>
      </div>
    </div>
  );
};
