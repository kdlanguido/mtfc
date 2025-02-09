import { Box, Typography, Input, Button, Link } from "@mui/joy";
import React, { useState } from "react";

export default function LoginForm() {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
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
        name="username"
        placeholder="Username"
        className="p-3 mb-2"
        value={loginInput.username}
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
        onClick={() => console.log(loginInput)}
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
