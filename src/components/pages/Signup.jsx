import React, { useState } from "react";
// EmailVerifcation
import GoogleAuth from "../GoogleAuth";
import FacebookAuth from "./FacebookAuth";
import EmailVerifcation from "./EmailVerifcation";
import { Link } from "react-router-dom";

function Signup() {
  const [showVerification, setShowVerification] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowVerification(true);
  };

  const handleCloseVerification = () => {
    setShowVerification(false);
  };
  return (
    <main className="bg-[#0e0f12] md:px-20  px-1 lg:px-4 py-4 min-h-screen lg:grid grid-cols-2 gap-x-10">
      <section className="lg:bg-[#191821]  font-Inter flex flex-col gap-y-32  md:gap-y-44 rounded-[18px] px-4  py-3">
        <img src="/svg/Link (2).svg" alt="logo" className="w-28 " />
        <article>
          <div className="mb-8">
            <h1 className="bg-gradient-to-r font-[600] leading-[28px] from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
              Create an Account
            </h1>
            <header className="relative">
              <p className="text-white">
                Already have an account ?{" "}
                <Link to="/login">
                  <span className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
                    Log In
                  </span>
                </Link>
              </p>
            </header>
          </div>
          {showVerification && (
            <EmailVerifcation onClose={handleCloseVerification} />
          )}
          <form className="space-y-4">
            <div className="p-[1px] bg-gradient-to-r from-[#6857F6] rounded-full to-[#A549E2] ">
              <input
                type="text"
                className="w-full px-4 py-2 lg:bg-[#191821] bg-[#0e0f12]  rounded-full  placeholder:font-Inter placeholder:font-[400] placeholder:text-[16px] placeholder:text-white text-white    focus:outline-none"
                placeholder="Full Name"
              />
            </div>

            <div className="p-[1px] bg-gradient-to-r from-[#6857F6] rounded-full to-[#A549E2] ">
              <input
                type="text"
                className="w-full px-4 py-2 lg:bg-[#191821] bg-[#0e0f12]  rounded-full  placeholder:font-Inter placeholder:font-[400] placeholder:text-[16px] placeholder:text-white text-white    focus:outline-none"
                placeholder="Email"
              />
            </div>

            <div className="p-[1px] bg-gradient-to-r from-[#6857F6] rounded-full to-[#A549E2] ">
              <input
                type="text"
                className="w-full px-4 py-2 lg:bg-[#191821] bg-[#0e0f12]  rounded-full  placeholder:font-Inter placeholder:font-[400] placeholder:text-[16px] placeholder:text-white text-white    focus:outline-none"
                placeholder="password"
              />
            </div>

            <div className="flex items-center">
              <hr className="flex-1 h-px  border-[#A549E2]" />
              <p className="mx-4 text-white font-Inter">or register with</p>
              <hr className="flex-1 h-px border-[#A549E2]" />
            </div>
            {/* click test */}
            <div className="flex justify-center">
              <button
                onClick={handleSignupClick}
                type="submit"
                className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] text-white px-4 py-2 rounded-full w-full font-Inter"
              >
                Signup
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 mb-8">
              <GoogleAuth />
              <FacebookAuth />
            </div>
            <article className="flex items-center gap-x-2 ">
              <input type="checkbox" className="custom-checkbox" />
              <p className="text-white  leading-[24px]  text-[10px]">
                I agree to the{" "}
                <span className="underline">Terms of Service</span> and{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </article>
          </form>
        </article>
      </section>
      {/* section_2 */}
      <section className="px-4  py-3 mb-8  pr-4">
        <div className="">
          <p className="font-Inter text-white leading-[24px] mt-14 md:mt-0 mb-8  md:absolute font-[400] bottom-0 mb- pr-3 text-[16px]">
            “Job Seek transformed my freelancing experience! With secure crypto
            payments and a global client base, I can work with confidence from
            anywhere. Highly recommended!"
          </p>
        </div>
      </section>
    </main>
  );
}

export default Signup;
