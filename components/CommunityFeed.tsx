"use client";
import { Box, Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { ThumbUpAltOutlined, ThumbDownOffAlt, ChatBubbleOutline, ShareOutlined } from "@mui/icons-material";

const iconButtonStyle = {
    color: "white",
    fontSize: "1rem",
    p: 0.5,
};

const iconStyle = {
    fontSize: "1.2rem",
};

const typographyStyle = {
    fontSize: "0.9rem",
    fontWeight: "normal",
    ml: 0.5,
};

interface TestimonialProps {
    testimonial: {
        image: string;
        name: string;
        text: string;
        likes: number;
        unlikes: number;
        comments: number;
        share: number;
    };
}

const CommunityCard: React.FC<TestimonialProps> = ({ testimonial }) => {
    return (
        <Card sx={{ backgroundColor: "#222", color: "white", display: "flex", justifyContent: "center" }}>
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                    <Box component="img" src={testimonial.image} alt={`${testimonial.name}'s photo`} sx={{ width: 45, height: 45, borderRadius: "50%" }} />
                    <Box>
                        <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>{testimonial.name}</Typography>
                    </Box>
                </Box>

                <Typography sx={{ fontSize: "0.8rem", mt: 1, mb: 2, borderBottom: "1px solid white", pb: 1.5, borderTop: "1px solid white", pt: 1.5 }}>
                    {testimonial.text}
                </Typography>

                <Stack direction="row" justifyContent="start" spacing={2} mt={1}>
                    {[ThumbUpAltOutlined, ThumbDownOffAlt, ChatBubbleOutline, ShareOutlined].map((Icon, index) => (
                        <IconButton key={index} sx={iconButtonStyle}>
                            <Icon sx={iconStyle} />
                            <Typography sx={typographyStyle}>
                                {[testimonial.likes, testimonial.unlikes, testimonial.comments, testimonial.share][index]}
                            </Typography>
                        </IconButton>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CommunityCard;