import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

interface ChatBoxProps {
    chatOpen: boolean;
    toggleChat: () => void;
}

interface Message {
    text: string;
    sender: "You" | "Bot";
}

export default function ChatBox({ chatOpen, toggleChat }: ChatBoxProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() !== "") {
            setMessages([...messages, { text: input, sender: "You" }]);
            setInput("");
        }
    };

    return (
        <>
            {chatOpen && (
                <Paper
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                        width: 400,
                        p: 2,
                        backgroundColor: "#000000"
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
        </>
    );
}
