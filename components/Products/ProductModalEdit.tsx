"use client";
import { ProductModalState, SelectedProduct } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { Box, Button, Card, FormLabel, Input, Typography } from "@mui/joy";
import Image from "next/image";
import { ProductI } from "@/constants/interfaces";
import { UploadButton } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";


export default function ProductModalEdit({ fetchProduct }) {

  const [loading, setLoading] = useState<boolean>(true);
  const [productModalState, setProductModalState] = useAtom(ProductModalState);
  const [selectedProduct] = useAtom(SelectedProduct);
  const [selectedImage, setSelectedImage] = useState("")

  const [updatedProductInformation, setUpdatedProductInformation] = useState<ProductI>({
    _id: selectedProduct ? selectedProduct._id : "",
    name: selectedProduct ? selectedProduct.name : "",
    imgUrl: selectedProduct ? selectedProduct.imgUrl : "",
    price: selectedProduct ? selectedProduct.price : 0,
    description: selectedProduct ? selectedProduct.description : "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setSelectedImage(selectedProduct.imgUrl)
      setUpdatedProductInformation({
        _id: selectedProduct._id,
        name: selectedProduct.name,
        imgUrl: selectedProduct.imgUrl,
        price: selectedProduct.price,
        description: selectedProduct.description,
      });
    }
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/products/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProductInformation),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProductData = await response.json();

      alert("Product updated successfully");
      setProductModalState(false)
      fetchProduct();

    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
    }
  };

  if (!selectedProduct) {
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
          <Typography level="title-lg">Edit Product Information</Typography>
        </Box>
        <Box className="mb-2">

          <Image
            src={selectedImage || "/default-img.png"} // Fallback image
            alt="product image"
            height={300}
            width={200}
            className="w-[200] h-auto mb-2 mx-auto"
          />

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const { ufsUrl } = res[0]
              updatedProductInformation.imgUrl = ufsUrl
              setSelectedImage(ufsUrl)
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </Box>

        <Box className="w-full">
          <FormLabel>Product Name</FormLabel>
          <Input
            className="mb-2"
            value={updatedProductInformation.name}
            name="name"
            onChange={handleInputChange}
          />

          <FormLabel>Description</FormLabel>
          <Input
            className="mb-2"
            value={updatedProductInformation.description}
            name="description"
            onChange={handleInputChange}
          />

          <FormLabel>Price</FormLabel>
          <Input
            className="mb-2"
            value={updatedProductInformation.price}
            name="price"
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
