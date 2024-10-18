import React from "react";
import { cardContent } from "../../data";
import { CardComponent } from "./_component/CardComponent";
import { BarChart } from "../chart";
import { CustomCarousel } from "../carousel";

export const Home = () => {
  return (
    <>
      <section className="bg-[#393545] font-inter h-screen w-full">
        <h1 className="text-[1.375rem] text-[#fff] pt-[2rem] pb-[1.3rem]">
          Welcome! here’s your summary
        </h1>
        <section className="grid grid-cols-4 gap-[1.5rem]">
          {cardContent.map((card, index) => (
            <CardComponent key={index} cardInfo={card} />
          ))}
        </section>
        <section className="mt-[2rem] font-inter">
          <h3 className="text-[#fff] mb-2">Event Registrations per month</h3>
          <div className="grid grid-cols-2 gap-4 h-[15rem]">
            <div className="w-full">
              <BarChart />
            </div>
            <div className="w-full h-full">
              <CustomCarousel />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
