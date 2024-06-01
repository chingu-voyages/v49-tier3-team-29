import styles from "./ResetPasswordPage.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Button, Input, TextField } from "@mui/material";
import queryString from "query-string";

function ResetPasswordPage() {
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  console.log(parsed.token);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerify, setNewPasswordVerify] = useState("");
  const fetchResetPasswordApi = async () => {
    await fetch(
      `http://localhost:5000/auth/reset-password?token=${parsed.token}`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + parsed.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword }),
      }
    ).then((response) => {
      console.log(response);
      if (response.status === 401) {
        alert("Invalid or expired password reset token");
      } else if (response.status === 200) {
        alert(
          "Password reset successful. Please use the new password to log in."
        );
      }
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== newPasswordVerify) {
      alert("Passwords do not match");
    }

    fetchResetPasswordApi();
  };
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
        <Typography
          variant="body1"
          component="p"
          align="center"
          gutterBottom
        ></Typography>{" "}
        <Typography variant="body2" component="p" align="center" gutterBottom>
          Input a new password (minimum 5 characters).
        </Typography>
        <form className={styles.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={newPassword}
                inputProps={{ minLength: 5 }}
                type="password"
                fullWidth
                required={true}
                sx={{ width: "80%" }}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                }}
              />{" "}
              <TextField
                variant="outlined"
                inputProps={{ minLength: 5 }}
                value={newPasswordVerify}
                type="password"
                fullWidth
                required={true}
                sx={{ width: "80%" }}
                onChange={(event) => {
                  setNewPasswordVerify(event.target.value);
                }}
              />
            </Grid>

            <Grid align="center" item xs={12}>
              {" "}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "50%" }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
export default ResetPasswordPage;
