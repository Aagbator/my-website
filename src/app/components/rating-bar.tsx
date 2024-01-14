"use client";

export type IRating = {
  title: string;
  percent: number;
};

export const RatingBar = ({ percent, title }: IRating) => {
  // Use the percent value directly without extra square brackets
  if (percent < 0 || percent > 100) return;

  return (
    <div className="flex flex-row items-center sm:px-5 py-2">
      <span className="text-right w-3/12 text-gray-900 font-semibold mr-3 uppercase text-xs sm:text-sm">
        {title}
      </span>
      <div className="w-9/12 relative h-1 bg-slate-200 w-full rounded-full">
        <div
          style={{ width: percent + "%" }}
          className="absolute bg-gradient-to-r from-pink-500 to-purple-600 h-1 rounded-full"
        ></div>
      </div>
    </div>
  );
};
