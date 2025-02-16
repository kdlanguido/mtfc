"use client";

import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import StoreItemCard from "./StoreItemCard";
import { ProductI } from "@/constants/interfaces";
import Loading from "@/app/store/loading";

export default function StoreItems() {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const fetchData = async () => {
    try {
      const response = await fetch("/api/products/");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box className="mx-auto mt-10 !w-[80%]">
      {loading ? (
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={3}>
            <Loading />
          </Grid>
          <Grid item xs={12} md={3}>
            <Loading />
          </Grid>
          <Grid item xs={12} md={3}>
            <Loading />
          </Grid>
          <Grid item xs={12} md={3}>
            <Loading />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          {products?.map((product: ProductI) => (
            <Grid key={product._id} item xs={12} md={3}>
              <StoreItemCard ProductInfo={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
