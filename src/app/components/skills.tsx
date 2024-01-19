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
import { IRating, RatingBar } from "./rating-bar";

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

const ratings: IRating[] = [
  { title: "html", percent: 90 },
  { title: "css / Scss", percent: 80 },
  { title: "javascript", percent: 90 },
  { title: "typescript", percent: 80 },
  { title: "angular", percent: 80 },
  { title: "react js", percent: 85 },
  { title: "react native", percent: 70 },
  { title: "node js", percent: 70 },
  { title: "Jest/RTL", percent: 80 },
  { title: "GRAPHQL", percent: 60 },
  { title: "UI/UX", percent: 70 },
];

export const Skills = () => {
  return (
    <section className="pt-20 px-5 sm:px-10">
      <header className="flex flex-col sm:flex-row justify-between items-center w-full">
        <div className="w-full flex-1 col-12 sm:w-6/12 text-gray-900 uppercase  text-2xl">
          <h5 className="text-black text-sm">Skills & Expertise</h5>
          <h2 className="font-bold text-3xl">Experience</h2>
        </div>
        <div className="flex sm:space-between w-full items-center">
          <div className="sm:pl-40 w-4/12 sm:w-6/12">
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
          <div className=" w-8/12 sm:w-6/12">
            <Radar data={data} options={chartOptions} />
          </div>
        </div>
      </header>
      <section className="flex flex-col sm:flex-row justify-between align-top items-start w-full sm:py-5 sm:px-10">
        <div className="flex flex-col mt-5 sm:w-6/12 w-full">
          {ratings.map(({ title, percent }, i) => (
            <RatingBar key={i} title={title} percent={percent} />
          ))}
        </div>
        <div className="lg:flex lg:pr-20 flex-col items-start text-black sm:w-5/12 ">
          <h2 className="font-bold text-2xl mt-10 sm:mt-0 md:text-3xl lg:text-4xl mb-5">
            A blend of <span className="gradient-text">Design</span> and{" "}
            <span className="gradient-text">Engineering</span>.
          </h2>
          <p className="text-gray-700">
            Leveraging my design background, I collaborate closely with
            design-centric teams to create websites and microsites for both
            companies and individuals. Over the years, I have gained extensive
            experience working collaboratively within product teams.
          </p>
          <p className="mt-5 text-gray-700">
            Drawing on my expertise in UI and product engineering, I address
            product-related challenges and construct visually appealing,
            user-friendly web experiences.
          </p>
        </div>
      </section>
    </section>
  );
};
