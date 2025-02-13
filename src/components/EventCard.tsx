"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function EventCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Uncomment and update this Card component as necessary */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image="/tatagxbas.png"
            alt="Event Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CLUBWARS Supermatch
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              It&apos;s <b>Titan Arms Taguig</b> vs.
              <b>Binangonan Arm Squad</b> in a fierce battle of strength, skill,
              and strategy. Who will dominate the armwrestling table and claim
              victory on February 15, 2025? 💥💪
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography className="text-center" variant="h6" component="h2">
            Download your E-Certificate
          </Typography>
          <Box className="flex gap-2 flex-col" sx={{ mt: 2 }}>
            <Button
              className="w-full"
              variant="outlined"
              color="primary"
              href="https://drive.google.com/file/d/1g1c7-UgTOU5SOz9GbDFsdR6eeFk49w_K/view?usp=sharing"
              target="_blank"
            >
              Titan Arms Taguig Member
            </Button>
            <Button
              className="w-full"
              variant="outlined"
              color="primary"
              href="https://drive.google.com/file/d/1ceJSaqkcbuP8tkXGxOhUHdS0jkoCrRQx/view?usp=sharing"
              target="_blank"
            >
              Binangonan Arm Squad Member
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
