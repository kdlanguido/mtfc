"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/joy";
import LoginForm from "./loginForm";

export default function page() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/assets/login.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-screen h-screen bg-cover bg-center !backdrop-blur-xl"
    >
      <Box className="h-screen w-screen flex">
        <Box className="w-1/3 px-10 pt-20 bg-zinc-200 bg-opacity-70">
          <LoginForm />
        </Box>

        <Box className="w-2/3 borde bg-opacity-70"></Box>
      </Box>
    </Box>
  );
}
