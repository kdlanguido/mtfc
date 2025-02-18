"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartDrawer from "./CartDrawer";
import { useAtom } from "jotai";
import { totalQuantityAtom } from "@/stores/StoreItem.store";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge() {
  const [open, setOpen] = React.useState(false);
  const [totalQuantity] = useAtom(totalQuantityAtom);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <ShoppingCartIcon fontSize="small" />
        <CartBadge
          badgeContent={totalQuantity}
          color="primary"
          overlap="circular"
        />
      </IconButton>
      {open && <CartDrawer open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
