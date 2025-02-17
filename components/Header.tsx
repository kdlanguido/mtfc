"use client";

import { useAtom } from "jotai";
import { IsUserAuthenticated, UserInformation } from "@/stores/UserInfo.store";
import { Box, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBell, FaCartShopping, FaLock } from "react-icons/fa6";
import { NavLinksI } from "@/constants/interfaces";

const Header = () => {
  const navLinks: NavLinksI[] = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "About",
      url: "/About"
    },
    {
      label: "Trainers",
      url: "/Trainers"
    },
    {
      label: "Pricing",
      url: "/Pricing"
    },
    {
      label: "Shop",
      url: "/store"
    },
    {
      label: "Contact",
      url: "/Contact"
    }
  ];

  const [isUserAuthenticated,] = useAtom(IsUserAuthenticated);
  const [userInformation,] = useAtom(UserInformation);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      localStorage.setItem('IsUserAuthenticated', JSON.stringify(isUserAuthenticated));
      localStorage.setItem('UserInformation', JSON.stringify(userInformation));
    }
  }, [isUserAuthenticated, isMounted, userInformation]);

  if (!isMounted) {
    return null;
  }

  return (
    <Box bgcolor={"#808080"} className="p-5 flex !justify-between !w-full">
      <Image
        alt={""}
        src={"/assets/logo.png"}
        height={60}
        width={100}
        className="object-cover"
      />

      <Box className="ml-40" component="nav">
        <List className="text-zinc-50" orientation="horizontal">
          {navLinks.map((link) => (
            <ListItem key={link.label} className="font-semibold text-center px-5">
              <ListItemButton component="a" href={link.url}>
                <ListItemContent className="text-zinc-50">{link.label}</ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box component="nav">
        <List component="nav" orientation="horizontal">
          {!isUserAuthenticated && (
            <ListItem>
              <ListItemButton
                variant="solid"
                href="/login"
                component="a"
              >
                <ListItemDecorator>
                  <FaLock />
                </ListItemDecorator>
                <ListItemContent className="text-zinc-50">Login</ListItemContent>
              </ListItemButton>
            </ListItem>
          )}

          {isUserAuthenticated && (
            <Box className="flex ">
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <FaCartShopping className="text-zinc-50" />
                  </ListItemDecorator>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <FaBell className="text-zinc-50" />
                  </ListItemDecorator>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton variant="outlined">
                  <ListItemDecorator>
                    <FaLock className="text-zinc-50" />
                  </ListItemDecorator>
                  <ListItemContent className="text-zinc-50">Welcome, {userInformation.fullName}</ListItemContent>
                </ListItemButton>
              </ListItem>
            </Box>
          )}

        </List>
      </Box>
    </Box>
  );
};

export default Header;
