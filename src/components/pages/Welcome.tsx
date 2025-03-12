import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="bg-[#0e0f12] md:px-20  px-1 lg:px-4 py-4 min-h-screen lg:grid grid-cols-2 gap-x-10">
      <section className="lg:bg-[#191821]  font-Inter flex flex-col gap-y-32  md:gap-y-44 rounded-[18px] px-4  py-3">
        <img src="/svg/Link (2).svg" alt="logo" className="w-28 " />
        <article>
          <div className="mb-8">
            <h1 className="bg-gradient-to-r mb-2 font-[600] leading-[28px] from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
              Welcome to Job Seek
            </h1>
            <p className="text-white font-Inter leading-[24px]  inline-block font-[400] text-[16px]">
              Let’s get you set up and ready to connect, collaborate, and
              succeed with secure, crypto-powered freelancing.
            </p>
          </div>
          <div className=" text-center text-white">
            {/* <Link to="/signup"> */}
            <Link to="/signup">
              <div className="p-[1px] bg-gradient-to-r mt-4 from-[#6857F6] rounded-full to-[#A549E2] ">
                <div className=" lg:bg-[#191821]  px-4 py-3  rounded-full  bg-[#0e0f12] ">
                  Sign Up As a Freelancer
                </div>
              </div>
            </Link>
            <Link to="/login">
              <div className="p-[1px] bg-gradient-to-r mt-4 from-[#6857F6] rounded-full to-[#A549E2] ">
                <div className=" lg:bg-[#191821]  px-4 py-3  rounded-full  bg-[#0e0f12] ">
                  Sign Up As a Client
                </div>
              </div>
            </Link>
          </div>
        </article>
        <footer className="relative">
          <p className="text-white">
            Already have an account ?{" "}
            <Link to="login">
              <span className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
                Log In
              </span>
            </Link>
          </p>
        </footer>
      </section>

      {/* section_2 */}
      <section className="px-4  py   pr-4">
        <div className="">
          <p className="font-Inter text-white leading-[24px] mt-14 lg:mt-0 mb-4   md:absolute font-[400] bottom-0 mb- pr-3 text-[16px]">
            “Job Seek transformed my freelancing experience! With secure crypto
            payments and a global client base, I can work with confidence from
            anywhere. Highly recommended!"
          </p>
        </div>
      </section>
    </main>
  );
}

export default Welcome;
