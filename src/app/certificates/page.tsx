"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import EventCard from "@/components/EventCard";
import Typography from "@mui/material/Typography";

export default function BasicGrid() {
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
        Select Event
      </Typography>

      <Grid className="mt-10" container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <EventCard />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}></Grid>
      </Grid>
    </Box>
  );
}
