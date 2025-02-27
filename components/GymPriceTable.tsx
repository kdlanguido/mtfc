import React, { useEffect, useState } from "react";
import PriceTable from "./PriceTable";

function GymPriceTable() {

  const [pricing, setPricing] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {

    const fetchPricing = async () => {
      try {
        const response = await fetch("/api/pricing/Boxing");
        const data = await response.json();
        setPricing(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPricing()

  }, []);


  return (
    <div className="flex flex-row justify-center space-x-36 mt-[80px]">
      {pricing?.map((priceInfo, key) => (
        <PriceTable PriceInfo={priceInfo} key={key} />
      ))}
    </div>
  );
}

export default GymPriceTable;
