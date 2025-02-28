import { Box, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";
import TermsOfUse from "./TermsOfUse";

function PaymentCreditCard({ isOpen }: any) {
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
          <Typography className="text-2xl font-bold justify-self-start mb-3">
            Set up your credit or debit card
          </Typography>
          <Box className="flex flex-row gap-3 mb-4">
            <Image
              src="/assets/visa.png"
              alt="payment"
              height={40}
              width={40}
            />
            <Image
              src="/assets/mastercard.png"
              alt="payment"
              height={40}
              width={40}
            />
          </Box>
          <Box className="flex flex-col gap-3 mb-4">
            <Box className="border-2 border-black bg-[#E8E8E8] flex flex-row text-center items-center py-2 pl-4 pr-3 gap-4">
              <Typography className="text-base font-semibold">
                Card Number
              </Typography>
              <Image
                src="/assets/creditcard.png"
                alt="payment"
                height={28}
                width={28}
                className="ml-auto"
              />
            </Box>
            <Box className="flex flex-row gap-4">
              <Box className="border-2 border-black bg-[#E8E8E8] flex flex-row items-center py-2 pl-4  gap-4 flex-1">
                <Typography className="text-start font-semibold flex-1">
                  Expiration Date
                </Typography>
              </Box>
              <Box className="border-2 border-black bg-[#E8E8E8] flex flex-row items-center py-2 pl-4 pr-3 gap-4 flex-1">
                <Typography className="text-start font-semibold flex-1">
                  CVV
                </Typography>
                <Image
                  src="/assets/questionmark.png"
                  alt="payment"
                  height={28}
                  width={28}
                  className="ml-auto"
                />
              </Box>
            </Box>
            <Box className="border-2 border-black bg-[#E8E8E8] flex flex-row text-center items-center py-2 pl-4 gap-4">
              <Typography className="text-base font-semibold">
                Name on Card
              </Typography>
            </Box>
          </Box>
          <Typography className="text-start mb-14">
            Your payments will be processed internationally. Additional bank
            fees may apply.
          </Typography>
          <TermsOfUse />
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentCreditCard;
