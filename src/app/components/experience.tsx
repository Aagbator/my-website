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
    companyLogoPath: "/logo/shapeconstruction_logo.jpeg",
    role: "Senior software engineer",
    description:
      "I collaborate closely with design-centric teams to create websites and microsites for both companies and individuals.",
    skills: [
      "Html",
      "css",
      "Tailwind",
      "Javascript",
      "Typescript",
      "React",
      "Jest",
    ],
  },
  {
    date: "2022 - 2023",
    company: "Bread Financial",
    companyLogoPath: "/logo/bread_financial_logo.jpeg",
    role: "Full-stack developer",
    description:
      "I work in an agile environment with a team which consist of Engineers, Product Design, Devops and QA to maintain our financial application.",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Typescript",
      "Angular",
      "Node js",
      "Jest",
      "React Testing Library",
      "GraphQL",
      "Docker",
    ],
  },
  {
    date: "2021 - 2022",
    company: "The Linux Foundation",
    companyLogoPath: "/logo/the_linux_foundation_logo.jpeg",
    role: "software engineer",
    description:
      "I worked with the security team to fix bugs on the existing platform. I also increased the pace for resolving issues by 30% and improved the legacy code base while upgrading the platform to the latest version of Angular.",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Typescript",
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
  {
    date: "2021 - 2021",
    company: "Amygdalab",
    companyLogoPath: "/logo/amygdalab_ltd_logo.jpeg",
    role: "Senior Frontend Developer",
    description:
      "I improved the internal applications interfaces, responsiveness, aesthetics and performance. I worked on projects including a crypto currency exchange platform and worked across 3 teams and report to my CTO daily. I also designed mockups for mobile and web applications.",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Typescript",
      "Angular",
      "Crypto",
      "Ruby",
      "Node js",
      "GraphQL",
      "Docker",
    ],
  },
  {
    date: "2020 - 2021",
    company: "Amygdalab",
    companyLogoPath: "/logo/braven.jpeg",
    role: "Senior Frontend Developer",
    description:
      "I improved accessibility of our learning platform for users with disabilities by following WCAG 2.0 guideline to ensure a minimum compliance level A & AA. I also managed the process to getting our VPAT approved.",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Typescript",
      "React JS",
      "jQuery",
      "Canvas LMS",
      "Ruby",
      "Node js",
      "GraphQL",
      "Docker",
    ],
  },
  {
    date: "2019 - 2020",
    company: "Andela",
    companyLogoPath: "/logo/andela_logo.jpeg",
    role: "Senior Software Engineer",
    description: "Provided code reviews and mentorship to young developers",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Typescript",
      "React JS",
      "jQuery",
      "Canvas LMS",
      "Ruby",
      "Node js",
      "GraphQL",
      "Docker",
    ],
  },
  {
    date: "2015 - 2019",
    company: "Swifta Systems",
    companyLogoPath: "/logo/swifta.jpeg",
    role: "Design Lead",
    description:
      "Organised the design sprints process as a sprint master. Lead a team of frontend and UI/UX designers to develop our core product with over 100,000 customers and Agents. Boosted User experience across client's products. Prototyped about 6 web applications and mobile applications yearly. Optimised and upgraded existing applications",
    skills: [
      "Html",
      "css",
      "Javascript",
      "Typescript",
      "React JS",
      "Angular",
      "Canvas",
      "Styled components",
      "Node js",
      "GraphQL",
      "Docker",
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
            className="flex flex-col md:flex-row justify-between align-top items-start w-full sm:py-3 pb-5 sm:px-10"
          >
            <div className="hidden md:flex md:flex-row items-center mt-5 md:w-2/12 w-6/12">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <h5 className="text-gray-900 ml-2 font-semibold">{date}</h5>
            </div>
            <div className="flex mt-5 md:w-4/12 w-12/12">
              <div className="flex flex-row">
                <div>
                  <Image
                    className="rounded-full flex-1 w-full border-2 p-1 border-gray-100"
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
            <div className="flex flex-col mt-2 md:mt-5 md:w-6/12 w-full">
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
