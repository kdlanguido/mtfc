import React from "react";
import PriceTable from "./PriceTable";

function MuayThaiPriceTable() {
  const fetchData = [
    {
      title: "Daily",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 300,
    },
    {
      title: "10 Sessions \n(good for 1 month)",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 2600,
    },
    {
      title: "Monthly",
      inclusions: "Access to gym equipment",
      inclusions2: "Use of locker room facilities",
      price: 3200,
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

export default MuayThaiPriceTable;
