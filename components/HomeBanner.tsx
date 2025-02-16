import React from "react";
import { Box } from "@mui/joy";
import { Typography } from "@mui/material";

export default function HomeBanner() {
  return (
    <Box
      className="relative bg-cover bg-center h-[60vh] flex justify-center items-center"
      sx={{ backgroundImage: "url('/assets/hero.webp')" }}
    >
      <Box className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)]" />
      <Box className="flex flex-col">
        <Typography className="relative text-white font-bold z-1" variant="h2">
          Manila Total Fitness Center:
        </Typography>
        <Typography
          className="relative text-white !font-extralight z-1 !text-[30px]"
          variant="body1"
        >
          Your Fitness Journey Starts Here
        </Typography>

        <Typography
          className="mt-5 relative text-white !font-normal z-1 !text-[19px] !text-[#FFF8DC] leading-tight"
          variant="body1"
        >
          Achieve your fitness goals with personalized plans,
          <br />
          real-time availability updates,
          <br />
          and a supportive community.
        </Typography>
      </Box>
    </Box>
  );
}
