"use client";
import { GymEquipmentModalStateEdit, SelectedGymEquipment } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, FormLabel, Input, Typography } from "@mui/joy";
import { GymEquipmentI } from "@/constants/interfaces";

export default function GymEquipmentEdit({ fetchGymEquipments }) {

  const [loading, setLoading] = useState<boolean>(true);
  const [gymEquipmentModalStateEdit, setGymEquipmentModalStateEdit] = useAtom(GymEquipmentModalStateEdit);
  const [selectedProduct] = useAtom(SelectedGymEquipment);
  const [updatedGymEquipment, setUpdatedGymEquipment] = useState<GymEquipmentI>({
    _id: selectedProduct ? selectedProduct._id : "",
    name: selectedProduct ? selectedProduct.name : "",
    description: selectedProduct ? selectedProduct.description : "",
    price: selectedProduct ? selectedProduct.price : 0,
    datePurchased: selectedProduct ? selectedProduct.datePurchased : "",
    qty: selectedProduct ? selectedProduct.qty : 0,
    vendorDetails: selectedProduct ? selectedProduct.vendorDetails : {
      name: "",
      contactNumber: "",
      address: ""
    },
  });

  useEffect(() => {
    if (selectedProduct) {
      setUpdatedGymEquipment({
        _id: selectedProduct._id,
        name: selectedProduct.name,
        description: selectedProduct.description,
        price: selectedProduct.price,
        datePurchased: selectedProduct.datePurchased,
        qty: selectedProduct.qty,
        vendorDetails: selectedProduct.vendorDetails,
      });
    }
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("vendorDetails")) {
      const field = name.split(".")[1];
      setUpdatedGymEquipment((prev) => ({
        ...prev,
        vendorDetails: {
          ...prev.vendorDetails,
          [field]: value,
        },
      }));
    } else {
      setUpdatedGymEquipment((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSaveChanges = async () => {
    try {
      const dataToSend = {
        ...updatedGymEquipment,
        datePurchased: updatedGymEquipment.datePurchased ? new Date(updatedGymEquipment.datePurchased) : null,
      };

      const response = await fetch(`/api/equipments`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to update equipment");
      }

      await response.json();

      alert("Equipment updated successfully");
      setGymEquipmentModalStateEdit(false);
      fetchGymEquipments();

    } catch (error) {
      console.error("Error updating equipment:", error);
    }
  };

  if (!selectedProduct) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={gymEquipmentModalStateEdit}
      onClose={() => setGymEquipmentModalStateEdit(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">Edit Gym Equipment</Typography>
        </Box>

        <Box className="w-full">
          <FormLabel>Equipment Name</FormLabel>
          <Input
            className="mb-2"
            value={updatedGymEquipment.name}
            name="name"
            onChange={handleInputChange}
          />

          <FormLabel>Description</FormLabel>
          <Input
            className="mb-2"
            value={updatedGymEquipment.description}
            name="description"
            onChange={handleInputChange}
          />

          <FormLabel>Date of Purchase</FormLabel>
          <Input
            className="mb-2"
            name="datePurchased"
            type="date"
            value={updatedGymEquipment.datePurchased}
            onChange={handleInputChange}
          />

          <FormLabel>Quantity</FormLabel>
          <Input
            className="mb-2"
            name="qty"
            type="number"
            value={updatedGymEquipment.qty}
            onChange={handleInputChange}
          />

          <Box className="mt-4">
            <Typography level="title-md">Vendor Details</Typography>
          </Box>

          <FormLabel>Vendor Name</FormLabel>
          <Input
            className="mb-2"
            name="vendorDetails.name"
            value={updatedGymEquipment.vendorDetails.name}
            onChange={handleInputChange}
          />

          <FormLabel>Vendor Contact Number</FormLabel>
          <Input
            className="mb-2"
            name="vendorDetails.contactNumber"
            value={updatedGymEquipment.vendorDetails.contactNumber}
            onChange={handleInputChange}
          />

          <FormLabel>Vendor Address</FormLabel>
          <Input
            className="mb-2"
            name="vendorDetails.address"
            value={updatedGymEquipment.vendorDetails.address}
            onChange={handleInputChange}
          />

          <FormLabel>Total Cost</FormLabel>
          <Input
            className="mb-2"
            name="price"
            type="number"
            value={updatedGymEquipment.price}
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
