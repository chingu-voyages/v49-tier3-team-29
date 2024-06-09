import styles from "./LoginPage.module.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../reducers/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const userDetails = {
        username,
        password,
      };

      await dispatch(loginUser(userDetails)).then((response) => {
        response.payload.token
          ? toast.success("Successfully logged in. ")
          : console.log(
              "Could not log in. Please check if the user credenetial is correct."
            );
      });
      navigate("/");
    } catch (error) {
      toast.error(
        "Could not log in. Please check if the user credential is correct."
      );
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #FFEFD5, #f0f0f0)",
      }}
    >
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          shelf<span style={{ fontWeight: "bold" }}>share</span>
        </Typography>
        <Typography variant="body1" component="p" align="center" gutterBottom>
          SIGN IN
        </Typography>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("username", {
                  required: "This is required.",
                })}
                error={!!errors.username}
                helperText={errors.username?.message}
                variant="outlined"
                label="Username"
                fullWidth
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ width: "50%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", {
                  required: "This is required.",
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: "50%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component={Link}
                align="center"
                gutterBottom
                to="/forgot-password"
              >
                Forgot password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "50%" }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component="p"
                align="center"
                gutterBottom
              >
                New to Shelfshare?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/signup"
                sx={{ width: "25%" }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
