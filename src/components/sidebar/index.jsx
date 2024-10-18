import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarItems } from "../../data";
import Logo from "../../../src/assets/icons/logo.svg";
// import { ReactComponent as Logo } from "../../../src/assets/icons/logo.svg";

export const Sidebar = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const activePanelIndex = sidebarItems.findIndex(
      (panelItem) => panelItem.url === location.pathname
    );
    setActiveIndex(activePanelIndex >= 0 ? activePanelIndex : 0);
  }, [location]);

  const activePanelStyle = (panelIndex) =>
    panelIndex === activeIndex
      ? "text-[#fff] bg-[#8476fe]"
      : "text-[#fff] bg-transparent";

  return (
    <>
      <div className="fixed min-h-screen h-full bg-[#484455] sm:w-[24%] lg:w-[20%] px-[0.5rem] 2xl:px-[1.2rem] font-inter">
        <img src={Logo} alt="Logo Icon" className="cursor-pointer mb-[2rem]" />
        <div className="flex flex-col gap-[1.3rem]">
          {sidebarItems.map((item, index) => (
            <NavLink to={item.url} key={index} className="">
              <div
                className={`flex items-center gap-[1.6rem] cursor-pointer p-[0.7rem] rounded-[0.2rem] ${activePanelStyle(
                  index
                )}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.icon}
                  alt="Menu List Icon"
                  className="size-[1.3rem] 2xl:size-[2rem]"
                />
                <span className="text-[#fff] text-[0.875rem] 2xl:text-[1.5rem]">
                  {item.text}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main className="w-[calc(100% - 20%)] bg-[#393545] pl-[1.5rem] pr-[3rem] ml-0 sm:ml-[24%] lg:ml-[20%]">
        {children}
      </main>
    </>
  );
};
