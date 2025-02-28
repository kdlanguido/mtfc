import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import HomeMainContent from "@/components/HomeMainContent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="!overflow-x-hidden flex  flex-col min-h-screen ">
      <HomeBanner />
      <HomeMainContent />
      <Footer />
    </Box>
  );
}
