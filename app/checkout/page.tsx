"use client"
import Header from '@/components/Header'
import { CartItems } from '@/stores/StoreItem.store';
import { UserInformation } from '@/stores/UserInfo.store';
import { Button, Table, Typography } from '@mui/joy';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'

export default function page() {

    const [userInformation] = useAtom(UserInformation)
    const [cartItems, setCartItems] = useAtom(CartItems);

    const userId = userInformation._id;

    const handleProceedOrder = async () => {
        try {
            const response = await fetch('/api/ecommerce/placeorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    cartItems
                }),
            });

            const data = await response.json();

            if (response.status == 201) {
                alert(data.message)
                setCartItems([])

            } else {
                console.error("Error:", data.message);
            }
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }
    }

    return (
        <div>
            <div className="flex w-full justify-center mt-[30px]">
                <h1 className="text-center font-light mb-2">Checkout Order</h1>
            </div>

            <div className='!w-[50%] mx-auto'>
                <Table aria-label="table variants" variant="outlined" color="neutral">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th className='!w-[10%] !text-center '>Qty</th>
                            <th className='!w-[10%] !text-right'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 ? (
                            cartItems.map((row) => (
                                <tr key={row.name}>
                                    <td>{row.name}</td>
                                    <td className="!text-center">{row.qty}</td>
                                    <td className="!text-right">₱ {row.price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center">
                                    Add to cart to place order...
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>

                <div className="flex flex-col items-end p-2 px-0 gap-5">
                    <Typography>Total Amount : ₱ {cartItems.reduce((total, item) => total + item.price * item.qty, 0)}</Typography>
                    <Button onClick={handleProceedOrder} className='!font-normal w-40' disabled={cartItems.length === 0}>Place order</Button>
                </div>
            </div >


        </div >

    )
}
