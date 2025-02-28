"use client";
import React, { useEffect, useState } from "react";
import PriceTable from "./PriceTable";

const pages = ["Gym", "Boxing", "Muay Thai", "Taekwondo"];

function ResponsiveAppBar() {
  const [activePage, setActivePage] = useState<string>("Gym");

  const handleCloseNavMenu = (page: string) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="bg-[#808080] h-20">
        <div className="max-w-screen-xl mx-auto h-full flex items-center">
          <div className="flex-grow flex justify-center h-full">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                className={`h-full ${activePage === page
                  ? "text-gray-700 bg-white"
                  : "text-white bg-transparent"
                  } flex items-center justify-center px-6 text-2xl font-extrabold rounded-none transition duration-300 hover:bg-opacity-10`}
              >
                {page === "Gym" ? page.toUpperCase() : page}
              </button>
            ))}
          </div>
        </div>
      </div>
      <PriceTable sport={activePage.toLowerCase()} />
    </>
  );
}

export default ResponsiveAppBar;
