import { Box, Button, Divider, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <Box className="w-screen h-screen">
      <Box className=" w-[538px] h-screen bg-[#236A80]">
        <Box className="flex flex-row justify-between">
          <Image src="/assets/homeicon.png" height={30} width={30} alt="home" />
          <Image
            src="/assets/useravatar.png"
            height={30}
            width={30}
            alt="user"
          />
        </Box>
        <Box className="flex flex-col items-center w-full flex-grow justify-center gap-4">
          <Image
            src="/assets/profilepic.png"
            height={174}
            width={174}
            alt="avatar"
          />
          <Button className="bg-green-500 w-[100px]">Active</Button>
          <Typography className="text-white text-lg font-semibold">
            Fhilip Lorenzo
          </Typography>
          <Typography className="text-white text-sm">
            Member since 03/29/2023
          </Typography>
          <Divider className="bg-white my-10" />
          <Image src="/assets/qr.png" height={81} width={81} alt="QR Code" />
        </Box>
        <Box className="w-full px-6 py-4">
          <Typography className="text-white font-semibold mb-2">
            Personal Information
          </Typography>
          <Typography className="text-white">Birthday</Typography>
          <Divider className="bg-white my-2" />
          <Typography className="text-white">Phone Number</Typography>
          <Divider className="bg-white my-2" />
          <Typography className="text-white">Email</Typography>
          <Divider className="bg-white my-2" />
        </Box>

        <Typography className=" text-white"> Billing Details</Typography>
        <Box className="w-full px-6 py-4">
          <Typography className="text-white font-semibold mb-2">
            Billing Details
          </Typography>
          <Typography className="text-white">Credit Card - Visa</Typography>
          <Box className="flex items-center gap-2">
            <Image src="/assets/visa.png" height={44} width={44} alt="visa" />
            <Image
              src="/assets/gcash.png"
              height={103}
              width={58}
              alt="gcash"
            />
          </Box>
          <Button color="primary" className="mt-3">
            Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
