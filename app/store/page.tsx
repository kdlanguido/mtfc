import StoreBanner from "@/components/StoreBanner";
import StoreItems from "@/components/StoreItems";
import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "@/components/Header";
import ViewProductModal from "@/components/ViewProductModal";
import TopRatedItems from "@/components/TopRatedItems";

export default function page() {
  return (
    <Box>
      <StoreBanner src={"/assets/hero.png"} />
      <StoreItems />
      <StoreBanner src={"/assets/image 98.png"} />
      <Typography className="!mx-20" variant="h5">Top Rated Products</Typography>
      <TopRatedItems />
      <ViewProductModal />
    </Box>
  );
}
