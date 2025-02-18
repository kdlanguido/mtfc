import React from "react";
import PriceTable from "./PriceTable";

function GymPriceTable() {
  const fetchData = [
    {
      title: "Daily",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 100,
    },
    {
      title: "Daily",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 1000,
    },
  ];
  return (
    <div
      className="flex flex-row justify-center space-x-36"
      style={{ marginTop: 184 }}
    >
      {fetchData.map((priceInfo, key) => (
        <PriceTable PriceInfo={priceInfo} key={key} />
      ))}
    </div>
  );
}

export default GymPriceTable;
