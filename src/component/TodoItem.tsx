import { Button, Box } from "@mui/joy";
import React, { useState } from "react";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

interface TodoItemProps {
    taskName: string;
    onRemove?: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ taskName, onRemove }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Button
            variant="outlined"
            size="md"
            onClick={handleClick}
            sx={{
                width: "100%",
                height: "56px",
                justifyContent: "space-between",
                margin: "8px 0",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: isClicked ? "line-through" : "none",
                backgroundColor: isClicked ? "#2196f3" : "#fff",
                color: isClicked ? "#fff" : "#000",
                borderColor: isClicked ? "#2196f3" : "#ccc",
                "&:hover": {
                    backgroundColor: isClicked ? "#1976d2" : "#f0f0f0",
                    borderColor: isClicked ? "#1976d2" : "#bbb",
                },
            }}
        >
            <span>{taskName}</span>
            <Box
                component="span"
                onClick={(e) => {
                    e.stopPropagation();
                    if (onRemove) onRemove();
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#f5f5f5",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: "#e0e0e0",
                    },
                }}
            >
                <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: "16px", color: "#666" }} />
            </Box>
        </Button>
    );
};

export default TodoItem;
