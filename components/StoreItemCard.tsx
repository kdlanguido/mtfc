"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { ProductI } from "@/constants/interfaces";

export default function StoreItemCard({
  ProductInfo,
}: {
  ProductInfo: ProductI;
}) {
  const router = useRouter();

  const handleStoreItemClick = (id: string) => {
    router.push(`/product/view/${id}`);
  };

  return (
    <Card className="mx-auto !inset-shadow-md px-5 py-2" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 220,
        }}
        image="/assets/storeitem.png"
        title="Store Item"
      />
      <CardContent>
        <Typography className="text-center" variant="h5" component="div">
          {ProductInfo.name}
        </Typography>
      </CardContent>
      <CardActions className="text-center">
        <Button
          className="w-full"
          variant="contained"
          onClick={() => handleStoreItemClick(ProductInfo._id)}
        >
          View Product
        </Button>
      </CardActions>
    </Card>
  );
}
