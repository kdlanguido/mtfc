import StoreBanner from "@/components/StoreBanner";
import StoreItems from "@/components/StoreItems";
import { Box } from "@mui/material";
import React from "react";
import Header from "@/components/Header";
import ViewProductModal from "@/components/ViewProductModal";

export default function page() {
  return (
    <Box>
      <Header />
      <StoreBanner />
      <StoreItems />
      <ViewProductModal />
    </Box>
  );
}
