import React, { useState , useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Radio,
} from "@mui/material";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker/dist/react-datepicker";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    email: "",
    age: "",
    joining: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const data = axios.get("http://localhost:8000/contact")
    console.warn(data);
  }, [])

  const [selectDate, setSelectedDate] = useState(null);
  console.log(setSelectedDate);

  const PostData =  async (e)  => {
    e.preventDefault();
    const { name, gender, email, age, joining, password } = user;
    // console.log(user);
    
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  };

      // // body: JSON.stringify({
      //   name,gender,email,age,joining,password
      // })

    // const data = await res.json();
    // if (res.staus === 422 || !data) {
    //   window.alert("invalid reg");
    //   console.log("invalid reg");
    // } else {
    //   console.log("reg succesfull");
    //   window.alert("reg successfull");
    // }

  return (
    <form method="POST">
      <Paper
        elevation={4}
        sx={{ width: "65%", mx: "auto", pt: "5%", pb: "3%" }}
      >
        <Grid container>
          <Grid item sx={{ pl: "2%", pt: "1%", px: "2%" }}>
            <Typography sx={{ fontSize: "20px" }}>Name</Typography>{" "}
          </Grid>
          <Grid item sx={{ pb: "2%" }}>
            <TextField
              required
              value={user.name}
              onChange={handleInputs}
              name="name"
              id="outlined-required"
              label="Required"
            />
          </Grid>

          <Grid container>
            <form>
              <div>
                <Grid item sx={{ pl: "2%", pt: "1%", px: "2%" }}>
                  <Typography sx={{ fontSize: "20px" }}>Gender :</Typography>{" "}
                </Grid>
                <Grid item sx={{ pb: "2%", mr: "auto" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInputs}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputs}
                  />
                  <label>Female</label>
                </Grid>
              </div>
            </form>
          </Grid>

          <Grid container sx={{ pt: "3%" }}>
            <Grid item sx={{ pl: "2%", pr: "2%", pt: "2%" }}>
              {" "}
              <Typography sx={{ fontSize: "20px" }}>Email</Typography>{" "}
            </Grid>
            <Grid item>
              <TextField
                value={user.email}
                onChange={handleInputs}
                name="email"
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
            </Grid>
          </Grid>

          <Grid container sx={{ pt: "3%" }}>
            <Grid item sx={{ pl: "2%", pr: "2%", pt: "2%" }}>
              {" "}
              <Typography sx={{ fontSize: "20px" }}>Age</Typography>{" "}
            </Grid>
            <Grid item sx={{ pl: "1%" }}>
              <TextField
                value={user.age}
                onChange={handleInputs}
                name="age"
                type="number"
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
            </Grid>
          </Grid>

          {/* <Grid container sx={{ pt: "3%" }}>
            <Grid item sx={{ pl: "2%", pr: "2%", pt: "2%" }}>
              {" "}
              <Typography sx={{ fontSize: "20px" }}>
                Joining Date
              </Typography>{" "}
            </Grid>
            <Grid item>
              
              <DatePicker
              // value={user.joining}
              selected = {Date}
              onChange = {setDate}
                name="joining"
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
            </Grid>
          </Grid> */}

          <Grid container sx={{ pt: "3%" }}>
            <Grid item sx={{ pl: "2%", pr: "2%", pt: "2%" }}>
              {" "}
              <Typography sx={{ fontSize: "20px" }}>
                Joining Date
              </Typography>{" "}
            </Grid>
            <Grid item>
              <div>
                <input
                  type="date"
                  value={user.joining}
                  name="joining"
                  onChange={handleInputs}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container sx={{ pt: "3%" }}>
            <Grid item sx={{ pl: "2%", pr: "2%", pt: "2%" }}>
              {" "}
              <Typography sx={{ fontSize: "20px" }}>Password</Typography>{" "}
            </Grid>
            <Grid item>
              <TextField
                value={user.password}
                onChange={handleInputs}
                name="password"
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
            </Grid>
          </Grid>

          <Button
            name="signup"
            id="signup"
            variant="contained"
            color="primary"
            type="submit"
            value="register"
            onClick={PostData}
          >
            Submit
          </Button>
        </Grid>
      </Paper>
    </form>
  );
};

export default Signup;

