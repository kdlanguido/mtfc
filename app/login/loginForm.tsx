import { IsUserAuthenticated, UserInformation } from "@/stores/UserInfo.store";
import { Box, Typography, Input, Button, Link } from "@mui/joy";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter()
  const [, setUser] = useAtom(UserInformation);
  const [, setIsUserAuthenticated] = useAtom(IsUserAuthenticated);
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInput),
      });

      const data = await response.json();

      if (response.status === 200) {

        setUser(data.user)
        setIsUserAuthenticated(true)
        router.push("/")
      } else {
        console.error("Login failed:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };


  return (
    <Box>
      <Typography
        className="!mb-1 !text-center !text-stone-800 !mb-3"
        level="h3"
      >
        Log in
      </Typography>

      <Input
        name="email"
        placeholder="Email"
        className="p-3 mb-2"
        value={loginInput.email}
        onChange={handleInputChange}
      />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        className="p-3 mb-2"
        value={loginInput.password}
        onChange={handleInputChange}
      />

      <Link
        href="/forgot-password"
        level="body-xs"
        className="!float-right !mb-4 !text-stone-900"
      >
        Forgot password?
      </Link>

      <Button
        variant="soft"
        color="neutral"
        className="!text-stone-900 w-full mt-3 mb-3 bg-slate-50"
        onClick={handleLogin}
      >
        Log In
      </Button>

      <Typography level="body-sm" className="!mt-3 text-center !text-stone-900">
        New to ActiveGym?{" "}
        <Link href="/sign-up" className="!font-semibold !text-stone-900">
          {" "}
          Sign up now
        </Link>
      </Typography>
    </Box>
  );
}
