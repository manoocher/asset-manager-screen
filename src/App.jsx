import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SignIn from "./SignIn";
import { DeviceDetail } from "./DeviceDetail";
import { IconListComp } from "./IconListComp";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      {/* <SignIn /> */}
      {/* <DeviceDetail /> */}
      <IconListComp />
    </Container>
  );
}
