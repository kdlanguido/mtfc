"use client";
import React, { ReactNode } from "react";
import { ParallaxProvider as ScrollParallaxProvider } from "react-scroll-parallax";

interface ParallaxProviderProps {
    children: ReactNode;
}

const Parallax: React.FC<ParallaxProviderProps> = ({ children }) => {
    return <ScrollParallaxProvider>{children}</ScrollParallaxProvider>;
};
export default Parallax;