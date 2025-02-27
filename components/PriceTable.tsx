import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

interface PricingI {
  name: string;
  inclusions: [string];
  price: number;
}

export default function PriceTable({ sport }: { sport: string }) {
  const [pricing, setPricing] = useState<PricingI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch(`/api/pricing/${sport}`);
        const data = await response.json();
        setPricing(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPricing();
  }, [sport]);

  return (
    <div className="flex flex-row justify-center space-x-36 mt-[80px]">
      {loading
        ? Array(3)
          .fill(null)
          .map((_, index) => (
            <Card key={index} className="w-[405px] h-[450px] mt-5">
              {/* Skeleton Loader for the Card */}
              <Skeleton variant="rectangular" width="100%" height={115} />
              <div className="p-5">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="40%" />
              </div>
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
                <Skeleton variant="rectangular" width={120} height={45} />
              </CardActions>
            </Card>
          ))
        : pricing.map((pricingItem) => (
          <Card key={pricingItem.name} className="w-[405px] h-[450px] mt-5">
            <Typography component="div">
              <Typography
                component="div"
                className="bg-[#808080] w-[405px] h-[115px] flex items-center justify-center text-white !font-bold !text-[25px] whitespace-pre-line text-center"
              >
                {pricingItem.name}
              </Typography>

              <Typography
                variant="h1"
                color="initial"
                component="div"
                className="!h-auto flex justify-start flex-col !p-5 mt-1"
              >
                <Typography
                  className="text-black !text-[20px] mb-6"
                  sx={{
                    fontFamily: "InterExtraBold",
                  }}
                  component="div"
                >
                  Includes:
                </Typography>

                {pricingItem.inclusions.map((inclusion) => (
                  <Typography
                    key={inclusion}
                    className="text-black !text-[15px] mb-6"
                    variant="body2"
                    component="div"
                  >
                    <li> {inclusion}</li>
                  </Typography>
                ))}
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
                ₱{pricingItem.price}
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
                className=" text-[15px] !text-white h-[45px] rounded-[10px] uppercase-none"
                sx={{
                  fontFamily: "InterBold",
                }}
              >
                Join now
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
}
