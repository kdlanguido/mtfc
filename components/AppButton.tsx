import { ButtonI } from "@/constants/interfaces";
import { Box, Button } from "@mui/joy";
import React from "react";

function AppButton({ style, onClick, title }: ButtonI) {
  return (
    <Box>
      <Button style={style} onClick={onClick}>
        {title}
      </Button>
    </Box>
  );
}

export default AppButton;
