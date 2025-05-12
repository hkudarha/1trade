/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import { useEffect, useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import PageLoader from "../ui/PageLoader";
import { SwalError } from "../../utils/custom-alert";
import { registerUser, verifyOtp } from "../../api/auth-api";
import Swal from "sweetalert2";
import TextInput from "../ui/TextInput";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AuthRegisterForm = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91", // ✅ Added countryCode
    password: "",
    referredBy: "",
    lastname: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const referralCode = params.get("referral") || "";
    setPayload((prev) => ({ ...prev, referredBy: referralCode }));
  }, [search]);

  const handleNavigate = () => {
    navigate(AuthenticatedRoutes.USER_DASHBOARD);
    window.location.reload();
  };

  const handleSubmit = async () => {
    if (loading) return;
    try {
      setLoading(true);

      // ✅ Register user
      const response = await registerUser({
        name: payload.name,
        lastname: payload.lastname,
        mobile: `${payload.countryCode}${payload.mobile}`, // ✅ Send full number
        email: payload.email.trim().toLowerCase(),
        password: payload.password.trim(),
        referredBy: payload.referredBy?.trim(),
      });

      // ✅ OTP sent message
      await Swal.fire({
        icon: "success",
        title: "OTP Sent Successfully!",
        text: "Check your email for the OTP.",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      // ✅ OTP loop
      let verified = false;
      while (!verified) {
        const { value: otp } = await Swal.fire({
          title: "Enter OTP",
          input: "text",
          inputLabel: "Check your email and enter the OTP",
          inputPlaceholder: "Enter OTP here",
          showCancelButton: true,
          inputAttributes: {
            maxlength: 6,
            autocapitalize: "off",
            autocorrect: "off",
          },
        });

        if (!otp) {
          SwalError.fire({
            icon: "error",
            title: "No OTP entered",
            text: "Please enter the OTP to complete registration!",
          });
          return;
        }

        try {
          const otpResponse = await verifyOtp({
            email: payload.email,
            otp: otp,
          });

          localStorage.setItem("token", otpResponse.token);
          localStorage.setItem("role", "User");

          await Swal.fire({
            icon: "success",
            title: "Registration Complete!",
            text: "You have been successfully registered and verified!",
            timer: 2000,
            timerProgressBar: true,
          });

          verified = true;
          handleNavigate();
        } catch (otpError) {
          SwalError.fire({
            icon: "error",
            title: "Invalid OTP",
            text:
              otpError?.response?.data?.message ||
              "OTP is incorrect, please try again.",
          });
        }
      }
    } catch (error) {
      console.error(error);
      SwalError.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="mx-auto">
        <h5
          className="text-white text-center my-[3rem] mx-auto text-[2.0945rem] font-semibold leading-none font-sofia"
          data-aos="fade-up"
        >
          Welcome to{" "}
          <span className="text-[#45C66F] font-semibold text-[2.0945rem] leading-none font-sofia">
            1 Trade
          </span>
        </h5>

        <div className="bg-[#1e1f26] mx-auto p-4 rounded-[2rem] mb-20">
          <p className="text-center text-[1.5rem]">Enter Account Details</p>

          <div className="input-container">
            <TextInput
              value={payload.name}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter First Name"
            />
            <TextInput
              value={payload.lastname}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, lastname: e.target.value }))
              }
              placeholder="Enter Last Name"
            />
            <TextInput
              value={payload.email}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Email"
            />
            {/* phone number drop down  */}
            <div className="flex w-full justify-center items-center bg-[#1e1f26] rounded-xl px-3 py-2">
              <PhoneInput
                country="in"
                value={payload.countryCode + payload.mobile}
                onChange={(value, data) => {
                  const dialCode = "+" + data.dialCode;
                  const phoneNumber = value.replace(dialCode, "");

                  setPayload((prev) => ({
                    ...prev,
                    countryCode: dialCode,
                    mobile: phoneNumber,
                  }));
                }}
                inputStyle={{
                  width: "100%",
                  height: "14",
                  fontSize: "1.3rem",
                  fontWeight: "500",
                  backgroundColor: "#2a2b32",
                  color: "#fff",
                  borderRadius: "xl",
                  paddingLeft: "16",
                  border: "none",
                }}
                buttonStyle={{
                  backgroundColor: "#2a2b32",
                  border: "none",
                  width: "full",
                }}
                containerStyle={{
                  width: "100%",
                  maxWidth: "500px",
                  backgroundColor: "#2a2b32",
                }}
                dropdownStyle={{
                  backgroundColor: "#2a2b32",
                  color: "#fff",
                }}
                searchStyle={{
                  backgroundColor: "#2a2b32",
                  color: "#fff",
                }}
              />
            </div>

            <TextInput
              type="password"
              value={payload.password}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Create Password"
              className="!bg-[#2b2e39]"
            />
            <TextInput
              type="password"
              value={payload.password}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter Confirm Password"
              className="!bg-[#2b2e39]"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="adult" className="accent-green-500" />
              <label
                htmlFor="adult"
                className="text-lg font-semibold text-white"
              >
                I am an adult
              </label>
            </div>
          </div>

          <div className="btns w-full mt-4">
            <Button2
              onClick={handleSubmit}
              name={"Register"}
              disabled={loading}
              className="!bg-green-500"
            />
          </div>
        </div>

        <span className="accontTggle">
          Already have an account? <Link to={AuthRoutes.LOGIN}>Sign in</Link>
        </span>
      </div>
    </>
  );
};

export default AuthRegisterForm;
