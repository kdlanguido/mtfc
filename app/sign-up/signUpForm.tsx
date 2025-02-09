"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Link,
  Select,
  Typography,
  Option,
  Skeleton,
} from "@mui/joy";
import { SignUpFormI } from "@/constants/interfaces";

export default function SignUpForm() {
  const [signUpInput, setSignUpInput] = useState<SignUpFormI>({
    firstName: "",
    lastName: "",
    gender: "",
    fitnessGoal: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handleConfirmPassword = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
    if (signUpInput.password && signUpInput.password !== confirmPassword) {
      console.log("Passwords do not match");
    } else if (signUpInput.password === confirmPassword) {
      console.log("Passwords match!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInput({
      ...signUpInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="w-full">
      <Typography className="!mb-1 !text-center text-stone-50" level="h3">
        Sign Up now!
      </Typography>

      <Typography className="!mb-3 !text-center text-stone-50" level="body-sm">
        Unlock Your Potential: Join Us Today!
      </Typography>

      <Input
        name="firstName"
        placeholder="First Name"
        className="p-3 mb-2"
        value={signUpInput.firstName}
        onChange={handleInputChange}
      />
      <Input
        name="lastName"
        placeholder="Last Name"
        className="p-3 mb-2"
        value={signUpInput.lastName}
        onChange={handleInputChange}
      />

      <Select
        placeholder="Gender"
        className="!p-3 mb-2"
        value={signUpInput.gender}
        onChange={(event, newVal) => {
          setSignUpInput((prev) => ({
            ...prev,
            gender: newVal,
          }));
        }}
      >
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </Select>

      <Select
        placeholder="Fitness Goal"
        className="!p-3 mb-2"
        value={signUpInput.fitnessGoal}
        onChange={(event, newVal) => {
          setSignUpInput((prev) => ({
            ...prev,
            fitnessGoal: newVal,
          }));
        }}
      >
        <Option value="Item 1">Item 1</Option>
        <Option value="Item 2">Item 2</Option>
      </Select>

      <Input
        name="email"
        placeholder="Email Address"
        className="p-3 mb-2"
        value={signUpInput.email}
        onChange={handleInputChange}
      />

      <Input
        name="password"
        placeholder="Password"
        className="p-3 mb-2"
        type="password"
        value={signUpInput.password}
        onChange={handleInputChange}
      />

      <Input
        placeholder="Confirm Password"
        className="p-3 mb-2"
        type="password"
        value={confirmPassword}
        onChange={(e) => handleConfirmPassword(e.target.value)}
      />

      <Button
        variant="soft"
        color="neutral"
        className="!text-stone-900 w-full mt-3 mb-3"
        onClick={() => console.log(signUpInput)}
      >
        Sign Up
      </Button>

      <Typography level="body-sm" className="text-center text-stone-50">
        Already have an account?{" "}
        <Link href="/login" className="!font-semibold text-stone-50">
          {" "}
          Log in
        </Link>
      </Typography>
    </Box>
  );
}
