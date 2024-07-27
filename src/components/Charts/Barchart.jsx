import React from 'react';
import { Chart, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"


Chart.register(...registerables)
const chartData={
    xdata:[60,50,40,30,20,10,40,50],
    datasets:[
        {
            ydata:[60,50,40,30,20,10,40,50]
        }
    ]
}

const options = {
    maintainAspectRatio: false,
  }

const Barchart = () => {
  return (
        <div className='max-w-lg p-6 border rounded-lg shadow-lg mt-6 ml-4 lg:h-[300px] hover:shadow-xl'>
            <div>
                <Bar
                data={chartData}
                options={options}
                />
            </div>
        </div>
  )
}

export default Barchart;