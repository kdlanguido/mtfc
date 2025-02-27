"use client";

import { useAtom } from "jotai";
import { IsUserAuthenticated, UserInformation } from "@/stores/UserInfo.store";
import { Box, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBell, FaCartShopping, FaLock, FaUser } from "react-icons/fa6";
import { NavLinks } from "@/constants/app";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { CartDrawerState } from "@/stores/StoreItem.store";

const Header = () => {

  const [cartDrawerState, setCartDrawerState] = useAtom(CartDrawerState)
  const [isUserAuthenticated,] = useAtom(IsUserAuthenticated);
  const [userInformation,] = useAtom(UserInformation);
  const [isMounted, setIsMounted] = useState(false);
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState(false);
  const [userDropdownMyProfileIsOpen, setUserDropdownMyProfileIsOpen] = useState(false);

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

  const toggleCart = () => {
    setCartDrawerState(!cartDrawerState)
  }

  const toggleUserDropdownIsOpen = () => {
    setUserDropdownIsOpen(!userDropdownIsOpen);
  };

  const toggleUserDropdownMyProfileIsOpen = () => {
    setUserDropdownIsOpen(!userDropdownIsOpen);
  };

  const toggleUserDropdownLogout = () => {
  };

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
          {NavLinks.map((link) => (
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
              <ListItem sx={{ '&:hover': { backgroundColor: '#D4D4D4' } }}>
                <ListItemButton onClick={toggleCart}>
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
                <ListItemButton onClick={toggleUserDropdownIsOpen}>
                  <ListItemDecorator>
                    <FaUser className="text-zinc-50" />
                  </ListItemDecorator>
                </ListItemButton>

                {userDropdownIsOpen && (
                  <Box className="absolute bg-white shadow-lg rounded-lg p-2 right-0 w-40" sx={{ marginTop: 17, zIndex: 1 }}>
                    <ul>
                      <li onClick={toggleUserDropdownMyProfileIsOpen} className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
                        <FaCog className="text-gray-500" />
                        <span>My Profile</span>
                      </li>
                      <li onClick={toggleUserDropdownLogout} className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
                        <FaSignOutAlt className="text-gray-500" />
                        <span>Log out</span>
                      </li>
                    </ul>
                  </Box>
                )}
              </ListItem>


            </Box>
          )}

        </List>
      </Box>
    </Box>
  );
};

export default Header;
