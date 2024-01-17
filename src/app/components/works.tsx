"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { IRating } from "./rating-bar";
import Link from "next/link";

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

export const Works = () => {
  return (
    <section className="pt-20 px-5 sm:px-10">
      <header className="w-full flex-1 col-12 sm:w-6/12 text-gray-900 uppercase mb-5 text-2xl md:text-2xl lg:text-4xl">
        <h5 className="text-black text-sm">Portfolio</h5>
        <h2 className="font-bold text-3xl">My Works</h2>
      </header>
      <section className="flex flex-col sm:flex-row w-full sm:py-5 sm:px-10 items-center">
        <div className="lg:flex lg:pr-20 flex-col items-start text-black sm:w-6/12 w-full">
          <h2 className="font-bold text-5xl underline underline-offset-2">
            <Link
              className="underline font-semibold text-gray-500"
              target="_blank"
              href="https://www.upassit.com"
            >
              uPassit
            </Link>
          </h2>
          <p className="text-gray-700 mt-3">
            uPassit is an edtech company with a revolutionary online learning
            platform dedicated to bridging the skills gap and fostering economic
            growth in Nigeria and beyond. uPassit stands as a beacon of change,
            offering a diverse array of courses tailored to meet the unique
            learning needs of both students and artisans. Our online platform
            aims to make education affordable, accessible, and flexible,
            ensuring learners can access quality content from any device with an
            internet connection.
          </p>
        </div>
        <div className="flex-col sm:w-6/12 w-full">
          <div className="h-[50vh] border border-gray-200 b-5 w-full bg-pink-100 bg-[url('/upassit.png')] bg-center bg-contain mt-5 sm:mt-0"></div>
        </div>
      </section>
    </section>
  );
};
