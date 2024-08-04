import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 500, 400, 700, 200, 600],
        backgroundColor: 'rgba(72, 24, 206, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };


  return (
    <div className="max-w-lg p-6 border rounded-lg shadow-lg mt-6 ml-4 lg:h-[300px] hover:shadow-xl bg-[#e2e8f0]">
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Barchart;
