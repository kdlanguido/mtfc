"use client";
import React from "react";
import { atom, useAtom } from "jotai";
import GymComponentMain from "./GymComponentMain";

const selectedNavItemAtom = atom<string | null>("Gym");

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
          display: selectedNavItem === "Gym" ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {selectedNavItem === "Gym" && <GymComponentMain />}
      </div>
    </div>
  );
}

export default CenterNavBar;
