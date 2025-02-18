import React from "react";
import PriceTable from "./PriceTable";

function TaekwondoPriceTable() {
  const fetchData = [
    {
      title: "4 Sessions",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 2500,
    },
    {
      title: "8 Sessions",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 4000,
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center w-full mt-10">
        <div className="h-36 w-1/3 bg-gray-300 text-black text-center text-4xl font-extrabold font-inter pt-3">
          Saturday & Sunday <br /> Session <br /> 9:00AM
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-36">
        {fetchData.map((priceInfo, key) => (
          <PriceTable PriceInfo={priceInfo} key={key} />
        ))}
      </div>
    </div>
  );
}

export default TaekwondoPriceTable;
