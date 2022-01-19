import React from "react";
import { Container, Grid, Box, AppBar } from "@mui/material";
import variables from "../assets/App.scss";
import {Link} from "react-router-dom"
function Footer() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: variables.mainColor }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ p:2 }}>
            <Grid item xs={12} sm={4}>
            <ul>
              <li><Link className="no-underline" to="/">Link</Link></li>
            </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
            </Grid>
            <Grid item xs={12} sm={4}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Footer;
