import React, { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import { PricingI } from "@/constants/interfaces";
import PricingCardSkeleton from "./PricingCardSkeleton";

export default function PriceTable({ sport }: { sport: string }) {
  const [pricing, setPricing] = useState<PricingI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch(`/api/pricing/${sport}`);
        const data = await response.json();
        setPricing(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPricing();
  }, [sport]);

  return (
    <div className="flex justify-center !w-max mx-auto gap-10 my-10">
      {loading
        ? Array(1)
          .fill(null)
          .map((_, index) => (
            <PricingCardSkeleton key={index} />
          ))
        : pricing.map((pricingItem, index) => (
          <PricingCard key={pricingItem._id} PricingInformation={pricingItem} />
        ))}
    </div>
  );
}
