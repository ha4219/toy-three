import dynamic from "next/dynamic";
import { CircularProgress, Container } from "@mui/material";
import React from "react";

const LazyScene = dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => <CircularProgress />,
});

interface Props {}

const Layout: React.FC<Props> = ({ children }) => (
  <Container maxWidth="sm" sx={{ height: "100%" }}>
    <LazyScene />
    {children}
  </Container>
);

export default Layout;
