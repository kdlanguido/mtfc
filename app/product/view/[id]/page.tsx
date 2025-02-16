"use client";

import Header from "@/components/Header";
import StoreNavBreadCrumbs from "@/components/StoreNavBreadCrumbs";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    // const getId = async () => {
    //   const { id } = await params;
    //   setId(id);
    // };
    // getId();
    // const fetchProducts = async () => {
    //   const response = await fetch(
    //     "/api/product/getbyid/67b208f65e9427e8aea1b7ad"
    //   );
    //   const data = await response.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, [params]);

  return (
    <>
      <Header />
      <Box className="p-5">
        <StoreNavBreadCrumbs />
        Page for {id}
        {/* {products} */}
      </Box>
    </>
  );
}
