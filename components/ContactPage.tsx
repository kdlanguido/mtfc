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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async () => {
    const { fullName, email, subject, message, phoneNumber } = formData;

    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      setError(true);
      setSuccess(false);
      return;
    }

    const response = await fetch('/api/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
      setError(false);
      setSuccess(true);
      setOpenModal(true);
      setOpenSnackbar(true);
    } else {
      alert('Server error! Contact admin')
    }
  };

  const resetError = () => {
    if (error) {
      setError(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    resetError();
  };

  return (
    <Box className="bg-white-100 h-screen">
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
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
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
          error={error && formData.fullName.trim() === ""}
          helperText={error && formData.fullName.trim() === "" ? "Name is required" : ""}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
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
          error={error && formData.email.trim() === ""}
          helperText={error && formData.email.trim() === "" ? "Email is required" : ""}
        />
        <TextField
          label="Subject"
          variant="outlined"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
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
          error={error && formData.subject.trim() === ""}
          helperText={error && formData.subject.trim() === "" ? "Subject is required" : ""}
        />
        <PhoneNumberInput
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(value) => {
            setFormData((prevData) => ({
              ...prevData,
              phoneNumber: value,
            }));
            resetError();
          }}
          error={error && formData.phoneNumber.trim() === ""}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={10}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
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
          error={error && formData.message.trim() === ""}
          helperText={error && formData.message.trim() === "" ? "Message is required" : ""}
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
