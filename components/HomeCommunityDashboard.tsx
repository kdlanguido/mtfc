import { Button } from "@mui/joy";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BiBadge } from "react-icons/bi";

export default function HomeCommunityDashboard() {
  return (
    <Box className="flex flex-col bg-[#2F2D2D]">
      <Typography className="text-center mt-10 !text-[#FA5455] text-xl mb-10">
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
        <Box className="flex flex-col justify-center items-center bg-[#2F2D2D]">
          <Image
            className="object-cover"
            src="/assets/comdash2.png"
            alt=""
            height="300"
            width="600"
          />
          <Button
            className="uppercase"
            sx={{
              borderRadius: 0,
              height: 55,
              width: 265,
              backgroundColor: "#1689DF",
              color: "#fff",
              fontFamily: "Bebas Neue",
              fontSize: 15,
              fontWeight: "regular",
            }}
          >
            Join the community now!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
