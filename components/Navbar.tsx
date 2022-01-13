import {
  Box,
  Container,
  Menu,
  Tab,
  Tabs,
  Button,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import gravatar from "gravatar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/system";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onChange = useCallback((e, v) => {
    setValue(v);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ display: "flex" }}>
      <Tabs value={value} onChange={onChange} centered>
        <Tab label="Home" />
        <Tab label="Test" />
        <Tab label="Asdf" />
      </Tabs>
      <Button
        id="menu-btn"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={gravatar.url("h", { s: "28px", d: "retro" })} />
      </Button>
      <Button>
        <DarkModeIcon />
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-btn",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "red" }}>
          Logout
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Navbar;
