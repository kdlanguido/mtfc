import { MemberModalStateEdit, SelectedMember } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, FormLabel, Input, Typography, Select, Option } from "@mui/joy";
import Image from "next/image";
import { IUser, SubscriptionI, AttendanceI } from "@/constants/interfaces";
import { UploadButton } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

export default function MemberModalEdit({ fetchMembers }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [memberModalStateEdit, setMemberModalStateEdit] = useAtom(MemberModalStateEdit);
  const [selectedMember] = useAtom(SelectedMember);
  const [selectedImage, setSelectedImage] = useState("");

  const [updatedUserInformation, setUpdatedUserInformation] = useState<IUser>({
    _id: selectedMember ? selectedMember._id : "",
    email: selectedMember ? selectedMember.email : "",
    password: "",
    profileUrl: selectedMember ? selectedMember.profileUrl : "",
    userType: "member",
    fullName: selectedMember ? selectedMember.fullName : "",
    gender: selectedMember ? selectedMember.gender : "",
    fitnessGoal: selectedMember ? selectedMember.fitnessGoal : "",
    subscriptionInformation: selectedMember
      ? selectedMember.subscriptionInformation
      : {
        subscriptionStatus: "",
        subscriptionEnd: new Date(),
        subscriptionStart: new Date(),
        subscriptionType: "",
        subscriptionName: "",
        qrCodeUrl: "",
      },
    attendanceInformation: selectedMember
      ? selectedMember.attendanceInformation
      : {
        timeIn: "",
        timeOut: new Date(),
        date: new Date(),
        status: "",
      },
  });

  useEffect(() => {
    if (selectedMember) {
      setSelectedImage(selectedMember.profileUrl || "/default-img.png");
      setUpdatedUserInformation({
        _id: selectedMember._id,
        email: selectedMember.email,
        fullName: selectedMember.fullName,
        profileUrl: selectedMember.profileUrl,
        gender: selectedMember.gender,
        fitnessGoal: selectedMember.fitnessGoal,
        password: selectedMember.password || "",
        userType: selectedMember.userType || "standard",
        subscriptionInformation: selectedMember.subscriptionInformation || {
          subscriptionStatus: "",
          subscriptionEnd: new Date(),
          subscriptionStart: new Date(),
          subscriptionType: "",
          subscriptionName: "",
          qrCodeUrl: "",
        },
        attendanceInformation: selectedMember.attendanceInformation || {
          timeIn: "",
          timeOut: new Date(),
          date: new Date(),
          status: "",
        },
      });
    }
  }, [selectedMember]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("subscriptionInformation")) {
      const updatedSubscriptionInformation = { ...updatedUserInformation.subscriptionInformation, [name]: value };
      setUpdatedUserInformation((prev) => ({
        ...prev,
        subscriptionInformation: updatedSubscriptionInformation,
      }));
    } else {
      setUpdatedUserInformation((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/users/`, {
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
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">Edit User Information</Typography>
        </Box>
        <Box className="mb-2">
          <Image
            src={selectedImage || "/default-img.png"}
            alt="user profile image"
            height={300}
            width={200}
            className="w-[130] h-auto mb-2 mx-auto"
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

        <Box className="w-full">
          <FormLabel>Full Name</FormLabel>
          <Input
            className="mb-2"
            value={updatedUserInformation.fullName}
            name="fullName"
            onChange={handleInputChange}
          />

          <FormLabel>Gender</FormLabel>
          <Select
            className="mb-2"
            value={updatedUserInformation.gender}
            name="gender"
            onChange={handleInputChange}
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>

          <FormLabel>Fitness Goal</FormLabel>
          <Select
            className="mb-2"
            value={updatedUserInformation.fitnessGoal}
            name="fitnessGoal"
            onChange={handleInputChange}
          >
            <Option value="lose-weight">Lose Weight</Option>
            <Option value="build-muscle">Build Muscle</Option>
            <Option value="maintain">Maintain</Option>
          </Select>

          <Typography level="title-md" className="!mt-5 !mb-2">Subscription Information</Typography>

          <FormLabel>Subscription Status</FormLabel>
          <Input
            className="mb-2"
            value={updatedUserInformation.subscriptionInformation?.subscriptionStatus || ""}
            name="subscriptionStatus"
            onChange={handleInputChange}
          />

          <FormLabel>Subscription Type</FormLabel>
          <Input
            className="mb-2"
            value={updatedUserInformation.subscriptionInformation?.subscriptionType || ""}
            name="subscriptionType"
            onChange={handleInputChange}
          />

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
