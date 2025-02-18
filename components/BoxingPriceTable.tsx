import React from "react";
import PriceTable from "./PriceTable";

function BoxingPriceTable() {
  const fetchData = [
    {
      title: "Daily",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 100,
    },
    {
      title: "10 Sessions\n(good for 1 month)",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 2500,
    },
    {
      title: "Monthly",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 3000,
    },
  ];
  return (
    <div className="flex flex-row justify-around" style={{ marginTop: 184 }}>
      {fetchData.map((priceInfo, key) => (
        <PriceTable PriceInfo={priceInfo} key={key} />
      ))}
    </div>
  );
}

export default BoxingPriceTable;
