"use client";
import { dataColors } from "./composed/stats_card";
import { useEffect, useState } from "react";

interface argsSignature {
  data: { name: string; value: number }[];
}

type chartSignature = { color: string; percentage: number }[];

export const BarChart = ({ data }: argsSignature) => {
  const [chart, setChart] = useState<chartSignature>([]);

  function getTotal() {
    let total = 0;

    for (const element of data) {
      total += element.value;
    }
    return total;
  }

  useEffect(() => {
    function generateChart() {
      const total = getTotal();
      const newChart = data.map((element, idx) => ({
        color: dataColors[idx],
        percentage: Math.floor((element.value / total) * 100),
      }));

      setChart(newChart);
    }

    generateChart();
  }, [data]);

  return (
    <div className="flex w-full">
      {chart.map((item, idx) => {
        return (
          <div
            style={{ width: item.percentage + '%'}}
            key={idx + 1}
            className={`h-5 ${item.color}`}
          ></div>
        );
      })}
    </div>
  );
};
