import React from "react";
import { Chart, registerables } from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import dropdown from "../assets/dropdown.svg";
import Box2 from "./Box2";
Chart.register(...registerables);
function ChartGraph({ data }) {
  console.log("fata", data);
  function genrateRemdomeColor(number) {
    let color = [];
    let i = 0;
    while (i < number) {
      let first = Math.floor(Math.random() * 256);
      let second = Math.floor(Math.random() * 256);
      let thired = Math.floor(Math.random() * 256);

      const newcolor = `rgb(${first},${second},${thired})`;

      color.push(newcolor);
      i++;
    }

    return color;
  }

  const chartForIncome = {
    labels: data?.map((c) => c.courseName),
    datasets: [
      {
        label: "Price1",
        data: data.map((cu) => cu?.price),
        backgroundColor: "#E9A0A0",
        fill: false,
        borderColor: "#E9A0A0",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 4,
      },

      {
        label: "Price2",
        data: [2500, 4000, 5000, 2500, 4000],
        backgroundColor: "#9BDD7C",
        borderColor: "#9BDD7C",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 4,
      },
    ],
  };

  function genrateRemdomeColor(number) {
    let color = [];
    let i = 0;
    while (i < number) {
      let first = Math.floor(Math.random() * 256);
      let second = Math.floor(Math.random() * 256);
      let thired = Math.floor(Math.random() * 256);

      const newcolor = `rgb(${first},${second},${thired})`;

      color.push(newcolor);
      i++;
    }

    return color;
  }

  const data2 = {
    labels: data?.map((c) => c.courseName),
    datasets: [
      {
        label: "Price1",
        data: data.map((cu) => cu?.price),
        backgroundColor: genrateRemdomeColor(data.length),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide the vertical grid lines
        },
      },
      y: {
        grid: {
          display: true, // Display the horizontal grid lines
        },
      },
    },
  };

  const content = [
    {
        color:"bg-[#9BDD7C]",
        heading:"Meeting with suppliers from Kuta Bali",
        time:"14.00-15.00",
        lend:"at Sunset Road, Kuta, Bali "
    },
    {
        color:"bg-[#6972C3]",
        heading:"Check operation at Giga Factory 1",
        time:"18.00-20.00",
        lend:"at Central Jakarta "
    },
  ]

  return ( 
    <div className="flex flex-col gap-10 w-full">
      <div className="bg-white rounded-2xl flex flex-col p-10 w-full">
        <p className="self-start font-bold text-2xl">Activities</p>
        <div className="flex gap-2 self-start font-[300]">
          <p className="self-start"> May - June 2021</p>
          <img src={dropdown} />
        </div>
        <div className="w-full">
          <Line data={chartForIncome} options={options} 
            updateMode={"resize"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl flex items-center flex-col p-10 ">
          <div className="flex justify-between w-full items-center">
            <p className="self-start font-bold text-2xl">Top Products</p>
            <div className="flex gap-2 self-start font-[300]">
              <p className="self-start"> May - June 2021</p>
              <img src={dropdown} />
            </div>
          </div>
          <div>
            <Pie data={data2} />
          </div>
        </div>

        <div className="flex flex-col gap-10 bg-white p-10 rounded-2xl " >
        <div className="flex justify-between w-full">
            <p className="self-start font-bold text-2xl ">Today’s schedule</p>
            <div className="flex items-center gap-2">See All  <img src={dropdown} className="w-[10px]" /> </div>
        </div>
        <div className="flex flex-col gap-5">
            {
             content.map((da,index)=>(
                <Box2 {...da} key={index} />
             ))   
            }
        </div>
        </div>
      </div>
    </div>
  );
}

export default ChartGraph;
