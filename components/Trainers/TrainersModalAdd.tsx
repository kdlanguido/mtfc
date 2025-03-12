"use client";
import { TrainerModalStateAdd } from "@/stores/App.store"; // Adjust import if necessary
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState } from "react";
import { Box, Button, Card, FormLabel, Input, Typography } from "@mui/joy";
import Image from "next/image";
import { TrainerI } from "@/constants/interfaces";
import { UploadButton } from "@/lib/uploadthing";


export default function TrainersModalAdd({ fetchTrainers }) {
  const [trainerModalStateAdd, setTrainerModalStateAdd] = useAtom(TrainerModalStateAdd);

  const [trainerInformation, setTrainerInformation] = useState<TrainerI>({
    _id: "",
    profileUrl: "",
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    shortIntro: "",
    instructorSchedule: [],
    hourlyRate: 0,
    specialization: "",
    instructorFor: "",
  });

  const [selectedImage, setSelectedImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle saving the trainer information
  const handleSave = async () => {
    try {
      const response = await fetch(`/api/trainers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainerInformation),
      });

      if (!response.ok) {
        throw new Error("Failed to add trainer");
      }

      await response.json();

      alert("Trainer added successfully");
      setTrainerModalStateAdd(false); // Close the modal
      fetchTrainers(); // Refresh the trainer list

    } catch (error) {
      console.error("Error adding trainer:", error);
    }
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={trainerModalStateAdd}
      onClose={() => setTrainerModalStateAdd(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">Add Trainer</Typography>
        </Box>

        <Box className="w-full">
          <Box className="mb-2">
            <Image
              src={selectedImage || "/assets/imgplaceholder.jpg"} // Use placeholder image if no image selected
              alt="trainer image"
              height={300}
              width={200}
              className="w-[200] h-auto mb-2 mx-auto"
            />

            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                const { ufsUrl } = res[0];
                setTrainerInformation((prev) => ({
                  ...prev,
                  profileUrl: ufsUrl,
                }));
                setSelectedImage(ufsUrl); // Set the uploaded image
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </Box>

          <FormLabel>Full Name</FormLabel>
          <Input
            className="mb-2"
            name="fullName"
            value={trainerInformation.fullName}
            onChange={handleInputChange}
          />

          <FormLabel>Gender</FormLabel>
          <Input
            className="mb-2"
            name="gender"
            value={trainerInformation.gender}
            onChange={handleInputChange}
          />

          <FormLabel>Email</FormLabel>
          <Input
            className="mb-2"
            name="email"
            type="email"
            value={trainerInformation.email}
            onChange={handleInputChange}
          />

          <FormLabel>Phone</FormLabel>
          <Input
            className="mb-2"
            name="phone"
            value={trainerInformation.phone}
            onChange={handleInputChange}
          />

          <FormLabel>Short Introduction</FormLabel>
          <Input
            className="mb-2"
            name="shortIntro"
            value={trainerInformation.shortIntro}
            onChange={handleInputChange}
          />

          <FormLabel>Instructor Schedule</FormLabel>
          <Input
            className="mb-2"
            name="instructorSchedule"
            value={trainerInformation.instructorSchedule}
            onChange={handleInputChange}
          />

          <FormLabel>Hourly Rate</FormLabel>
          <Input
            className="mb-2"
            name="hourlyRate"
            type="number"
            value={trainerInformation.hourlyRate}
            onChange={handleInputChange}
          />

          <FormLabel>Specialization</FormLabel>
          <Input
            className="mb-2"
            name="specialization"
            value={trainerInformation.specialization}
            onChange={handleInputChange}
          />

          <FormLabel>Instructor For</FormLabel>
          <Input
            className="mb-2"
            name="instructorFor"
            value={trainerInformation.instructorFor}
            onChange={handleInputChange}
          />

          <Box className="flex justify-end">
            <Button className="ml-auto" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
}
