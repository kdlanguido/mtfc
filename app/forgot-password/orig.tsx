import React from "react";
import ForgotPasswordForm from "./forgotPasswordForm";
import { Box } from "@mui/joy";
import COLORS from "@/constants/colors";
import Image from "next/image";

export default function page() {
  return (
    <Box
      className="h-screen w-screen flex"
      sx={{ background: COLORS.bg_dark_brown }}
    >
      <Box className="w-1/3 pt-10 px-10">
        <ForgotPasswordForm />
      </Box>

      <Box className="w-2/3">
        <Image
          className="object-cover w-auto h-full"
          alt=""
          src="/assets/signup.webp"
          width={1920}
          height={1080}
        />
      </Box>
    </Box>
  );
}
