import { Box, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";
import TermsOfUse from "./TermsOfUse";

function SetUpGcash({ isOpen, onClose }: any) {
  if (!isOpen) return null;
  return (
    <Box className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <Image
        src="/assets/paymentbg.png"
        alt="payment"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10"
      />
      <Box className=" flex h-screen items-center justify-center w-full ">
        <Box className="bg-[#FAFAF9] h-[759px] w-[626px] p-16 ">
          <Box className="mb-10">
            <Typography className="text-2xl font-bold justify-self-start mb-3">
              Set up your credit or debit card
            </Typography>
            <Image
              src="/assets/gcash.png"
              alt="payment"
              height={40}
              width={40}
            />
          </Box>
          <Box className="border-2 border-black bg-[#E8E8E8] flex flex-row justify-self-start w-full py-3 pl-4 gap-4 mb-16">
            <Image
              src="/assets/phflag.png"
              height={40}
              width={25}
              alt="MasterCard"
            />
            <Typography className="text-base font-bold">
              +63 Mobile Number
            </Typography>
          </Box>
          <TermsOfUse />
        </Box>
      </Box>
    </Box>
  );
}

export default SetUpGcash;
