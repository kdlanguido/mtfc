"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useAtom } from "jotai";
import { cartAtom, totalQuantityAtom } from "@/stores/StoreItem.store";
import { Product, CartDrawerProps, CartState } from "@/constants/interfaces";

const fetchData: Product[] = [
  {
    title: "Product 1",
    image: "/assets/product1.png",
    price: 100,
    description: "Product 1 description",
  },
  {
    title: "Product 2",
    image: "/assets/product2.png",
    price: 100,
    description: "Product 2 description",
  },
  {
    title: "Product 3",
    image: "/assets/product3.png",
    price: 100,
    description: "Product 3 description",
  },
];

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const [cart, setCart] = useAtom(cartAtom);
  const [totalQuantity] = useAtom(totalQuantityAtom);

  useEffect(() => {
    if (cart.quantities.length === 0) {
      setCart({
        quantities: fetchData.map(() => 1),
        checked: fetchData.map(() => false),
      });
    }
  }, [setCart, cart.quantities.length]);

  const handleQuantityChange = (index: number, change: number) => {
    const newQuantities = [...cart.quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setCart({ ...cart, quantities: newQuantities });
  };

  const handleItemChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...cart.checked];
      newChecked[index] = event.target.checked;
      setCart({ ...cart, checked: newChecked });
    };

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = cart.checked.map(() => event.target.checked);
    setCart({ ...cart, checked: newChecked });
  };

  const totalPrice = fetchData.reduce((total, item, index) => {
    return cart.checked[index]
      ? total + item.price * cart.quantities[index]
      : total;
  }, 0);

  const renderList = () => (
    <Box sx={{ width: 400 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          p: 2,
          color: "white",
          bgcolor: "#808080",
          width: "100%",
        }}
      >
        <ArrowBackIosNewIcon
          onClick={onClose}
          sx={{
            cursor: "pointer",
            color: "white",
          }}
        />
        <Box className="flex w-full justify-center">
          <h1 className="flex text-center">Cart</h1>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start", p: 2 }}>
        <FormControlLabel
          label="Select All"
          control={
            <Checkbox
              checked={cart.checked.every(Boolean)}
              indeterminate={
                cart.checked.some(Boolean) && !cart.checked.every(Boolean)
              }
              onChange={handleParentChange}
            />
          }
        />
      </Box>

      <List>
        {fetchData.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem component="div">
              <ListItemIcon>
                <Checkbox
                  checked={cart.checked[index]}
                  onChange={handleItemChange(index)}
                  color="primary"
                />
              </ListItemIcon>
              <ListItemIcon>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 50, height: 50 }}
                />
              </ListItemIcon>
              <Box>
                <ListItemText primary={item.title} />
                <ListItemText primary={`$${item.price}`} />
                <ListItemText primary={item.description} />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </Button>
                  <Box sx={{ mx: 2 }}>{cart.quantities[index]}</Box>
                  <Button onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </Button>
                </Box>
              </Box>
            </ListItem>
            {index < fetchData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <ListItemText primary="Total Quantity" />
        <ListItemText primary={totalQuantity} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <ListItemText primary="Total Price" />
        <ListItemText primary={`$${totalPrice.toFixed(2)}`} />
      </Box>
      <Button variant="contained" color="primary" sx={{ m: 2 }}>
        Checkout
      </Button>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {renderList()}
    </Drawer>
  );
};

export default CartDrawer;
