"use client";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Modal,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import PhoneNumberInput from "./PhoneNumberInput";
import ContactConfirmation from "./ContactConfirmation";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleSubmit = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(true);
    setOpenModal(true);
    setOpenSnackbar(true);
  };

  const resetError = () => {
    if (error) {
      setError(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Box sx={{ background: "white", height: "100vh" }}>
      <Box sx={{ padding: "10px" }}>
        <ArrowBackIcon sx={{ color: "black", height: 45, width: 48 }} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image src={"/assets/logo.png"} height={200} width={200} alt="logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            resetError();
          }}
          sx={{
            width: 630,
            height: 45,
            color: "black",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
          error={error && name.trim() === ""}
          helperText={error && name.trim() === "" ? "Name is required" : ""}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            resetError();
          }}
          sx={{
            width: 630,
            height: 45,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
          error={error && email.trim() === ""}
          helperText={error && email.trim() === "" ? "Email is required" : ""}
        />
        <TextField
          label="Subject"
          variant="outlined"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            resetError();
          }}
          sx={{
            width: 630,
            height: 45,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
          error={error && subject.trim() === ""}
          helperText={
            error && subject.trim() === "" ? "Subject is required" : ""
          }
        />
        <PhoneNumberInput
          value={phoneNumber}
          onChange={(value) => {
            setPhoneNumber(value);
            resetError();
          }}
          error={error && phoneNumber.trim() === ""}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={10}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            resetError();
          }}
          sx={{
            width: 630,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
          error={error && message.trim() === ""}
          helperText={
            error && message.trim() === "" ? "Message is required" : ""
          }
        />
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            Please fill out all fields.
          </Typography>
        )}
        {success && (
          <Typography color="success" sx={{ mt: 2 }}>
            Message sent successfully!
          </Typography>
        )}
        <Button
          variant="contained"
          sx={{
            width: 250,
            height: 45,
            borderRadius: 60,
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "104%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <ContactConfirmation />
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Message sent successfully!"
        ContentProps={{
          sx: {
            background: "white",
            color: "black",
          },
        }}
      />
    </Box>
  );
}

export default ContactPage;
