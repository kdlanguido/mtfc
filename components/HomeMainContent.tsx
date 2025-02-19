"use client";

import { Box } from "@mui/material";
import React from "react";
import NavImage from "./NavImage";
import HomeCommunityDashboard from "./HomeCommunityDashboard";
import HomeAboutUs from "./HomeAboutUs";
import HomeItemList from "./HomeItemList";

export default function HomeMainContent() {
  return (
    <Box className=" bg-[#2F2D2D]">
      <Box
        className="flex !gap-x-[120] justify-center relative mb-20"
        sx={{ marginTop: "-40px" }}
      >
        <NavImage />
        <NavImage />
        <NavImage />
      </Box>

      <HomeCommunityDashboard />
      <HomeAboutUs />
      <HomeItemList />
    </Box>
  );
}
