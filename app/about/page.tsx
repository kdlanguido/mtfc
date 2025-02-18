"use client";
import { Box, Typography, Stack } from "@mui/material";
import Header from "@/components/Header";
import Parallax from "@/components/Parallax";
import SectionStack from "@/components/SectionStack";
import JoinNowButton from "@/components/JoinNowBtn";
import { ParallaxBanner } from "react-scroll-parallax";

export default function About() {
    return (
        <>
            <Header />
            <Parallax>
                <ParallaxBanner
                    layers={[{ image: "/assets/about-image.png", speed: -30 }]}
                    style={{ height: "65vh" }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            textAlign="center"
                            color="white"
                            zIndex={1}
                        >
                            ABOUT US
                        </Typography>
                    </Box>
                </ParallaxBanner>
            </Parallax>

            <SectionStack>
                <Typography variant="body1" fontSize={18}>
                    Manila Total Fitness Center is the perfect place for all your fitness needs. We provide a wide variety of programs suitable for everyone, no matter their fitness level or interests. Our modern gym is filled with the latest equipment for both strength and cardio workouts. If you're interested in martial arts, we have skilled instructors teaching boxing, taekwondo, jiu-jitsu, and muay thai. Our knowledgeable trainers offer personalized support to help you enhance your skills, get fit, and gain confidence. Whether you want to build muscle, lose weight, or learn self-defense, Manila Total Fitness Center has what you need to reach your goals.
                </Typography>
            </SectionStack>
            <Stack
                sx={{
                    textAlign: "center",
                    pt: 10,
                    pb: 10,
                    backgroundColor: "white",
                    color: "#A71616",
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold" }} fontSize={30}>
                    Come join us and discover how fitness can change your life.
                    <br />
                    <JoinNowButton>Join Now!</JoinNowButton>
                </Typography>
            </Stack>

            <Parallax>
                <ParallaxBanner
                    layers={[{ image: "/assets/about-image.png", speed: -30 }]}
                    style={{ height: "65vh" }}
                >
                </ParallaxBanner>
            </Parallax>
        </>
    );
}
