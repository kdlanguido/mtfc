"use client";
import React from "react";
import { useAtom } from "jotai";
import GymComponentMain from "./GymComponentMain";
import { selectedNavItemAtom } from "@/stores/StoreItem.store";

function CenterNavBar() {

  const [selectedNavItem, setSelectedNavItem] = useAtom(selectedNavItemAtom);

  const handleNavItemClick = (item: string) => {
    setSelectedNavItem(item);
  };

  const navItems = ["Gym", "Boxing", "Muay Thai", "Taekwondo"];

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        margin: 0,
        zIndex: 100,
      }}
    >
      <nav
        style={{
          backgroundColor: "black",
          height: 117,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {navItems.map((item) => (
          <span
            key={item}
            onClick={() => handleNavItemClick(item)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedNavItem === item ? "white" : "transparent",
              color: selectedNavItem === item ? "black" : "white",
              height: "100%",
              paddingLeft: "25px",
              paddingRight: "25px",
              display: "flex",
              alignItems: "center",
              fontSize: "36px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            {item}
          </span>
        ))}
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GymComponentMain fetchTrainerFor={selectedNavItem} />
      </div>
    </div>
  );
}

export default CenterNavBar;
