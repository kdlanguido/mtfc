import {
  cardModalAtom,
  gcashModalAtom,
  termsModalAtom,
} from "@/stores/StoreItem.store";
import { Box, Button, Typography } from "@mui/joy";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";

function TermsOfUse() {
  const [, setCardModalOpen] = useAtom(cardModalAtom);
  const [, setGcashModalOpen] = useAtom(gcashModalAtom);

  const handleStartMembership = () => {
    setCardModalOpen(false);
    setGcashModalOpen(false);
  };
  return (
    <Box>
      <Typography className="text-start font-semibold mb-5">
        By checking the checkbox below, you agree to our Terms of Use, Privacy
        Statement, and that you are over 18. ActiveGym will automatically
        continue your membership and charge the membership fee to your payment
        method until you cancel. You may cancel at any time to avoid future
        charges.
      </Typography>
      <Box className="flex flex-col mx-3 gap-10">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "white",
                  "& .MuiSvgIcon-root": {
                    backgroundColor: "black",
                    borderRadius: "4px",
                  },
                },
                "& .MuiSvgIcon-root": {
                  borderRadius: "4px",
                },
              }}
            />
          }
          label="I Agree"
          className="gap-3"
        />
        <Button
          onClick={handleStartMembership}
          className="w-full h-[48px] bg-[#1689DF] text-white rounded-none flex justify-center items-center"
        >
          <Typography className="text-white font-medium">
            Start Membership
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default TermsOfUse;
