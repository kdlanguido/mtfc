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
} from "@mui/joy";
import { SignUpFormI } from "@/constants/interfaces";
import { useRouter } from "next/navigation";

export default function SignUpForm() {

  const router = useRouter();

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

  const submitSignUp = async () => {
    const userData = {
      email: signUpInput.email,
      password: signUpInput.password,
      fullName: signUpInput.firstName + " " + signUpInput.lastName,
      gender: signUpInput.gender,
      fitnessGoal: signUpInput.fitnessGoal
    };

    try {
      const response = await fetch('/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Sign-up Successful')
        router.push('/login')
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };


  return (
    <Box className="w-full">
      <Typography className="!mb-1 !text-center text-stone-50" level="h3" sx={{ color: "white" }}>
        Sign Up now!
      </Typography>

      <Typography className="!mb-3 !text-center text-stone-50" level="body-sm" sx={{ color: "white" }}>
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
        <Option value="lose-weight">Lose Weight</Option>
        <Option value="build-muscle">Build Muscle</Option>
        <Option value="maintain">Maintain</Option>
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
        onClick={submitSignUp}
      >
        Sign Up
      </Button>

      <Typography level="body-sm" className="text-center text-stone-50" sx={{ color: "white", pt: 3, }}>
        Already have an account?{" "}
        <Link href="/login" className="!font-semibold text-stone-50">
          {" "}
          Log in
        </Link>
      </Typography>
    </Box>
  );
}
