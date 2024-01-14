"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["FRONTEND", "BACKEND", "MOBILE", "GRAPHICS", "UI/UX"],
  datasets: [
    {
      label: "",
      data: [9, 8, 8, 9, 9],
      backgroundColor: "rgba(250, 159, 238, 0.2)",
      borderColor: "#bd07b7",
      borderWidth: 2,
      max: 9,
      fill: true,
      // pointBackgroundColor: "rgb(221, 73, 244)",
      // pointBorderColor: "#fff",
      // pointHoverBackgroundColor: "#fff",
      // pointHoverBorderColor: "rgb(245, 41, 187)",
    },
  ],
};

const chartOptions = {
  // scales: {
  //   xAxes: [
  //     {
  //       ticks: {
  //         display: false,
  //       },
  //     },
  //   ],
  //   x: {
  //     display: false,
  //   },
  //   ticks: {
  //     display: false, //this will remove only the label
  //   },
  // },
  plugins: {
    legend: {
      display: false, // This hides all text in the legend and also the labels.
    },
    title: {
      display: false,
      text: "",
    },
  },
  scales: {
    r: {
      min: 0,
      max: 10,
      beginAtZero: true,
      label: false,
    },
  },
  legend: {
    display: false,
    title: {
      display: false,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
  },
};

const IconList = () => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Icon
            key={index} // Make sure to include a unique key when dynamically generating components in a loop
            className="text-yellow-400 block"
            width={20}
            height={20}
            icon={`mingcute:star-fill`}
          />
        ))}
    </>
  );
};

export const Skills = () => {
  return (
    <section className="py-20 px-5 sm:px-10">
      <header className="flex flex-col sm:flex-row justify-between items-center w-full">
        <div className="w-full flex-1 col-12 sm:w-6/12 text-gray-900 uppercase  text-2xl md:text-2xl lg:text-4xl">
          <h5 className="text-black text-sm">Skills & Expertise</h5>
          <h2 className="font-bold">Experience</h2>
        </div>
        <div className="flex sm:space-between w-full items-center">
          <div className="sm:pl-40 w-4/12 sm:w-8/12">
            <div>
              <Image
                src="/profile-img.png"
                width={100}
                height={100}
                alt="Picture of Anthony Agbator"
              />
              <div className="flex flex-row">
                <IconList />
              </div>
            </div>
          </div>
          <div className=" w-8/12 sm:w-4/12">
            <Radar data={data} options={chartOptions} />
          </div>
        </div>
      </header>
      {/* <section className="flex flex-col sm:flex-row justify-between align-top items-start w-full py-5 px-5 sm:px-10">
        <div className="flex flex-col mt-20">
          <h1 className="flex flex-col text-gray-900 uppercase font-bold text-6xl md:text-7xl lg:text-8xl">
            <span>Agbator</span>
            <span>Anthony</span>
          </h1>
          <h4 className="text-gray-900 font-medium uppercase text-2xl md:text-2xl lg:text-4xl mt-5">
            Full-Stack Developer <br />& Product Designer.
          </h4>
        </div>
        <div className="lg:flex lg:pr-20 flex-col items-start text-black hero-bg hidden"></div>
      </section> */}

      {/* <div className="flex justify-between align-top items-start w-full lg:w-1/2 py-5 px-5 sm:px-10">
        <p className="text-gray-800">
          I’m a design-first Full-stack developer with strong focus on creating
          high quality user interface and product experience.
        </p>
      </div> */}
    </section>
  );
};
