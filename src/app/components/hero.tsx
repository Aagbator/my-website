"use client";
import backgroundImage from "../../../public/hero-bg.jpeg";
import { Polygon } from "./polygon";

export const Hero = () => {
  return (
    <section className="relative">
      <section className="flex flex-col sm:flex-row justify-between align-top items-start w-full py-5 px-10 sm:px-20">
        <div className="flex flex-col mt-20">
          <h1 className="flex flex-col text-gray-900 uppercase font-bold text-7xl lg:text-8xl">
            <span>Agbator</span>
            <span>Anthony</span>
          </h1>
          <h4 className="text-gray-900 uppercase text-2xl sm:text-4xl mt-5">
            Full-Stack Developer <br />& Product Designer.
          </h4>
        </div>
        <div className="lg:flex flex-col items-start text-black hero-bg hidden">
          <svg
            width="100%"
            height="534"
            viewBox="0 0 578 534"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pattern"
                patternUnits="objectBoundingBox"
                width="100%"
                height="100%"
              >
                <image
                  href={backgroundImage.src}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              d="M156.27 28.1877C-84.9229 123.621 3.31798 328.453 89.5986 406.954C411.19 691.126 609.244 438.354 573.947 234.252C543.226 117.809 409.23 -71.9009 156.27 28.1877Z"
              fill="#FF0066"
              vector-effect="non-scaling-stroke"
              stroke-width="0.5"
            />
          </svg>
        </div>
      </section>

      <div className="flex justify-between align-top items-start w-full lg:w-1/2 py-5 px-10 sm:px-20">
        <p className="text-gray-800">
          I’m a design-first Full-stack Developer with strong focus on creating
          high quality user interface and product experience.
        </p>
      </div>

      <Polygon isMobile={true} top={5} left={2} rotate={0} />
      <Polygon isMobile={false} top={14} left={38} rotate={70} />
      <Polygon color="#ff0000" isMobile={true} top={18} left={25} rotate={70} />
    </section>
  );
};
