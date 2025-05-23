/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import { registerUser, verifyOtp } from "../../api/auth-api";
import { SwalError } from "../../utils/custom-alert";
import PageLoader from "../ui/PageLoader";
import { Button2 } from "../ui/Buttons";
import TextInput from "../ui/TextInput";
import Swal from "sweetalert2";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AuthRegisterForm = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    password: "",
    confirmPassword: "",
    referredBy: "",
    isAdult: false,
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

    // ✅ Basic front-end validation
    if (!payload.name || !payload.lastname || !payload.email || !payload.mobile || !payload.password || !payload.confirmPassword) {
      SwalError.fire({ icon: "error", title: "Missing Fields", text: "Please fill in all required fields." });
      return;
    }

    if (payload.password !== payload.confirmPassword) {
      SwalError.fire({ icon: "error", title: "Password Mismatch", text: "Passwords do not match." });
      return;
    }

    if (!payload.isAdult) {
      SwalError.fire({ icon: "error", title: "Age Confirmation Required", text: "You must confirm you're an adult." });
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        name: payload.name,
        lastname: payload.lastname,
        mobile: `${payload.countryCode}${payload.mobile}`,
        email: payload.email.trim().toLowerCase(),
        password: payload.password.trim(),
        referredBy: payload.referredBy?.trim(),
      });

      await Swal.fire({
        icon: "success",
        title: "OTP Sent Successfully!",
        text: "Check your email for the OTP.",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

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
          SwalError.fire({ icon: "error", title: "No OTP entered", text: "Please enter the OTP to complete registration!" });
          return;
        }

        try {
          const otpResponse = await verifyOtp({ email: payload.email, otp });
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
            text: otpError?.response?.data?.message || "OTP is incorrect, please try again.",
          });
        }
      }
    } catch (error) {
      SwalError.fire({
        icon: "error",
        title: "Registration Failed",
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
        <h5 className="text-white text-center my-12 text-3xl font-semibold font-sofia" data-aos="fade-up">
          Welcome to <span className="text-[#45C66F]">1 Trade</span>
        </h5>

        <div className="bg-[#1e1f26] max-w-xl mx-auto p-6 rounded-[2rem] mb-20">
          <p className="text-center text-2xl mb-4">Enter Account Details</p>

          <div className="input-container space-y-2">
            <TextInput
              value={payload.name}
              onChange={(e) => setPayload((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Enter First Name"
            />
            <TextInput
              value={payload.lastname}
              onChange={(e) => setPayload((prev) => ({ ...prev, lastname: e.target.value }))}
              placeholder="Enter Last Name"
            />
            <TextInput
              value={payload.email}
              onChange={(e) => setPayload((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="Enter Email"
            />

            {/* PhoneInput with full width and styling */}
            {/* <div className="w-full">
              <PhoneInput
                country={'in'}
                value={payload.mobile}
                onChange={(value, country) =>
                  setPayload((prev) => ({
                    ...prev,
                    mobile: value.replace(`+${country.dialCode}`, ""),
                    countryCode: `+${country.dialCode}`,
                  }))
                }
                inputStyle={{
                  backgroundColor: '#2b2e39',
                  color: 'white',
                  width: '100%',
                  height: '48px',
                  border: 'none',
                  borderRadius: '0.5rem',
                  paddingLeft: '50px',
                }}
                containerStyle={{
                  width: '100%',
                }}
                buttonStyle={{
                  backgroundColor: '#2b2e39',
                  border: 'none',
                  borderTopLeftRadius: '0.5rem',
                  borderBottomLeftRadius: '0.5rem',
                }}
              />
            </div> */}

            <TextInput
              type={"number"}
              value={payload.mobile}
              onChange={(e) => setPayload((prev) => ({ ...prev, mobile: e.target.value }))}
              placeholder="Enter phone number"
            />


            <TextInput
              type="password"
              value={payload.password}
              onChange={(e) => setPayload((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="Create Password"
              className="!bg-[#2b2e39]"
            />
            <TextInput
              type="password"
              value={payload.confirmPassword}
              onChange={(e) => setPayload((prev) => ({ ...prev, confirmPassword: e.target.value }))}
              placeholder="Confirm Password"
              className="!bg-[#2b2e39]"
            />


          </div>
          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              id="adult"
              className="accent-green-500"
              checked={payload.isAdult}
              onChange={(e) => setPayload((prev) => ({ ...prev, isAdult: e.target.checked }))}
            />
            <label htmlFor="adult" className="text-lg font-semibold text-white">
              I am an adult
            </label>
          </div>


          <div className="btns w-full mt-6">
            <Button2
              onClick={handleSubmit}
              name={"Register"}
              disabled={loading}
              className="!bg-green-500"
            />
          </div>

          <p className="text-white text-center mt-4 text-lg font-semibold font-sofia">
            Already have an account? &nbsp;
            <Link
              to={AuthRoutes.LOGIN}
              className="text-[#45C66F] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthRegisterForm;
