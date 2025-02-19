import { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface Message {
    text: string;
    sender: "You" | "Bot";
}

export default function Dashboard() {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const toggleChat = () => setChatOpen(!chatOpen);

    const sendMessage = () => {
        if (input.trim() !== "") {
            setMessages([...messages, { text: input, sender: "You" }]);
            setInput("");
        }
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>

                    <Typography variant="h4">Welcome to the Dashboard</Typography>

                    <Button variant="contained" sx={{ mt: 2 }} onClick={toggleChat}>
                        {chatOpen ? "Close Chat" : "Open Chat"}
                    </Button>
                </Box>

                {chatOpen && (
                    <Paper
                        sx={{
                            position: "fixed",
                            bottom: 16,
                            right: 16,
                            width: 300,
                            p: 2,
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h6">Chat</Typography>
                        <Box sx={{ maxHeight: 200, overflowY: "auto", mb: 1, p: 1 }}>
                            {messages.map((msg, index) => (
                                <Typography
                                    key={index}
                                    sx={{
                                        textAlign: msg.sender === "You" ? "right" : "left",
                                        backgroundColor: msg.sender === "You" ? "#e3f2fd" : "#f1f1f1",
                                        borderRadius: 1,
                                        p: 1,
                                        mt: 1,
                                    }}
                                >
                                    <strong>{msg.sender}:</strong> {msg.text}
                                </Typography>
                            ))}
                        </Box>

                        <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={{ mt: 1 }}
                            onClick={sendMessage}
                        >
                            Send
                        </Button>
                    </Paper>
                )}
            </Box>
        </>
    );
}
