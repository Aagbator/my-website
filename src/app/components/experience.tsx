"use client";
import Image from "next/image";
import { IRating, RatingBar } from "./rating-bar";

interface IExperience {
  date: string;
  company: string;
  companyLogoPath: string;
  role: string;
  description: string;
  skills: string[];
}

const experience: IExperience[] = [
  {
    date: "Today",
    company: "Shape Inc",
    companyLogoPath: "/profile-img.png",
    role: "software engineer",
    description:
      "I collaborate closely with design-centric teams to create websites and microsites for both companies and individuals.",
    skills: ["Html", "css", "Javascript", "Angular", "react"],
  },
  {
    date: "2022 - 2023",
    company: "The Linux Foundation",
    companyLogoPath: "/profile-img.png",
    role: "software engineer",
    description:
      "I collaborate closely with design-centric teams to create websites and microsites for both companies and individuals.",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Angular",
      "react js",
      "Html",
      "css",
      "Javascript",
      "Angular",
      "react js",
      "Html",
      "css",
      "Javascript",
      "Angular",
      "react js",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="px-5 sm:px-10 mt-5">
      {experience.map(
        ({ date, company, companyLogoPath, role, description, skills }, i) => (
          <section
            key={i}
            className="flex flex-col sm:flex-row justify-between align-top items-start w-full sm:py-3 pb-5 sm:px-10"
          >
            <div className="hidden sm:flex sm:flex-row items-center mt-5 sm:w-2/12 w-6/12">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <h5 className="text-gray-900 ml-2 font-semibold">2022 - Today</h5>
            </div>
            <div className="flex mt-5 sm:w-4/12 w-12/12">
              <div className="flex flex-row">
                <div>
                  <Image
                    className="rounded-full flex-1 w-full"
                    src={`${companyLogoPath}`}
                    width={60}
                    height={60}
                    alt={`${company}`}
                  />
                </div>
                <div className="text-gray-900 ml-2">
                  <div className="flex flex-row items-center sm:hidden">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-gray-900 text-sm ml-1">{date}</span>
                  </div>
                  <h2 className="text-gray-900 font-semibold capitalize">
                    {role}
                  </h2>
                  <h6 className="capitalize text-gray-500 ">{company}</h6>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2 sm:mt-5 sm:w-6/12 w-full">
              <p className="text-black pl-[70px] sm:pl-0">{description}</p>
              <div className="flex flex-wrap mt-2 pl-[70px] sm:pl-0">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 block font-medium text-purple-600 px-2 mr-1 mt-2 text-xs rounded-md capitalize"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )
      )}
    </section>
  );
};
