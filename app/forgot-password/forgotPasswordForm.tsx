"use client";

import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import { Box, Button, Input, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { changePassword } from "@/services/User.service";
import { SaveForgotPasswordCode, SendForgotPasswordEmail } from "@/services/Email.service";
import { ForgotPasswordEmailTemplate } from "@/components/ForgotPasswordEmailTemplate";
import { EmailInfoI } from "@/constants/interfaces";
import { randomCode } from "@/constants/vercodes.storage";
import ForgotPasswordNewPassword from "@/components/ForgotPasswordNewPassword";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordMatch, setNewPasswordMatch] = useState("");

  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleChangeNewPasswordMatch = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordMatch(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTryAgain = async () => {
    console.log("test");
  };

  const handleChangeVerificationCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = async () => {
    try {

      const generatedRandomCode = randomCode()

      const emailInfo: EmailInfoI = {
        to: "alyastubigman@gmail.com",
        subject: "Forgot Password Email Notification",
        html: ReactDOMServer.renderToString(<ForgotPasswordEmailTemplate randomCode={generatedRandomCode} />)
      }

      const res1 = await SaveForgotPasswordCode(email, generatedRandomCode)

      if (!res1?.ok) {
        console.log("error")
      }
      else {
        // const res = await SendForgotPasswordEmail(emailInfo, generatedRandomCode)

        // if (res?.ok) {
        //   setStep(2);
        // }
      }


      setStep(2);

    } catch (error) {
      console.log("Error sending email")
    }
  };

  const handleVerifyCode = () => {
    setStep(3);
  };

  const handleConfirmChangePassword = async () => {
    try {

      const response = await changePassword(email, newPassword);

      if (response.status === 200) {

        router.push('/login');

      } else {

        console.log('Error changing password:', response.message);

      }
    } catch (error) {

      console.error('Error during password change:', error);

    }
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
        Enter your email address below, and we&apos;ll send you a link to reset your
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
        onClick={handleVerifyCode}
      >
        Verify Code
      </Button>

      <Typography level="body-sm" className="text-center text-stone-900">
        Didn&apos;t receive an email?{" "}
        <Link href="#">
          <span className="font-bold" onClick={handleTryAgain}>
            Try Again
          </span>
        </Link>{" "}
      </Typography>
    </Box>
  );

  return (
    <>

      {step === 1 && renderStep1()}

      {step === 2 && renderStep2()}

      {step === 3 &&
        <ForgotPasswordNewPassword
          newPassword={newPassword}
          newPasswordMatch={newPasswordMatch}
          handleChangeNewPassword={handleChangeNewPassword}
          handleChangeNewPasswordMatch={handleChangeNewPasswordMatch}
          handleConfirmChangePassword={handleConfirmChangePassword}
        />
      }
    </>
  );
};

export default ForgotPasswordForm;
