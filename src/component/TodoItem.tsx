import React, { useState } from 'react';
import { Button, Box } from '@mui/joy';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { Modal, Typography } from '@mui/joy';

interface TodoItemProps {
    taskName: string;
    onRemove?: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ taskName, onRemove }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleOpenModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleConfirmRemove = () => {
        setOpenModal(false);
        if (onRemove) onRemove();
    };

    return (
        <>
            <Button
                variant="outlined"
                size="md"
                onClick={handleClick}
                sx={{
                    width: '100%',
                    height: '56px',
                    justifyContent: 'space-between',
                    margin: '8px 0',
                    fontSize: '18px',
                    fontWeight: 'bold',

                    textDecoration: isClicked ? 'line-through' : 'none',
                    backgroundColor: isClicked ? '#2196f3' : '#fff',
                    color: isClicked ? '#fff' : '#000',
                    borderColor: isClicked ? '#2196f3' : '#ccc',
                    '&:hover': {
                        backgroundColor: isClicked ? '#1976d2' : '#f0f0f0',
                        borderColor: isClicked ? '#1976d2' : '#bbb',
                    },
                }}
            >
                <span>{taskName}</span>
                <Box
                    component="span"
                    onClick={handleOpenModal}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#f5f5f5',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#e0e0e0',
                        },
                    }}
                >
                    <RemoveCircleOutlineOutlinedIcon
                        sx={{ fontSize: '16px', color: '#666' }}
                    />
                </Box>
            </Button>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(2px)',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '16px',
                        borderRadius: '8px',
                        boxShadow: 24,
                        width: '300px',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        id="modal-title"
                        sx={{
                            marginBottom: '16px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}
                    >
                        Xác nhận xóa
                    </Typography>
                    <Typography
                        id="modal-description"
                        sx={{ marginBottom: '24px' }}
                    >
                        Bạn có chắc chắn muốn xóa "{taskName}" không?
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            onClick={handleCloseModal}
                            sx={{ marginRight: '8px' }}
                            color="neutral"
                        >
                            Hủy
                        </Button>
                        <Button onClick={handleConfirmRemove} color="danger">
                            Xóa
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default TodoItem;
