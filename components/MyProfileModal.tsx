"use client";
import { MyProfileModalState } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Box, Button, Card, FormLabel, Input, Option, Select, Typography } from "@mui/joy";
import { UserInformation } from "@/stores/UserInfo.store";
import { DefaultProfileImgUrl } from "@/constants/app";
import Image from "next/image";

export default function MyProfileModal() {
  const [loading, setLoading] = useState<boolean>(true);
  const [userInformation] = useAtom(UserInformation);
  const [updatedUserInformation, setUpdatedUserInformation] = useState({
    fullName: userInformation ? userInformation.fullName : "",
    email: userInformation ? userInformation.email : "",
    gender: userInformation ? userInformation.gender : "",
    fitnessGoal: userInformation ? userInformation.fitnessGoal : "",
    profileUrl: userInformation && userInformation.profileUrl ? userInformation.profileUrl : DefaultProfileImgUrl
  });

  const [myProfileModalState, setMyProfileModalState] = useAtom(MyProfileModalState);

  const handleChangeProfilePic = async () => {
    // Function to handle profile pic change
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch('/api/user/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserInformation),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setMyProfileModalState(false);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('An error occurred while updating user details.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={myProfileModalState}
      onClose={() => setMyProfileModalState(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">My Profile</Typography>
        </Box>

        <Box className="mb-2">
          <Image
            src={updatedUserInformation.profileUrl}
            alt="Profile Picture"
            height={300}
            width={200}
            className="w-[100] h-auto rounded-full cursor-pointer mx-auto"
          />
        </Box>

        <Box className="w-full">
          <FormLabel>Full Name</FormLabel>
          <Input
            className="mb-2"
            value={updatedUserInformation.fullName}
            name="fullName"
            onChange={handleInputChange}
          />

          <FormLabel>Email</FormLabel>
          <Input
            className="mb-2"
            value={updatedUserInformation.email}
            name="email"
            onChange={handleInputChange}
          />

          <FormLabel>Gender</FormLabel>
          <Select
            className="mb-2"
            value={updatedUserInformation.gender}
            onChange={(e, newValue) => {
              setUpdatedUserInformation((prev) => ({
                ...prev,
                gender: newValue,
              }));
            }}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>

          <FormLabel>Fitness Goal</FormLabel>
          <Select
            className="mb-3"
            value={updatedUserInformation.fitnessGoal}
            onChange={(e, newValue) => {
              setUpdatedUserInformation((prev) => ({
                ...prev,
                fitnessGoal: newValue,
              }));
            }}
          >
            <Option value="lose-weight">Lose Weight</Option>
            <Option value="build-muscle">Build Muscle</Option>
            <Option value="maintain">Maintain</Option>
          </Select>

          <Box className="flex justify-end">
            <Button className="ml-auto" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
}
