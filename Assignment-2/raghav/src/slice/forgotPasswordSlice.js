import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  otp: "",
  enteredOtp: "",
  newPassword: "",
  confirmPassword: "",
  otpSent: false,
  otpVerified: false,
  loading: false,
  error: null,
  message: "",
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",

  initialState,

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setEnteredOtp: (state, action) => {
      state.enteredOtp = action.payload;
    },

    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },

    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },

    generateOtp: (state) => {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      state.otp = otp;
      state.otpSent = true;
      state.otpVerified = false;

      // Demo purpose
      state.message = `Your OTP is: ${otp}`;
      state.error = null;
    },

    verifyOtp: (state) => {
      if (state.enteredOtp === state.otp) {
        state.otpVerified = true;
        state.error = null;
        state.message = "OTP verified successfully";
      } else {
        state.otpVerified = false;
        state.error = "Invalid OTP";
        state.message = "";
      }
    },

    resetPassword: (state) => {
      if (state.newPassword !== state.confirmPassword) {
        state.error = "Passwords do not match";
        return;
      }

      if (state.newPassword.length < 6) {
        state.error = "Password must be at least 6 characters";
        return;
      }

      state.message = "Password changed successfully";
      state.error = null;
    },

    resetForgotPassword: () => initialState,
  },
});

export const {
  setEmail,
  setEnteredOtp,
  setNewPassword,
  setConfirmPassword,
  generateOtp,
  verifyOtp,
  resetPassword,
  resetForgotPassword,
} = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
