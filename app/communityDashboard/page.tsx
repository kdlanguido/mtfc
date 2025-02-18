"use client";
import { Box } from '@mui/material';
import ChatBox from '@/components/communityChatBox';
import Sidebar from '@/components/sidebarCommunity';
import Header from "@/components/Header";

const Dashboard = () => {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <ChatBox />
            </Box>
        </>
    );
};

export default Dashboard;