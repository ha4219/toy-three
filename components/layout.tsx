import dynamic from "next/dynamic";
import {
  Box,
  CircularProgress,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Navbar from "@components/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@emotion/react";

const LazyScene = dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => (
    <Container sx={{ height: "100%", position: "fixed" }}>
      <CircularProgress />
    </Container>
  ),
});

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const [bottomNav, setBottomNav] = useState(0);
  const onBottomNavChange = useCallback((event, newValue) => {
    setBottomNav(newValue);
  }, []);
  return (
    <Box sx={{ height: "100%" }}>
      <Navbar />
      <Drawer></Drawer>
      <Container>
        <LazyScene />
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
