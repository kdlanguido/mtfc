import { Box, Typography } from "@mui/joy";
import React from "react";
import Cart from "./Cart";

function PromoPage() {
  return (
    <Box className="w-full h-screen bg-white">
      <Box
        className="flex justify-center items-center bg-[#E0EFE7]"
        sx={{ height: "47px" }}
      >
        <Typography level="h1">Promo Page</Typography>
      </Box>
      <Box>
        <Cart />
      </Box>
    </Box>
  );
}

export default PromoPage;
