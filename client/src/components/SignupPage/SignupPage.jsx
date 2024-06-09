import styles from "./SignupPage.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../reducers/userSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const SignupPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerifier, setPasswordVerifier] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const userDetails = {
        name,
        email,
        password,
        username,
      };
      await dispatch(registerUser(userDetails));
      toast.success(
        "Successfully registered the new user.Please use the user credential to log in."
      );
      navigate("/");
    } catch (error) {
      toast.error("Could not register the user.");
    }
  };

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      username: "",
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
          CREATE ACCOUNT
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

                  minLength: {
                    value: 3,
                    message:
                      "Username should be between 3-15 characters. Please enter it again.",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Username should be between 3-15 characters. Please enter it again.",
                  },
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
                {...register("name", {
                  required: "This is required.",
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                label="Your Name"
                fullWidth
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ width: "50%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email", {
                  required: "This is required.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="outlined"
                label="Email"
                fullWidth
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: "50%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", {
                  required: "This is required.",
                  minLength: {
                    value: 5,
                    message:
                      "Password should be more than 5 characters. Please enter it again.",
                  },
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
              <TextField
                {...register("passwordVerifier", {
                  required: "This is required.",
                  validate: (valueToValidate) => {
                    if (watch("password") != valueToValidate) {
                      return toast.error("Your passwords do no match.");
                    }
                  },
                })}
                error={!!errors.passwordVerifier}
                helperText={errors.passwordVerifier?.message}
                variant="outlined"
                label="Re-enter Password"
                type="password"
                fullWidth
                value={passwordVerifier}
                onChange={(e) => setPasswordVerifier(e.target.value)}
                sx={{ width: "50%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "50%" }}
              >
                Create Account
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component="p"
                align="center"
                gutterBottom
              >
                Already have an account?{" "}
                <Link to="/login" style={{ fontWeight: "bold" }}>
                  Sign In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default SignupPage;
