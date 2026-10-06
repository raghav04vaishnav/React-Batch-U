import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setEmail,
  setEnteredOtp,
  setNewPassword,
  setConfirmPassword,
  generateOtp,
  verifyOtp,
  resetPassword,
  resetForgotPassword,
} from "./slice/forgotPasswordSlice.js";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    email,
    enteredOtp,
    newPassword,
    confirmPassword,
    otpSent,
    otpVerified,
    error,
    message,
  } = useSelector((state) => state.forgotPassword);

  const handleGenerateOtp = (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    dispatch(generateOtp());
  };

  const handleVerifyOtp = () => {
    dispatch(verifyOtp());
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    dispatch(resetPassword());
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold">Forgot Password</h1>

        {!otpSent && (
          <form onSubmit={handleGenerateOtp} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold">Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border px-4 py-3 text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white"
            >
              Generate OTP
            </button>
          </form>
        )}

        {otpSent && !otpVerified && (
          <div className="space-y-5">
            <p className="text-center text-gray-600">
              OTP sent for:
              <br />
              <b>{email}</b>
            </p>

            <div>
              <label className="mb-2 block font-semibold">Enter OTP</label>

              <input
                type="text"
                maxLength="6"
                value={enteredOtp}
                onChange={(e) => dispatch(setEnteredOtp(e.target.value))}
                placeholder="Enter 6 digit OTP"
                className="w-full rounded-lg border px-4 py-3 text-center text-black"
              />
            </div>

            <button
              onClick={handleVerifyOtp}
              className="w-full rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
            >
              Verify OTP
            </button>
          </div>
        )}

        {otpVerified && (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold">New Password</label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) => dispatch(setNewPassword(e.target.value))}
                placeholder="Enter new password"
                required
                className="w-full rounded-lg border px-4 py-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                placeholder="Confirm password"
                required
                className="w-full rounded-lg border px-4 py-3 text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white"
            >
              Set New Password
            </button>
          </form>
        )}

        {message && (
          <p className="mt-5 text-center font-semibold text-green-600">
            {message}
          </p>
        )}

        {error && (
          <p className="mt-5 text-center font-semibold text-red-600">{error}</p>
        )}

        <button
          onClick={() => {
            dispatch(resetForgotPassword());
            navigate("/login");
          }}
          className="mt-5 w-full rounded-lg bg-slate-600 px-5 py-3 font-bold text-white"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
