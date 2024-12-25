import React, {useState} from "react";
import {Button, TextField, Box} from "@mui/material";
import TodoItem from "./component/TodoItem";

const HomePage: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskInput, setTaskInput] = useState<string>("");

    const handleAddTask = () => {
        if (taskInput.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, taskInput.trim()]);
            setTaskInput("");
        }
    };

    const handleRemoveTask = (indexToRemove: number) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            <h1>Danh sách công việc cần làm</h1>
            <Box display="flex" alignItems="center" gap={2} width="100%">
                <TextField
                    name="task"
                    placeholder="Thêm công việc"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    sx={{flex: 1}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        height: "56px",
                    }}
                    onClick={handleAddTask}
                >
                    Click
                </Button>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "stretch",
                    width: "100%",
                    marginTop: "16px",
                }}>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        taskName={task}
                        onRemove={() => handleRemoveTask(index)}
                    />
                ))}
            </Box>
        </>
    );
};

export default HomePage;
