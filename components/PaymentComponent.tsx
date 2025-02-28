import { Box } from "@mui/joy";
import Image from "next/image";
import React from "react";
import PaymentCard from "./PaymentCard";

function PaymentComponent() {
  return (
    <Box className="relative w-full h-screen top-0">
      <Image
        src="/assets/paymentbg.png"
        alt="payment"
        layout="fill"
        objectFit="cover"
      />
      <PaymentCard />
    </Box>
  );
}

export default PaymentComponent;
