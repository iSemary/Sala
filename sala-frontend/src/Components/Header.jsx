import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Item,
  Stack,
  Box,
  AppBar,
  Toolbar,
  Typography,
  styled,
  MuiAlert,
  InputBase,
} from "@mui/material";
import { FcPaid } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import variables from "../assets/App.scss";

const CustomButton = styled(Button)(({ theme }) => ({
  color: variables.whiteColor,
  borderColor: variables.hoverColor,
  "&:hover": {
    borderColor: variables.secondaryColor,
  },
}));

const SearchInputContainer = styled("div")(({ theme }) => ({
  margin: "0 auto",
  width: "40%",
  position: "relative",
}));
const SearchIconContent = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "1%",
  top: "20%",
  fontSize: "25px",
}));
const SearchInput = styled(InputBase)(({ theme }) => ({
  color: variables.whiteColor,
  border: "1px solid" + variables.whiteColor,
  padding: "7px 7px 7px 30px",
  borderRadius: "5px",
  width: "100%",
  fontsize: "2px",
  'transition':"0.5s ease-in-out",
  '&:hover':{
    backgroundColor:variables.secondaryColor
  }
}));
function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          spacing={1}
          direction="row"
          sx={{ backgroundColor: variables.mainColor }}
        >
          <Typography
            variant="h6"
            component={Link}
            color="inherit"
            to={"/"}
            sx={{ textDecoration: "none" }}
          >
            <FcPaid size={30} /> Sala
          </Typography>

          <SearchInputContainer>
            <SearchInput placeholder="Search for products, service or categories..." />
            <SearchIconContent>
              <BiSearch />
            </SearchIconContent>
          </SearchInputContainer>

          <Stack spacing={1} direction="row">
            <CustomButton component={Link} to="/login">Login</CustomButton>
            <CustomButton variant="outlined" component={Link} to="/register">Register</CustomButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
