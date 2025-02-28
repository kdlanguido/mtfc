"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { CartDrawerState, CartItems } from "@/stores/StoreItem.store";
import { UserInformation } from "@/stores/UserInfo.store";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from "@mui/material";


const CartDrawer = () => {

  const [userInformation] = useAtom(UserInformation)
  const [cartDrawerState, setCartDrawerState] = useAtom(CartDrawerState)
  const [, setCart] = useState([]);
  const [cartItems, setCartItemsAtom] = useAtom(CartItems);
  const [totalQuantity, setTotalQuantity] = useState<number>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const router = useRouter()

  useEffect(() => {

    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/ecommerce/usercart/${userInformation._id}`);
        const data = await response.json();

        setCartItemsAtom(data.cartItems);
        setCart(data)

        calculateTotalQty();
        calculateTotalPrice();

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (cartDrawerState) {
      fetchCartItems();
    }

  }, [cartDrawerState]);

  useEffect(() => { calculateTotalQty(); calculateTotalPrice(); }, [cartItems])

  const handleQuantityChange = (index: number, change: number) => {
    const cartItem = cartItems[index];
    const newQty = Math.max(0, cartItem.qty + change);

    setCartItemsAtom(prevCartItems => {

      if (newQty === 0) {
        return prevCartItems.filter((_, i) => i !== index);
      }

      const updatedCartItems = [...prevCartItems];
      updatedCartItems[index] = { ...cartItem, qty: newQty };
      return updatedCartItems;
    });
  };

  const calculateTotalQty = () => {
    const totalQty = cartItems && cartItems.reduce((acc, item) => acc + item.qty, 0) || 0;
    setTotalQuantity(totalQty)
  }

  const calculateTotalPrice = () => {
    const totalPrc = cartItems && cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0) || 0;
    setTotalPrice(totalPrc)
  }

  const toggleCart = () => {
    setCartDrawerState(!cartDrawerState)
  }

  const handleProceedCheckout = async () => {

    const userId = userInformation._id

    const response = await fetch(`/api/ecommerce/usercart`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        cartItems
      }),
    });

    if (response.ok) {
      router.push("/checkout")
      setCartDrawerState(!false)
    } else {
      console.error('Failed to update cart:', response.statusText);
    }
  }

  const renderList = () => (

    <Box className="w-96" role="presentation">

      <Box className="flex justify-start items-center p-5 text-white bg-gray-600 w-full">
        <ArrowBackIosNewIcon
          onClick={toggleCart}
          className="cursor-pointer text-white"
        />

        <Box className="flex w-full justify-center">
          <h1 className="text-center font-light">Shopping Cart</h1>
        </Box>
      </Box>

      <Divider />

      <List>
        {cartItems && cartItems.length > 0 && cartItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem component="div">
              <ListItemIcon>
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-20 h-20 mr-5"
                />
              </ListItemIcon>
              <Box>
                <ListItemText primary={item.name} />
                <ListItemText primary={`₱${item.price}`} />
                <Box className="flex items-center">
                  <Button onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                  <Box className="mx-2">{item.qty}</Box>
                  <Button onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                </Box>
              </Box>
            </ListItem>

            {/* Only render divider if it's not the last item */}
            {cartItems.indexOf(item) < cartItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Divider />

      <Box className="flex justify-between p-5">
        <ListItemText primary="Total Quantity" />
        <ListItemText primary={totalQuantity} />
      </Box>

      <Box className="flex justify-between px-5 gap-0">
        <ListItemText primary="Total Price" />
        <ListItemText primary={`₱${totalPrice}`} />
      </Box>

      <Box className="flex justify-end p-5">
        <Button variant="contained" color="primary" onClick={handleProceedCheckout}>
          Proceed Checkout
        </Button>
      </Box>

    </Box>

  );

  return (
    <Drawer anchor="right" open={cartDrawerState} onClose={toggleCart}>
      {renderList()}
    </Drawer>
  );
};

export default CartDrawer;
