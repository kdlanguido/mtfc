"use client";
import { Box, IconButton, Typography, Stack, Card, CardContent } from "@mui/material";
import { Search, Chat, Notifications, Add, ChatBubbleOutline, ThumbUpAltOutlined, ShareOutlined, ThumbDownOffAlt } from "@mui/icons-material";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebarCommunity";
import SearchInput from "@/components/SearchBarCommunity";
import CommunityCard from "@/components/CommunityFeed";

const testimonialGroups = [
    [
        {
            image: '/assets/about-image.png',
            name: 'Hans Kristensen Esguerra',
            text: '“Lloyd is an impressive junior developer whose creativity and problem-solving abilities continuously surprise me. His dedication to producing high-quality work and his knack for tackling complex challenges make him a standout in any project. I’m confident he’ll excel in any development role he pursues.”',
            likes: 25,
            unlikes: 3,
            comments: 8,
            share: 5
        },
        {
            image: '/assets/about-image.png',
            name: 'Myro Mera',
            text: '“Working with Lloyd on our AppCon 2023 project was an incredible experience. His technical expertise, problem-solving skills, logical skills and web development skills were invaluable assets to our team. Lloyd’s ability to break down complex concepts into understandable terms made collaboration seamless.”',
            likes: 40,
            unlikes: 5,
            comments: 12,
            share: 7
        },
    ],
    [
        {
            image: '/assets/about-image.png',
            name: 'King Dranreb Languido',
            text: '“Lloyd has been an invaluable asset on multiple successful projects. He brings strong technical skills, a proactive approach to problem-solving, and a dedication that drives results. I highly recommend his work and know he will excel in any future role.”',
            likes: 35,
            unlikes: 2,
            comments: 10,
            share: 6
        },
        {
            image: '/assets/about-image.png',
            name: 'Justin Louise Neypes',
            text: '“Lloyd combines a strong technical foundation with an eagerness to learn and explore new tools and methodologies. He also demonstrated a natural ability to collaborate, contributing significantly to team efforts. His passion for growth and problem-solving is evident in every project, showing a clear commitment to both personal and professional development.”',
            likes: 50,
            unlikes: 1,
            comments: 15,
            share: 9
        },
    ],
];

const CommunityDashboard = () => {
    return (
        <>
            <Header />
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Sidebar />
                <Box sx={{
                    flex: 4,
                    pt: { xs: 5, sm: 5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: 'justify'
                }}>
                    <SearchInput />
                    <Stack spacing={2} sx={{ width: 600 }}>
                        {testimonialGroups.flat().map((testimonial, idx) => (
                            <CommunityCard key={idx} testimonial={testimonial} />
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Box>
                        {[Chat, Notifications, Add].map((Icon, index) => (
                            <IconButton key={index} sx={{ color: "white" }}>
                                <Icon />
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default CommunityDashboard;