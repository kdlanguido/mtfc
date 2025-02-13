import React from "react";
import { Typography, Box, CardMedia, Card } from "@mui/material";
import { PullerInfoI } from "@/types/PullerInfoI";

const PullerMilestones = ({}: { PullerInfo: PullerInfoI }) => {
  return (
    <Box>
      <Card
        className="mb-2"
        variant="outlined"
        sx={{ p: 2, display: "flex", flexWrap: "wrap", zIndex: 1 }}
      >
        <CardMedia
          component="img"
          width="100"
          height="100"
          alt="123 Main St, Phoenix, AZ cover"
          src="https://res.cloudinary.com/dlobngrjy/image/upload/v1739477784/TATAGXBAS_sczw2w.webp"
          sx={{
            borderRadius: "6px",
            width: { xs: "100%", sm: 100 },
          }}
        />
        <Box sx={{ alignSelf: "center", ml: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="regular"
          >
            Clubwars Supermatch
          </Typography>
          <Typography fontWeight="bold" noWrap gutterBottom>
            Winner - Right Hand
          </Typography>
        </Box>
      </Card>

      <Card
        className="mb-2"
        variant="outlined"
        sx={{ p: 2, display: "flex", flexWrap: "wrap", zIndex: 1 }}
      >
        <CardMedia
          component="img"
          width="100"
          height="100"
          alt="123 Main St, Phoenix, AZ cover"
          src="https://res.cloudinary.com/dlobngrjy/image/upload/v1739477784/TATAGXBAS_sczw2w.webp"
          sx={{
            borderRadius: "6px",
            width: { xs: "100%", sm: 100 },
          }}
        />
        <Box sx={{ alignSelf: "center", ml: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="regular"
          >
            Clubwars Supermatch
          </Typography>
          <Typography fontWeight="bold" noWrap gutterBottom>
            Winner - Left Hand
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default PullerMilestones;
