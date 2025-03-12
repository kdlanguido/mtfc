"use client";
import { ProductModalState, ProductModalStateAdd, SelectedProduct } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, FormLabel, Input, Typography } from "@mui/joy";
import Image from "next/image";
import { ProductI } from "@/constants/interfaces";
import { UploadButton } from "@/lib/uploadthing";


export default function ProductModalAdd({ fetchProduct }) {
  const [productModalStateAdd, setProductModalStateAdd] = useAtom(ProductModalStateAdd);
  const [productInformation, setProductInformation] = useState<ProductI>();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [selectedImage, setSelectedImage] = useState("")

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/products/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInformation),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      await response.json();

      alert("Product added successfully");
      setProductModalStateAdd(false)
      fetchProduct();

    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
    }
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={productModalStateAdd}
      onClose={() => setProductModalStateAdd(false)}
      className="flex justify-center items-center"
    >
      <Card className="w-[450px]">
        <Box>
          <Typography level="title-lg">Add Product</Typography>
        </Box>

        <Box className="w-full">
          <Box className="mb-2">
            <Image
              src={selectedImage || "/assets/imgplaceholder.jpg"}
              alt="product image"
              height={300}
              width={200}
              className="w-[200] h-auto mb-2 mx-auto"
            />

            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                const { ufsUrl } = res[0]

                setProductInformation((prev) => ({
                  ...prev,
                  imgUrl: ufsUrl,
                }));

                setSelectedImage(ufsUrl)
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </Box>

          <FormLabel>Product Name</FormLabel>
          <Input
            className="mb-2"
            name="name"
            onChange={handleInputChange}
          />

          <FormLabel>Description</FormLabel>
          <Input
            className="mb-2"
            name="description"
            onChange={handleInputChange}
          />

          <FormLabel>Price</FormLabel>
          <Input
            className="mb-2"
            name="price"
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
