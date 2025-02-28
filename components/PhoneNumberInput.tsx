"use client";
import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { PhoneNumberInputProps } from "@/constants/interfaces";

const countryCodes = [
  { code: "+63", country: "PH", flag: "/assets/phlogo.png" },
  { code: "+44", country: "UK", flag: "/assets/uklogo.png" },
  { code: "+91", country: "India", flag: "/assets/indialogo.png" },
  { code: "+61", country: "Australia", flag: "/assets/auslogo.png" },
];

function PhoneNumberInput({ value, onChange, error, name }: PhoneNumberInputProps) {
  const [countryCode, setCountryCode] = useState("+63");
  const [localNumber, setLocalNumber] = useState("");

  useEffect(() => {
    const matchedCode = countryCodes.find((code) =>
      value.startsWith(code.code)
    );
    if (matchedCode) {
      setCountryCode(matchedCode.code);
      setLocalNumber(value.slice(matchedCode.code.length));
    } else {
      setLocalNumber(value);
    }
  }, [value]);

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value;
    setCountryCode(newCountryCode);
    onChange(newCountryCode + localNumber);
  };

  const handleLocalNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocalNumber = e.target.value.replace(/\D/g, "");
    onChange(countryCode + newLocalNumber);
  };

  return (
    <TextField
      type="tel"
      placeholder="Enter phone number"
      value={localNumber}
      onChange={handleLocalNumberChange}
      error={error}
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img
              src={countryCodes.find((item) => item.code === countryCode)?.flag}
              alt={countryCode}
              style={{ width: "20px", marginRight: "8px" }}
            />
            <select
              value={countryCode}
              onChange={handleCountryCodeChange}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "16px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
          </InputAdornment>
        ),
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
          paddingLeft: "8px",
        },
      }}
    />
  );
}

export default PhoneNumberInput;
