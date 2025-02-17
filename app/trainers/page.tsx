import CenterNavBar from "@/components/CenterNavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Trainers from "@/components/Trainers";
import React from "react";

function page() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <Trainers />
      <CenterNavBar />
      <Footer />
    </div>
  );
}

export default page;
