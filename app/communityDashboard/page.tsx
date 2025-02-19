"use client";
import { Box, IconButton, InputBase, Paper, Typography, Stack, Card, CardContent } from "@mui/material";
import { Search, Chat, Notifications, Add } from "@mui/icons-material";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebarCommunity";

const testimonialGroups = [
    [
        {
            image: '/assets/about-image.png',
            name: 'Hans Kristensen Esguerra',
            text: '“Lloyd is an impressive junior developer whose creativity and problem-solving abilities continuously surprise me. His dedication to producing high-quality work and his knack for tackling complex challenges make him a standout in any project. I’m confident he’ll excel in any development role he pursues.”'
        },
        {
            image: '/assets/about-image.png',
            name: 'Myro Mera',
            text: '“Working with Lloyd on our AppCon 2023 project was an incredible experience. His technical expertise, problem-solving skills, logical skills and web development skills were invaluable assets to our team. Lloyd’s ability to break down complex concepts into understandable terms made collaboration seamless.”'
        },
    ],
    [
        {
            image: '/assets/about-image.png',
            name: 'King Dranreb Languido',
            text: '“Lloyd has been an invaluable asset on multiple successful projects. He brings strong technical skills, a proactive approach to problem-solving, and a dedication that drives results. I highly recommend his work and know he will excel in any future role.”'
        },
        {
            image: '/assets/about-image.png',
            name: 'Justin Louise Neypes',
            text: '“Lloyd combines a strong technical foundation with an eagerness to learn and explore new tools and methodologies. He also demonstrated a natural ability to collaborate, contributing significantly to team efforts. His passion for growth and problem-solving is evident in every project, showing a clear commitment to both personal and professional development.”'
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
                    <Paper
                        component="form"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: 600,
                            backgroundColor: "#444",
                            padding: "5px 10px",
                            mb: 2, 
                        }}
                    >
                        <Search sx={{ color: "white" }} />
                        <InputBase placeholder="Search" sx={{ ml: 1, flex: 1, color: "white" }} />
                    </Paper>

                    <Stack spacing={2} sx={{ width: 600 }}>
                        {testimonialGroups.flat().map((testimonial, idx) => (
                            <Card key={idx} sx={{ backgroundColor: "#222", color: "white", display: "flex", justifyContent: "center" }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                        <Box
                                            component="img"
                                            src={testimonial.image}
                                            alt={`${testimonial.name}'s photo`}
                                            sx={{
                                                width: 45,
                                                height: 45,
                                                borderRadius: '50%',
                                            }}
                                        />
                                        <Box>
                                            <Typography variant="body1" sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                {testimonial.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <hr />
                                    <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                                        {testimonial.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ flex: 1, }}>
                    {/* width: { xs: '100%', sm: '80%', md: '60%', lg: '50%', xl: '35%' }  */}
                    <Box>
                        <IconButton sx={{ color: "white" }}><Chat /></IconButton>
                        <IconButton sx={{ color: "white" }}><Notifications /></IconButton>
                        <IconButton sx={{ color: "white" }}><Add /></IconButton>
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default CommunityDashboard;
