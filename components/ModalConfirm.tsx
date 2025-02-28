"use client";
import Modal from "@mui/joy/Modal";
import { ViewProductModalState, ViewProductItemId } from "@/stores/StoreItem.store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function ViewProductModal() {

  const [loading, setLoading] = useState<boolean>(false)

  const [viewProductState, setViewProductState] = useAtom(
    ViewProductModalState
  );

  const [viewProductItemId,] = useAtom(
    ViewProductItemId
  );

  const [productInformation, setProductInformation] = useState();

  useEffect(() => {

    const fetchProductInformation = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/products/${viewProductItemId}`);
        const data = await response.json();
        setProductInformation(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProductInformation()

  }, [viewProductState])

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={(!loading) && viewProductState}
      onClose={() => setViewProductState(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ProductCard ProductInformation={productInformation} />
    </Modal >
  );
}
