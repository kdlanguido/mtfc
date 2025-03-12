"use client";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, Divider, FormLabel, Input, Typography } from "@mui/joy";
import { GymEquipmentI, ProductI } from "@/constants/interfaces";
import { GymEquipmentModalStateAdd } from "@/stores/App.store";

export default function GymEquipmentAdd({ fetchGymEquipments }) {
  const [gymEquipmentModal, setGymEquipmentModal] = useAtom(GymEquipmentModalStateAdd);
  const [gymEquipment, setGymEquipment] = useState<GymEquipmentI>({
    _id: "",
    name: "",
    description: "",
    price: 0,
    datePurchased: "",
    qty: 0,
    vendorDetails: {
      name: "",
      contactNumber: "",
      address: "",
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("vendorDetails")) {
      const field = name.split(".")[1];
      setGymEquipment((prev) => ({
        ...prev,
        vendorDetails: {
          ...prev.vendorDetails,
          [field]: value,
        },
      }));
    } else {
      setGymEquipment((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = async () => {
    try {
      const dataToSend = {
        ...gymEquipment,
        datePurchased: gymEquipment.datePurchased ? new Date(gymEquipment.datePurchased) : null,
      };

      const response = await fetch(`/api/equipments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to add equipment");
      }

      await response.json();

      alert("Equipment added successfully");
      setGymEquipmentModal(false);
      fetchGymEquipments();

    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={gymEquipmentModal}
      onClose={() => setGymEquipmentModal(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">Add Gym Equipment</Typography>
        </Box>

        <Box className="w-full">
          <FormLabel>Equipment Name</FormLabel>
          <Input
            className="mb-2"
            name="name"
            value={gymEquipment.name}
            onChange={handleInputChange}
          />

          <FormLabel>Description</FormLabel>
          <Input
            className="mb-2"
            name="description"
            value={gymEquipment.description}
            onChange={handleInputChange}
          />

          <FormLabel>Date of Purchase</FormLabel>
          <Input
            className="mb-2"
            name="datePurchased"
            type="date"
            value={gymEquipment.datePurchased}
            onChange={handleInputChange}
          />

          <FormLabel>Qty</FormLabel>
          <Input
            className="mb-2"
            name="qty"
            type="number"
            value={gymEquipment.qty}
            onChange={handleInputChange}
          />

          <Box className="mt-4">
            <Typography level="title-md">Vendor Details</Typography>
          </Box>

          <Box className="w-full mt-2">
            <FormLabel>Contact Number</FormLabel>
            <Input
              className="mb-2"
              name="vendorDetails.contactNumber"
              value={gymEquipment.vendorDetails.contactNumber}
              onChange={handleInputChange}
            />

            <FormLabel>Vendor</FormLabel>
            <Input
              className="mb-2"
              name="vendorDetails.name"
              value={gymEquipment.vendorDetails.name}
              onChange={handleInputChange}
            />

            <FormLabel>Address</FormLabel>
            <Input
              className="mb-2"
              name="vendorDetails.address"
              value={gymEquipment.vendorDetails.address}
              onChange={handleInputChange}
            />

            <FormLabel>Total Cost</FormLabel>
            <Input
              className="mb-2"
              name="price"
              type="number"
              value={gymEquipment.price}
              onChange={handleInputChange}
            />

            <Box className="flex justify-end">
              <Button className="ml-auto" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
}
