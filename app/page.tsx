import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import HomeMainContent from "@/components/HomeMainContent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="!overflow-x-hidden">
      <Header />
      <HomeBanner />
      <HomeMainContent />
    </Box>
  );
}
