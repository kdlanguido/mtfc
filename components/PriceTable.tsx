import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PriceInfoI } from "@/constants/interfaces";

export default function PriceTable({ PriceInfo }: { PriceInfo: PriceInfoI }) {
  return (
    <Card sx={{ width: 405, height: 790, mt: 5 }}>
      <Typography component="div">
        <Typography
          component="div"
          sx={{
            background: "#808080",
            width: 405,
            height: 135,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontFamily: "InterBold",
            fontSize: 35,
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
        >
          {PriceInfo.title}
        </Typography>
        <Typography
          variant="h1"
          color="initial"
          component="div"
          sx={{
            height: 316,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: 2,
            mt: 1,
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontFamily: "InterExtraBold",
              fontSize: 36,
              mb: 1.5,
            }}
            component="div"
          >
            Includes:
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: "black",
              fontFamily: "InterBold",
              fontSize: 32,
              mb: 1.5,
            }}
          >
            <li> {PriceInfo.inclusions}</li>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: "black",
              fontFamily: "InterBold",
              fontSize: 32,
              mb: 1.5,
            }}
          >
            <li>{PriceInfo.inclusions2}</li>
          </Typography>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            justifySelf: "center",
            color: "black",
            fontFamily: "InterBold",
            fontSize: 25,
          }}
        >
          ₱{PriceInfo.price}
        </Typography>
      </Typography>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#1689DF",
          width: 166,
          justifySelf: "center",
          mt: 7,
        }}
      >
        <Button
          size="small"
          sx={{
            fontFamily: "InterBold",
            fontSize: 25,
            color: "white",
            height: 45,
            textTransform: "none",
          }}
        >
          Join now
        </Button>
      </CardActions>
    </Card>
  );
}
