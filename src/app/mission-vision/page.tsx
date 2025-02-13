import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <Box className="p-10 flex justify-center bg-black">
      <Image
        src={
          "https://res.cloudinary.com/dlobngrjy/image/upload/v1739479553/PLedge_4_pmrnrv.png"
        }
        height={768}
        alt=""
        width={768}
      />
    </Box>
  );
}
