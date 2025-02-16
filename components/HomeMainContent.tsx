"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import NavImage from "./NavImage";
import HomeCommunityDashboard from "./HomeCommunityDashboard";

export default function HomeMainContent() {
  return (
    <Box className="h-screen bg-[#2F2D2D]">
      <Box
        className="flex !gap-x-[120] justify-center relative border"
        sx={{ marginTop: "-40px" }}
      >
        <NavImage />
        <NavImage />
        <NavImage />
      </Box>

      <HomeCommunityDashboard />
    </Box>
  );
}
