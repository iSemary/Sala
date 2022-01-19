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
  Step,
  StepLabel,
  CircularProgress,
  styled
} from "@mui/material";
import { IoIosPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import variables from "../../assets/App.scss";

const CustomButton = styled(Button)(({ theme }) => ({
  color: variables.mainColor,
  borderColor: variables.mainColor,
  "&:hover": {
    borderColor: variables.secondaryColor,
  },
}));
function Register() {
  const navigate = useNavigate();

  const [RegisterInput, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dateofbirth: "",
    gender: "",
    password: "",
    password_confirmation: "",
    error_list: [],
  });
  const FormStyle = {
    margin: "0 auto",
    width: "500px",
  };
  const HandleInput = (e) => {
    setRegister({ ...RegisterInput, [e.target.name]: e.target.value });
  };
  const RegisterHandler = (e) => {
    e.preventDefault();
    setRegister({ ...RegisterInput, error_list: null });

    const data = {
      first_name: RegisterInput.first_name,
      last_name: RegisterInput.last_name,
      email: RegisterInput.email,
      dateofbirth: RegisterInput.dateofbirth,
      gender: RegisterInput.gender,
      password: RegisterInput.password,
      password_confirmation: RegisterInput.password_confirmation,
    };

    // axios.post("/api/register", data).then((res) => {
    //     if (res.data.status === 200) {
    //       alertify.success(res.data.message);
    //       setRegister({ ...RegisterInput, error_list: [] });

    //       localStorage.setItem('auth_token',res.data.token);
    //       navigate('/home');
    //     } else {
    //       setRegister({
    //         ...RegisterInput,
    //         error_list: res.data.validation_errors,
    //       });
    //       alertify.error("Something went wrong!");
    //     }
    //   });
  };
  return (
    <Box component="form" style={FormStyle} autoComplete="true">
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Register via social network
      </Typography>
      <FormGroup>
        <Button sx={{ mb: 1,color:'#C4402F',borderColor:"#C4402F",'&:hover':{borderColor:"#C4402F"} }} variant="outlined"><FcGoogle size="20" />&nbsp;Register with Google</Button>
        <Button sx={{ mb: 1,color:'#3961BA',borderColor:'#3961BA','&:hover':{borderColor:"#3961BA"} }} variant="outlined"><BsFacebook size="20" />&nbsp;Register with Facebook</Button>
      </FormGroup>
      <Typography
        variant="h5"
        className="main-color-lazy"
        sx={{ marginBottom: "5px" }}
      >
        Or register now
      </Typography>
      <FormGroup>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            autoFocus
            label="First Name"
            required
            variant="outlined"
            name="first_name"
            onChange={HandleInput}
            defaultValue={RegisterInput.first_name}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Last Name"
            required
            variant="outlined"
            name="last_name"
            onChange={HandleInput}
            defaultValue={RegisterInput.last_name}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "10px" }}>
          <TextField
            label="E-Mail"
            required
            variant="outlined"
            name="email"
            onChange={HandleInput}
            defaultValue={RegisterInput.email}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of birth"
              onChange={HandleInput}
              defaultValue={RegisterInput.dateofbirth}
              maxDate={new Date()}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            required
            defaultValue="1"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={
                <Radio
                  onChange={HandleInput}
                  name="gender"
                  checked={RegisterInput.gender == "male" ? true : false}
                />
              }
              value="male"
              label="Male"
            />
            <FormControlLabel
              control={
                <Radio
                  onChange={HandleInput}
                  name="gender"
                  checked={RegisterInput.gender == "female" ? true : false}
                />
              }
              value="female"
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Password"
            required
            variant="outlined"
            name="password"
            type="password"
            onChange={HandleInput}
            defaultValue={RegisterInput.password}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <TextField
            label="Password Confirmation"
            variant="outlined"
            name="password_confirmation"
            required
            type="password"
            onChange={HandleInput}
            defaultValue={RegisterInput.password_confirmation}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "7px" }}>
          <CustomButton
            variant="outlined"
            type="submit"
            onClick={RegisterHandler}
          >
            <span>
              {RegisterInput.error_list === null ? (
                <CircularProgress size={20} />
              ) : (
                <IoIosPersonAdd size="20"></IoIosPersonAdd>
              )}
            </span>
            &nbsp;Create Account
          </CustomButton>
        </FormControl>
      </FormGroup>
    </Box>
  );
}

export default Register;
