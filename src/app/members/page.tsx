"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import MemberCard from "@/components/MemberCard";
import Typography from "@mui/material/Typography";
import { PullerInfoI } from "@/types/PullerInfoI";

export default function BasicGrid() {
  const pullers: PullerInfoI[] = [
    {
      name: "Dranreb",
      fullName: "King Dranreb Languido",
      club: "Titan Arms Taguig",
      technique: "High Hook",
      weight: "75kg",
    },
    {
      name: "Jay",
      fullName: "Jay Aubrey Languido",
      club: "Titan Arms Taguig",
      technique: "High Hook",
      weight: "65kg",
    },
    {
      name: "Karlo",
      fullName: "Karlo Gevero",
      club: "Batasan Pullers",
      technique: "Hook",
      weight: "65kg",
    },
    {
      name: "Joshua",
      fullName: "Joshua Glomo",
      club: "VSK Caloocan Pullers",
      technique: "Hook",
      weight: "65kg",
    },
    {
      name: "Kap Calvin",
      fullName: "Calvin Kier Santos",
      club: "Manila Pullers",
      technique: "Hook",
      weight: "65kg",
    },
    {
      name: "Big Boy",
      fullName: "Vinz Roi Chiong",
      club: "Marikina Pullers",
      technique: "Toproll",
      weight: "85kg",
    },
    {
      name: "Earl",
      fullName: "Earl Dela Cruz",
      club: "Paniqui Pullers",
      technique: "Hook",
      weight: "65kg",
    },
  ];

  return (
    <Box className="p-10">
      <Typography
        className="text-center"
        variant="h4"
        color="initial"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
        }}
      >
        Delta Xi Upsilon Members
      </Typography>

      <Grid
        className="mt-10 flex justify-center flex-wrap"
        container
        spacing={2}
      >
        {pullers.map((puller: PullerInfoI) => (
          <Grid
            className="border justify-center flex !w-max"
            key={puller.name}
            size={{ xs: 12, md: 3, lg: 4 }}
          >
            <MemberCard PullerInfo={puller} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
