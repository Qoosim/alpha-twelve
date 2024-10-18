import React from "react";

export const CardComponent = ({ cardInfo }) => {
  return (
    <article className="bg-[#494555] font-inter p-4 flex flex-col gap-[0.1rem]">
      <div className="flex items-center gap-[0.5rem]">
        <h3 className="text-[#fff] text-[1rem] font-semibold">
          {cardInfo.text}
        </h3>
        <img
          src={cardInfo.infoIcon}
          alt="Information icon"
          className="size-[1.2rem]"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[#fff] text-[1.25rem] font-semibold">
          {cardInfo.value}
        </span>
        <div className="flex items-center gap-1">
          <img src={cardInfo.statusIcon} alt="" className="size-[0.8rem]" />
          <span
            className={`${
              cardInfo.color === "green" ? "text-[#10b981]" : "text-[#f43f5e]"
            } text-[0.9rem]`}
          >
            {cardInfo.percentage}
          </span>
        </div>
      </div>
    </article>
  );
};
