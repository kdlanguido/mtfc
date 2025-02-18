import React from "react";
import CenterNavBarPricing from "./CenterNavBarPricing";

function FitnessTable() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/gym2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="flex items-center justify-center text-center"
        style={{
          height: 217,
          fontFamily: "InterBold",
          fontSize: 40,
          color: "#ffffff",
        }}
      >
        Fitness Pricing Table
      </div>
      <CenterNavBarPricing />
    </div>
  );
}

export default FitnessTable;
