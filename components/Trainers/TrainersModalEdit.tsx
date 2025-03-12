"use client";
import { TrainerModalStateEdit, SelectedTrainer } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, FormLabel, Input, Typography } from "@mui/joy";
import Image from "next/image";
import { TrainerI } from "@/constants/interfaces";
import { UploadButton } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

export default function TrainersModalEdit({ fetchTrainers }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [productModalState, setProductModalState] = useAtom(TrainerModalStateEdit);
  const [selectedTrainer] = useAtom(SelectedTrainer);
  const [selectedImage, setSelectedImage] = useState("");

  const [updatedTrainerInformation, setUpdatedTrainerInformation] = useState({
    _id: selectedTrainer ? selectedTrainer._id : "",
    profileUrl: selectedTrainer ? selectedTrainer.profileUrl : "",
    fullName: selectedTrainer ? selectedTrainer.fullName : "",
    gender: selectedTrainer ? selectedTrainer.gender : "",
    email: selectedTrainer ? selectedTrainer.email : "",
    phone: selectedTrainer ? selectedTrainer.phone : "",
    shortIntro: selectedTrainer ? selectedTrainer.shortIntro : "",
    instructorSchedule: selectedTrainer ? selectedTrainer.instructorSchedule : "",
    hourlyRate: selectedTrainer ? selectedTrainer.hourlyRate : 0,
    specialization: selectedTrainer ? selectedTrainer.specialization : "",
    instructorFor: selectedTrainer ? selectedTrainer.instructorFor : "",
  });

  useEffect(() => {
    if (selectedTrainer) {
      setSelectedImage(selectedTrainer.profileUrl);
      setUpdatedTrainerInformation({
        _id: selectedTrainer._id,
        profileUrl: selectedTrainer.profileUrl,
        fullName: selectedTrainer.fullName,
        gender: selectedTrainer.gender,
        email: selectedTrainer.email,
        phone: selectedTrainer.phone,
        shortIntro: selectedTrainer.shortIntro,
        instructorSchedule: selectedTrainer.instructorSchedule,
        hourlyRate: selectedTrainer.hourlyRate,
        specialization: selectedTrainer.specialization,
        instructorFor: selectedTrainer.instructorFor,
      });
    }
  }, [selectedTrainer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTrainerInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/trainers/${updatedTrainerInformation._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTrainerInformation),
      });

      if (!response.ok) {
        throw new Error("Failed to update trainer");
      }

      const updatedTrainerData = await response.json();

      alert("Trainer updated successfully");
      setProductModalState(false);
      fetchTrainers();
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  };

  if (!selectedTrainer) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={productModalState}
      onClose={() => setProductModalState(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">Edit Trainer Information</Typography>
        </Box>
        <Box className="mb-2">
          <Image
            src={selectedImage || "/default-img.png"} // Fallback image
            alt="trainer image"
            height={300}
            width={200}
            className="w-[200] h-auto mb-2 mx-auto"
          />

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const { ufsUrl } = res[0];
              setUpdatedTrainerInformation((prev) => ({
                ...prev,
                profileUrl: ufsUrl,
              }));
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
            value={updatedTrainerInformation.fullName}
            name="fullName"
            onChange={handleInputChange}
          />

          <FormLabel>Email</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.email}
            name="email"
            onChange={handleInputChange}
          />

          <FormLabel>Phone</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.phone}
            name="phone"
            onChange={handleInputChange}
          />

          <FormLabel>Short Intro</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.shortIntro}
            name="shortIntro"
            onChange={handleInputChange}
          />

          <FormLabel>Instructor Schedule</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.instructorSchedule}
            name="instructorSchedule"
            onChange={handleInputChange}
          />

          <FormLabel>Hourly Rate</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.hourlyRate}
            name="hourlyRate"
            onChange={handleInputChange}
          />

          <FormLabel>Specialization</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.specialization}
            name="specialization"
            onChange={handleInputChange}
          />

          <FormLabel>Instructor For</FormLabel>
          <Input
            className="mb-2"
            value={updatedTrainerInformation.instructorFor}
            name="instructorFor"
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
