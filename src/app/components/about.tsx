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
import { IRating } from "./rating-bar";
import Link from "next/link";

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

export const About = () => {
  return (
    <section className="pt-20 px-5 sm:px-10">
      <section className="flex flex-col sm:flex-row w-full sm:py-5 sm:px-10">
        <div className="hidden sm:flex flex-col sm:w-6/12 w-full">
          <div className="relative">
            <div className="bg-orange-300 absolute w-full h-[500px] bottom-0 rounded-r-full top-0 -left-20"></div>
            <Image
              className="w-full z-1 absolute -left-20 top-14"
              src="/anthony-img.png"
              width={400}
              height={300}
              alt="Anthony Agbator"
            />
          </div>
        </div>
        <div className="lg:flex lg:pr-20 flex-col items-start text-black sm:w-6/12 w-full">
          <header className="w-full flex-1 col-12 sm:w-6/12 text-gray-900 uppercase mb-5 text-2xl md:text-2xl lg:text-4xl">
            <h5 className="text-black text-sm">Hobbies & Interest</h5>
            <h2 className="font-bold text-3xl">About Me</h2>
          </header>
          <p className="text-gray-700">
            I derive immense pleasure from engaging in a variety of hobbies,
            including chess, art, gaming, football, reading, indulging in
            culinary delights, and actively participating in charitable
            initiatives.
          </p>
          <p className="mt-5 text-gray-700">
            I derive immense pleasure from engaging in a variety of hobbies,
            including chess, art, gaming, football, reading, indulging in
            culinary delights.
          </p>
          <p className="mt-5 text-gray-700">
            In my leisure time, I read books, support my team Arsenal or play
            chess on{" "}
            <Link
              className="underline font-semibold"
              target="_blank"
              href="https://www.chess.com/member/tonjoe99"
            >
              chess.com
            </Link>
          </p>
          <div className="flex flex-row space-x-2 w-full mt-5">
            <div className="h-[150px] w-6/12 sm:w-3/12 bg-pink-100 bg-[url('/bg-1.jpeg')] bg-center bg-cover"></div>
            <div className="h-[150px] w-6/12 sm:w-3/12 bg-yellow-100 bg-[url('/bg-2.jpeg')] bg-center bg-cover"></div>
            <div className="h-[150px] w-6/12 sm:w-3/12 bg-blue-100 bg-[url('/bg-3.jpeg')] bg-center bg-cover"></div>
            <div className="h-[150px] w-6/12 sm:w-3/12 bg-blue-100 bg-[url('/bg-4.jpeg')] bg-center bg-cover"></div>
          </div>
        </div>
      </section>
    </section>
  );
};
