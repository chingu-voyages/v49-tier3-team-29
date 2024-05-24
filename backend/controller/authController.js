import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  auth: {
    user: "753b65001@smtp-brevo.com",
    pass: "QDyVFCB3fJ8RX6bZ",
  },
});

async function forgotPassword(req, res) {
  // Find user by email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ error: "Could not find user" });
  }

  // Generate a password reset token and set an expiry date
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  user.passwordResetToken = token;
  user.passwordResetExpires = Date.now() + 3600000; // 1hr
  await user.save();

  //  Sent password reset email
  const resetUrl = `http://${req.headers.host}/auth/reset-password?token=${token}`;
  const mailOptions = {
    from: "admin@example.com",
    to: user.email,
    subject: "Password reset request",
    html: `
      <p>Please reset your password. Click the link below to reset your password.<\p>
      <a href="${resetUrl}">${resetUrl}<\a>
      <p>If you have not made this request, please ignore this email.<\p>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Password reset email has been sent" });
  } catch (err) {
    console.error("Failed to send password reset email", err);
    res.status(500).json({ error: "Failed to send password reset email" });
  }
}

async function resetPassword(req, res) {
  //Validate password reset token
  const token = req.query.token;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  //Find user by ID and token and check if token is still valid
  const user = await User.findOne({
    _id: decodedToken.id,
    passwordResetToken: token,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res
      .status(401)
      .json({ error: "Invalid or expired password reset token" });
  }

  //Update the user's password and remove the reset token and its expiration date
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  //Send confirmation email for resetting password
  const mailOptions = {
    from: "admin@example.com",
    to: user.email,
    subject: "Confirm resetting password",
    html: `
      <p>Your password has been successfully reset. If you have not made this request, please contact us immediately.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Failed to send password reset confirmation email:", err);
    res
      .status(500)
      .json({ error: "Failed to send password reset confirmation email" });
  }
}

async function generateJwtToken(req, res) {
  // Find user by email
  const user = await User.findOne({ email: req.body.email });

  if (!user || !req.body.password) {
    return res
      .status(404)
      .json({ error: "Invalid email address or password." });
  }
  //check if pw is correct
  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) {
    // Generate a password reset token and set an expiry date
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).json({ success: true, token });
  }
  res.status(400).json({ error: "Invalid credentials." });
}

export { forgotPassword, resetPassword, generateJwtToken };
