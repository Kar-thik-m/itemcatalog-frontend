import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true
    },
    title: {
      display: false
    }
  },
  cutoutPercentage: 100
};

export const data = {
  labels: ["electonics", "furnitures", "fashion"],
  datasets: [
    {
      label: "# of Votes",
      data: [11, 8, 5],
      backgroundColor: ["#36b9cc", "#4e73df", "#1cc88a"],
      borderWidth: 4
    }
  ]
};

export function Piechart() {
   
  return <Doughnut data={data} options={options} />;
}