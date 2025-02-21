import { ForgotPasswordNewPasswordI } from '@/constants/interfaces'
import { Button, Typography } from '@mui/joy'
import { Box, Input } from '@mui/material'
import Image from 'next/image'
import React from 'react'


export default function ForgotPasswordNewPassword({
    newPassword,
    newPasswordMatch,
    handleChangeNewPassword,
    handleChangeNewPasswordMatch,
    handleConfirmChangePassword
}: ForgotPasswordNewPasswordI) {
    return (
        <Box className="w-full flex flex-col items-center bg-white p-10">
            <Image src={"/assets/lock.png"} width={40} height={40} alt={""} />
            <Typography className="!my-2 !text-center text-stone-900" level="h4">
                Enter your New Password
            </Typography>

            <Input
                placeholder="Enter your new password"
                className="p-3 my-1 text-center w-full"
                value={newPassword}
                onChange={handleChangeNewPassword}
            />

            <Input
                placeholder="Confirm your new password"
                className="p-3 my-1 text-center w-full"
                value={newPasswordMatch}
                onChange={handleChangeNewPasswordMatch}
            />

            <Button
                variant="soft"
                color="neutral"
                className="!text-stone-900 w-full !mt-2 mb-3"
                onClick={handleConfirmChangePassword}
            >
                Confirm
            </Button>
        </Box>
    );
}
