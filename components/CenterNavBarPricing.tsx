"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { atom, useAtom } from "jotai";
import GymPriceTable from "./GymPriceTable";
import BoxingPriceTable from "./BoxingPriceTable";
import MuayThaiPriceTable from "./MuayThaiPriceTable";
import TaekwondoPriceTable from "./TaekwondoPriceTable";

// Define a Jotai atom for the active page state
const activePageAtom = atom("Gym");

const pages = ["Gym", "Boxing", "Muay Thai", "Taekwondo"];

function ResponsiveAppBar() {
  // Use the atom with useAtom to manage active page state
  const [activePage, setActivePage] = useAtom(activePageAtom);

  const handleCloseNavMenu = (page: string) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "Gym":
        return <GymPriceTable />;
      case "Boxing":
        return <BoxingPriceTable />;
      case "Muay Thai":
        return <MuayThaiPriceTable />;
      case "Taekwondo":
        return <TaekwondoPriceTable />;
      default:
        return <GymPriceTable />;
    }
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#808080", height: "81px" }}
      >
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Toolbar disableGutters sx={{ height: "100%" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{
                    height: "81px",
                    color: activePage === page ? "#808080" : "white",
                    display: "block",
                    backgroundColor:
                      activePage === page ? "white" : "transparent",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor:
                        activePage === page
                          ? "white"
                          : "rgba(255, 255, 255, 0.1)",
                    },
                    px: 3,
                    fontFamily: "InterExtraBold, sans-serif",
                    fontWeight: "extra-bold",
                    fontSize: "32px",
                    paddingX: 7,
                    textTransform: page === "Gym" ? "uppercase" : "none",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderPage()}
    </>
  );
}

export default ResponsiveAppBar;
