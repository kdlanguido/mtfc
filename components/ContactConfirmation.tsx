"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/joy";
import Image from "next/image";

export default function ContactConfirmation() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#2F2D2D",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        paddingTop: "5%",
      }}
    >
      <Box>
        <Image
          src="/assets/logo.png"
          height={300}
          width={300}
          alt="contactus"
        />
      </Box>
      <Box sx={{ textAlign: "center", fontFamily: "Inter", marginTop: 15 }}>
        <Typography
          sx={{
            color: "white",
            fontFamily: "InterSemibold",
            fontSize: 36,
          }}
        >
          Thank you for contacting us!
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontFamily: "InterRegular",
            fontSize: 24,
            marginTop: 5,
          }}
        >
          We have received your message. <br /> We’ll reach you out Immediately.
        </Typography>

        <Button
          variant="solid"
          sx={{
            marginTop: 10,
            borderRadius: 52,
            height: 76,
            width: 394,
            background: "#1689DF",
            fontSize: 20,
          }}
          onClick={() => (window.location.href = "/")}
        >
          Back to Homepage
        </Button>
      </Box>
    </Container>
  );
}
