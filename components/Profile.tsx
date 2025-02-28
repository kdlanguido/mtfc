"use client"
import { DefaultProfileImgUrl } from "@/constants/app";
import { UserInformation } from "@/stores/UserInfo.store";
import { Breadcrumbs, Button, Divider, Link, Typography } from "@mui/joy";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ChartSample from "./ChartSample";

function Profile() {
  const [userInformation] = useAtom(UserInformation);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Set hydrated state after the component mounts on the client
  }, []);

  if (!isHydrated) {
    return null; // Prevent rendering until hydration is complete
  }

  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-[#236A80]">
        <div className="flex flex-col items-center w-full flex-grow justify-center gap-4 pt-5">

          <Image
            src={userInformation.profileUrl ? userInformation.profileUrl : DefaultProfileImgUrl}
            height={174}
            width={174}
            alt="avatar"
          />

          <Button className="bg-green-500 w-[100px]">Active</Button>

          <Typography className="text-white text-lg font-semibold">
            {userInformation.fullName}
          </Typography>

          <Typography className="text-white text-sm">
            Member since DATE
          </Typography>

          <Divider className="bg-white my-6" />
          <Image src="/assets/qr.png" height={100} width={100} alt="QR Code" className=" !object-contain" />

        </div>

        <div className="w-full px-6 py-4 mt-6">
          <Typography className="text-white font-semibold mb-2">
            Personal Information
          </Typography>

          <div className="flex flex-row justify-between">
            <Typography className="text-white">Gender </Typography>
            <Typography className="text-white font-light">{userInformation.gender.toUpperCase()}</Typography>
          </div>
          <Divider className="bg-white my-2" />


          <div className="flex flex-row justify-between">
            <Typography className="text-white">Fitness Goal: </Typography>
            <Typography className="text-white font-light">{userInformation.fitnessGoal.replace("-", " ").toUpperCase()}</Typography>
          </div>
          <Divider className="bg-white my-2" />


          <div className="flex flex-row justify-between">
            <Typography className="text-white">Email: </Typography>
            <Typography className="text-white font-light">{userInformation.email.toUpperCase()}</Typography>
          </div>
          <Divider className="bg-white my-2" />
        </div>

        <div className="w-full px-6 py-4">
          <Typography className="text-white font-semibold mb-2">
            Billing Details
          </Typography>
          <Typography className="text-white">Credit Card - Visa</Typography>
          <div className="flex items-center gap-2">
            <Image src="/assets/visa.png" height={44} width={44} alt="visa" />
            <Image
              src="/assets/gcash.png"
              height={103}
              width={58}
              alt="gcash"
            />
          </div>

          <Button color="primary" className="mt-3">
            Details
          </Button>
        </div>

      </div>

      <div className="w-4/5 h-screen px-10 pt-5 bg-zinc-300">
        <Breadcrumbs size="sm" className="pl-0 ml-0">
          <Link href="/" color="neutral">Home</Link>
          <Typography className="font-semibold text-black">Profile</Typography>
        </Breadcrumbs>

        <div className="!w-[550px] h-auto bg-white p-6 mb-5 rounded mt-2">
          <ChartSample />
        </div>

        <div className="my-10 bg-white border rounded-lg ">
          <div className="bg-[#235D83] p-5  rounded-t-lg">
            <Typography className="text-white">Membership Plan</Typography>
          </div>

          <div className="p-5">
            <Typography>Membership Plan</Typography>
          </div>
        </div>

        <div className="bg-white border rounded-lg ">
          <div className="bg-[#235D83] p-5  rounded-t-lg">
            <Typography className="text-white">Recurring Payments</Typography>
          </div>

          <div className="p-5">
            <Typography>Membership Plan</Typography>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
