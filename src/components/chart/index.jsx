import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: [700, 950, 750, 420, 1000, 580, 870, 370, 750, 650, 900, 600],
        backgroundColor: "#8576ff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          color: "#fff",
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        ticks: {
          color: "#fff",
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="max-w-full h-[17rem] bg-[#484554] p-3">
      <Bar data={data} options={options} className="" />
    </div>
  );
};
