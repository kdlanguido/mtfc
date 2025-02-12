import { Box, Container } from "@mui/material";
import ForgotPasswordForm from "./forgotPasswordForm";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1D1B20",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1D1B20",
          padding: 4,
          position: "relative",
        }}
      >
        <Container
          sx={{
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: "400px",
            textAlign: "center",
          }}
        >
          <ForgotPasswordForm />
        </Container>
      </Box>

      <Box
        sx={{
          flex: 1,
          position: "relative",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",
        }}
      >
        <Image
          src="/assets/signup.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          style={{ position: "absolute", zIndex: -1 }}
        />
      </Box>
    </Box>
  );
}
