"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Header from './Header';

const HeaderContainer = () => {
    const pathname = usePathname();

    return (
        <>
            {pathname !== '/profile' && <Header />}
        </>
    )
}

export default HeaderContainer