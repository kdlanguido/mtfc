import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HomeCommunityDashboard() {
  return (
    <Box className="flex flex-col bg-[#fff] ">
      <Typography className="text-center mt-10 !text-[#FA5455] text-xl">
        COMMUNITY DASHBOARD
      </Typography>

      <Box className="flex flex-row justify-center">
        <Image
          className="object-cover"
          src="/assets/comdash1.png"
          alt=""
          height="300"
          width="600"
        />
        <Image
          className="object-cover"
          src="/assets/comdash2.png"
          alt=""
          height="300"
          width="600"
        />
      </Box>
    </Box>
  );
}
