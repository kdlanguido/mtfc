import { MemberModalStateEdit, SelectedMember } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, FormLabel, Input, Typography, Select, Option } from "@mui/joy";
import Image from "next/image";
import { IUser, PricingI, SubscriptionI } from "@/constants/interfaces";
import { UploadButton } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { formatDate } from "@/lib/date";

export default function MemberModalEdit({ fetchMembers }) {
  const [memberModalStateEdit, setMemberModalStateEdit] = useAtom(MemberModalStateEdit);
  const [selectedMember,] = useAtom(SelectedMember);
  const [selectedImage, setSelectedImage] = useState("");
  const [updatedUserInformation, setUpdatedUserInformation] = useState<IUser>();
  const [pricings, setPricings] = useState<PricingI[]>();
  const [membership, setMembership] = useState<SubscriptionI>();

  useEffect(() => {
    fetchPricing()
    fetchMembership()
    setUpdatedUserInformation(selectedMember)

    console.log(membership)
  }, [selectedMember]);

  const fetchPricing = async () => {
    const response = await fetch("/api/pricing/");
    const data = await response.json();
    setPricings(data)
  }

  const fetchMembership = async () => {
    const response = await fetch(`/api/membership/${selectedMember?._id}`);
    const data = await response.json();
    setMembership(data)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/users/${updatedUserInformation._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserInformation),
      });

      if (!response.ok) {
        throw new Error("Failed to update user information");
      }

      const updatedUserData = await response.json();

      alert("User information updated successfully");
      setMemberModalStateEdit(false);
      fetchMembers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (!selectedMember) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={memberModalStateEdit}
      onClose={() => setMemberModalStateEdit(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[768px]">
        <Box>
          <Typography level="title-lg">Edit User Information</Typography>
        </Box>
        <Box className="mb-2">
          <Image
            src={selectedImage || "/assets/imgplaceholder.jpg"}
            alt="user profile image"
            height={450}
            width={450}
            className="w-[330] h-auto mb-2 mx-auto"
          />

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const { ufsUrl } = res[0];
              updatedUserInformation.profileUrl = ufsUrl;
              setSelectedImage(ufsUrl);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </Box>


        <Box className="justify-between flex gap-8">

          <Box className="w-full">

            <Typography level="title-md" className="!text-gray-600 !mb-2">Personal Information</Typography>

            <FormLabel>Full Name</FormLabel>
            <Input
              className="mb-2"
              value={updatedUserInformation?.fullName}
              name="fullName"
              onChange={handleInputChange}
            />

            <FormLabel>Email</FormLabel>
            <Input
              className="mb-2"
              value={updatedUserInformation?.email}
              name="email"
              onChange={handleInputChange}
            />

            <FormLabel>Gender</FormLabel>
            <Select
              className="mb-2"
              value={updatedUserInformation?.gender}
              name="fitnessGoal"
              onChange={(i, newGender) => {
                setUpdatedUserInformation((prev) => ({
                  ...prev,
                  gender: newGender
                }))
              }}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>

            <FormLabel>Fitness Goal</FormLabel>
            <Select
              className="mb-2"
              value={updatedUserInformation?.fitnessGoal}
              name="fitnessGoal"
              onChange={handleInputChange}
            >
              <Option value="lose-weight">Lose Weight</Option>
              <Option value="build-muscle">Build Muscle</Option>
              <Option value="maintain">Maintain</Option>
            </Select>
          </Box>

          <Box className="w-full">
            <Typography level="title-md" className="!text-gray-600 !mb-2">Membership Information</Typography>

            <FormLabel>Package</FormLabel>
            <Select
              className="mb-2"
              value={membership?.pricingId}
              name="gender"
              onChange={(i, value) => {
                setUpdatedUserInformation((prev) => ({
                  ...prev,
                  gender: value,
                }))
              }}
            >
              {pricings.map((val, i) => (
                <Option key={val._id} value={val._id}>{(val.sport).toUpperCase() + " - " + (val.name).toUpperCase()}</Option>
              ))}
            </Select>

            <FormLabel>Date Started</FormLabel>
            <Input
              readOnly
              className="mb-2"
              value={membership?.startDate ? formatDate(membership.startDate.toString()) : ''}
              name="email"
              onChange={handleInputChange}
            />

            <FormLabel>Date End</FormLabel>
            <Input
              readOnly
              className="mb-2"
              value={membership?.endDate ? formatDate(membership.endDate.toString()) : ''}
              name="email"
              onChange={handleInputChange}
            />


          </Box>

        </Box>

        <Box className="flex justify-end">
          <Button className="ml-auto" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Box>

      </Card>
    </Modal >
  );
}
