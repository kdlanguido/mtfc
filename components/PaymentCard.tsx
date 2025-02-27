"use client";
import { Box, Typography } from "@mui/joy";
import Image from "next/image";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PaymentCreditCard from "./PaymentCreditCard";
import SetUpGcash from "./SetUpGcash";
import {
  cardModalAtom,
  gcashModalAtom,
  termsModalAtom,
} from "@/stores/StoreItem.store";
import { useAtom } from "jotai";
function PaymentCard() {
  const [isCardModalOpen, setCardModalOpen] = useAtom(cardModalAtom);
  const [isGcashModalOpen, setGcashModalOpen] = useAtom(gcashModalAtom);
  const [, setTermsModalOpen] = useAtom(termsModalAtom);
  const handleOpenModal = (setModalOpen: (value: boolean) => void) => {
    setModalOpen(true);
    setTermsModalOpen(true);
  };
  return (
    <Box className="relative w-full h-screen top-0 ">
      <Box className=" flex h-screen items-center justify-center w-full ">
        <Box className="bg-[#FAFAF9] h-[759px] w-[626px]">
          <Image
            src="/assets/lock2.png"
            height={88}
            width={88}
            alt="Lock"
            className="flex justify-self-center pt-16"
          />
          <Box className="flex justify-center text-center flex-col pt-5 gap-5">
            <Typography className="text-2xl font-bold">
              Choose how to pay
            </Typography>
            <Typography className="font-medium">
              Your payment is encrypted and you can change <br /> how you pay
              anytime.
            </Typography>
            <Typography>Secure for peace of mind.</Typography>
          </Box>
          <Box className="flex justify-center text-center flex-col pt-5 gap-5">
            <Box className="border-[3px] border-black mx-7 flex flex-row text-center items-center py-2 pl-4 gap-4">
              <Typography className="text-base font-bold">
                Credit or Debit Card
              </Typography>
              <Image src="/assets/visa.png" height={40} width={25} alt="Lock" />
              <Image
                src="/assets/mastercard.png"
                height={40}
                width={25}
                alt="MasterCard"
              />
              <ChevronRightIcon
                fontSize="large"
                className="ml-auto"
                onClick={() => handleOpenModal(setCardModalOpen)}
              />
              <PaymentCreditCard
                isOpen={isCardModalOpen}
                onClose={() => setCardModalOpen(false)}
              />
            </Box>
            <Box className="border-[3px] border-black mx-7 flex flex-row items-center py-2 pl-4 gap-4">
              <Typography className="text-base font-bold">
                Digital Wallet
              </Typography>
              <Image
                src="/assets/gcash.png"
                height={57}
                width={36}
                alt="Gcash"
              />
              <ChevronRightIcon
                fontSize="large"
                className="ml-auto"
                onClick={() => handleOpenModal(setGcashModalOpen)}
              />
              <SetUpGcash
                isOpen={isGcashModalOpen}
                onClose={() => setGcashModalOpen(false)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentCard;
