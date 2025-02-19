import { Divider, Typography } from "@mui/joy";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppButton from "./AppButton";

function HomeAboutUs() {
  const fetchData = [
    {
      title: "About Us",
      description: "Strong Together, Healthier Forever",
      content:
        "Manila Total Fitness Center is dedicated to helping you achieve a healthier,\n stronger lifestyle. With top-notch equipment, expert guidance, and a \n supportive community, we empower you to reach your fitness goals and \nembrace wellness as a way of life.",
    },
  ];

  const buttonStyle =
    "bg-[#FA5455] text-white py-2 px-4 rounded font-bold text-lg cursor-pointer block justify-center";
  const handleOnClick = () => {
    window.location.href = "/about";
  };

  return (
    <Box className="flex w-full h-auto justify-center bg-[#2F2D2D]">
      <Box>
        {fetchData.map((info, key) => (
          <Box
            key={key}
            className="flex flex-col justify-center items-center text-center p-10"
          >
            <Typography
              className="text-[#FA5455]"
              fontSize={30}
              fontWeight="bold"
            >
              {info.title}
            </Typography>
            <Divider
              sx={{
                margin: "0 auto",
                width: "35%",
                height: "0.1rem",
                backgroundColor: "#FA5455",
                marginBottom: 1,
              }}
            />
            <Typography className=" text-white mb-10" sx={{ fontSize: 17 }}>
              {info.description}
            </Typography>
            <Typography
              className="text-white"
              sx={{ fontSize: 17, whiteSpace: "pre-line" }}
            >
              {info.content}
            </Typography>
          </Box>
        ))}
        <Box className="flex flex-row justify-evenly mb-10">
          <Image
            src="/assets/aboutus1.png"
            height={200}
            width={200}
            alt="running girl"
          />
          <Image
            src="/assets/aboutus2.png"
            height={200}
            width={200}
            alt="running girl"
          />
        </Box>
        <Box className="flex justify-center mb-40">
          <AppButton
            style={buttonStyle}
            onClick={handleOnClick}
            title="Load More"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeAboutUs;
