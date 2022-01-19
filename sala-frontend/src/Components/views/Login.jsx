import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  TextField,
  Typography,
  Radio,
  FormControl,
  Box,
  AppBar,
  Button,
  RadioGroup,
  FormHelperText,
  styled,
  CircularProgress,
} from "@mui/material";
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import variables from "../../assets/App.scss";

import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const FormStyle = {
    margin: "0 auto",
    width: "500px",
  };
  const CustomButton = styled(Button)(({ theme }) => ({
    color: variables.mainColor,
    borderColor: variables.mainColor,
    "&:hover": {
      borderColor: variables.secondaryColor,
    },
  }));
  const [Login, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });
  const HandleInput = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    setLogin({ ...Login, error_list: null });

    const data = {
      email: Login.email,
      password: Login.password,
    };

    // axios.get("/sanctum/csrf-cookie").then((res) => {
    //   axios.post("/api/login", data).then((res) => {
    //     if (res.data.status === 200) {
    //       alertify.success(res.data.message);
    //       setLogin({ ...Login, error_list: [] });
    //       localStorage.setItem("auth_token", res.data.token);
    //       navigate("/home");
    //     } else {
    //       setLogin({
    //         ...Login,
    //         error_list: res.data.message,
    //       });
    //       alertify.error(res.data.message);
    //     }
    //   });
    // });
  };

  return (
    <Box component="form" style={FormStyle} autoComplete="true">
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Login via social network
      </Typography>
      <FormGroup>
        <Button sx={{ mb: 1,color:'#C4402F',borderColor:"#C4402F",'&:hover':{borderColor:"#C4402F"} }} variant="outlined"><FcGoogle size="20" />&nbsp;Login with Google</Button>
        <Button sx={{ mb: 1,color:'#3961BA',borderColor:'#3961BA','&:hover':{borderColor:"#3961BA"} }} variant="outlined"><BsFacebook size="20" />&nbsp;Login with Facebook</Button>
      </FormGroup>
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Or login with your email and password
      </Typography>
      <FormGroup>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="E-Mail"
            variant="outlined"
            name="email"
            onChange={HandleInput}
            defaultValue={Login.email}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={HandleInput}
            defaultValue={Login.password}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <CustomButton variant="outlined" onClick={LoginHandler}>
            {Login.error_list === null ? (
              <CircularProgress size={20} />
            ) : (
              <BiLogInCircle size={20}></BiLogInCircle>
            )}
            &nbsp; Login
          </CustomButton>
        </FormControl>
      </FormGroup>
    </Box>
  );
}

export default Login;
