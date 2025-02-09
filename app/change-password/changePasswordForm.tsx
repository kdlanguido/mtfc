"use client";

import React, { useState } from "react";
import { Box, Button, Input, Link, Select, Typography, Option } from "@mui/joy";
import { SignUpFormI } from "@/constants/interfaces";
import { FaEnvelopeOpenText, FaLock } from "react-icons/fa6";
import Image from "next/image";

export default function ChangePasswordForm() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("Kdlanguido@gmail.com");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [signUpInput, setSignUpInput] = useState<SignUpFormI>({
    firstName: "",
    lastName: "",
    gender: "",
    fitnessGoal: "",
    email: "",
    password: "",
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangeVerificationCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = () => {
    setStep(1);
  };

  const renderStep1 = () => (
    <Box className="w-full flex flex-col items-center bg-white p-10">
      <Image src={"/assets/sent.png"} width={40} height={40} alt={""} />
      <Typography className="!my-2 !text-center text-stone-900" level="h4">
        Enter your email address
      </Typography>

      <Typography
        className="!mb-3 !text-center text-stone-900 font-light"
        level="body-xs"
      >
        Enter your email address below, and we’ll send you a link to reset your
        password. Make sure to check your inbox (and spam folder) for the email.
      </Typography>

      <Input
        placeholder="Enter email address"
        className="p-3 my-2 text-center w-full"
        value={email}
        onChange={handleChangeEmail}
      />

      <Button
        variant="soft"
        color="neutral"
        className="!text-stone-900 w-full mt-2 mb-3"
        onClick={handleSendCode}
      >
        Send Code
      </Button>
    </Box>
  );

  const renderStep2 = () => (
    <Box className="w-full flex flex-col items-center bg-white p-10">
      <Image src={"/assets/lock.png"} width={40} height={40} alt={""} />
      <Typography className="!my-2 !text-center text-stone-900" level="h4">
        Enter the Verification Code
      </Typography>

      <Typography
        className="!mb-1 !text-center text-stone-900 font-light"
        level="body-xs"
      >
        We sent a verification code to <b className="font-bold">{email}</b>.
        Please check your inbox and enter the code below.
      </Typography>

      <Input
        placeholder="Enter 4-Digits code"
        className="p-3 my-1 text-center w-full"
        value={verificationCode}
        onChange={handleChangeVerificationCode}
      />

      <Button
        variant="soft"
        color="neutral"
        className="!text-stone-900 w-full mt-2 mb-3"
        onClick={() => console.log(verificationCode)}
      >
        Verify Code
      </Button>

      <Typography level="body-sm" className="text-center text-stone-900">
        Didn't received an email?{" "}
        <Link href="/login" className="!font-semibold text-stone-900">
          {" "}
          Try Again
        </Link>
      </Typography>
    </Box>
  );

  return (
    <>
      {step === 0 && renderStep1()}
      {step === 1 && renderStep2()}
    </>
  );
}
