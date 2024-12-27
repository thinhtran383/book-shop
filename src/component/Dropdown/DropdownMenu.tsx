import { ExpandMore } from '@mui/icons-material';
import { Box, Button, Dropdown, MenuButton, Menu, MenuItem } from '@mui/joy';
import React, { useState } from 'react';

interface MenuItemData {
    label: string;
    onClick?: () => void;
}

interface DropdownProps {
    label: string;
    className?: string;
    menuItems: MenuItemData[];
}

const DropdownMenu: React.FC<DropdownProps> = ({
    menuItems,
    label,
    className,
}) => {
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => setOpen(true);
    const handleMouseLeave = () => setOpen(false);

    return (
        <Dropdown open={open}>
            <MenuButton
                className={className}
                slots={{ loadingIndicatorCenter: Button }}
                variant="plain"
                color="primary"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {label}
                    <ExpandMore />
                </Box>
            </MenuButton>
            <Menu
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={item.onClick}>
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
};

export default DropdownMenu;
