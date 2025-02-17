"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";
import Image from "next/image";
import React from "react";
import {
  FaHouse,
  FaCircleQuestion,
  FaPeopleGroup,
  FaMoneyBills,
  FaPhoneVolume,
  FaLock,
} from "react-icons/fa6";

const Header = () => {
  return (
    <Box bgcolor={"#808080"} className="p-5 flex !justify-between !w-full">
      <Image
        alt={""}
        src={"/assets/logo.png"}
        height={60}
        width={100}
        className="object-cover"
      />
      <Box component="nav">
        <List className="text-zinc-50 " orientation="horizontal">
          <ListItem className="font-semibold text-center px-5">
            <ListItemButton component="a" href="/">
              <ListItemContent className="text-zinc-50 ">Home</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem className="font-semibold text-center px-5">
            <ListItemButton component="a" href="/about">
              <ListItemContent className="text-zinc-50 ">About</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem className="font-semibold text-center px-5">
            <ListItemButton component="a" href="/trainers">
              <ListItemContent className="text-zinc-50 ">
                Trainers
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem className="font-semibold text-center px-5">
            <ListItemButton component="a" href="/pricing">
              <ListItemContent className="text-zinc-50 ">
                Pricing
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem className="font-semibold text-center px-5">
            <ListItemButton component="a" href="/contact-us">
              <ListItemContent className="text-zinc-50 ">
                Contact
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box component="nav">
        <List component="nav" orientation="horizontal">
          <ListItem>
            <ListItemButton
              className="bg-"
              variant="solid"
              sx={{ background: "#FB1F11" }}
            >
              <ListItemDecorator>
                <FaLock />
              </ListItemDecorator>
              <ListItemContent className="text-zinc-50 ">Login</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Header;
