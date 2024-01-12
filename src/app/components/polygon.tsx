"use client";

type IPolygon = {
  top?: number;
  left?: number;
  rotate?: number;
  isMobile?: boolean;
  color?: string;
};

export const Polygon = ({
  top = 16,
  left = 10,
  rotate = 0,
  isMobile = false,
  color = "#9B51E0",
}: IPolygon) => {
  return (
    <section
      className={`absolute  ${
        isMobile ? "sm:block" : "hidden"
      } rotate-${rotate} `}
      style={{
        left: left + "rem",
        top: top + "rem",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg
        width="66"
        height="73"
        viewBox="0 0 66 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.0062 69.5505L4.09522 3.21492L62.588 34.5735L2.0062 69.5505Z"
          stroke={color}
          stroke-opacity="0.2"
          stroke-width="3"
        />
      </svg>
    </section>
  );
};
