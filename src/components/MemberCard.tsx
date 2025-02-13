"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import PullerInfo from "./PullerInfo";
import { PullerInfoI } from "@/types/PullerInfoI";
import Image from "next/image";

export default function MemberCard({
  PullerInfo: pullerinfo,
}: {
  PullerInfo: PullerInfoI;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 280 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/dlobngrjy/image/upload/v1739477784/DELTA_XI_UPSILON_yyk5yd.webp"
            alt="Event Image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              borderBottom={1}
              borderColor={"#c6c6c6"}
              className="text-center"
            >
              {pullerinfo.name}
            </Typography>
            <PullerInfo PullerInfo={pullerinfo} />
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
          <Typography
            className="text-center !fw-bold !p-0 !m-0"
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Puller Index
          </Typography>
          <Image
            className=" mx-auto"
            height="140"
            src="https://res.cloudinary.com/dlobngrjy/image/upload/v1739477784/DELTA_XI_UPSILON_yyk5yd.webp"
            alt="Event Image"
            width="280"
          />

          <Typography
            className="text-center !fw-bold"
            variant="h6"
            component="h1"
          >
            {'"'} {pullerinfo.name} {'"'}
          </Typography>

          <Typography
            className="!font-bold !mb-1 !mt-4 text-zinc-800"
            variant="subtitle2"
          >
            Puller Information
          </Typography>
          <Box className="flex gap-2 flex-col border p-2 !m-0" sx={{ mt: 2 }}>
            <PullerInfo PullerInfo={pullerinfo} />
          </Box>

          <Typography
            className="!font-bold !mb-1 !mt-4 text-zinc-800"
            variant="subtitle2"
          >
            Milestones
          </Typography>

          <Box className="flex gap-2 flex-col  !m-0" sx={{ mt: 2 }}>
            <Typography className=" text-zinc-600" variant="body2">
              Puller milestones information will be displayed here. This will be
              a list of the puller&apos;s achievements and milestones.
            </Typography>

            {/* <PullerMilestones PullerInfo={pullerinfo} /> */}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
