import React from "react";
import GoogleAuth from "../GoogleAuth";
import FacebookAuth from "./FacebookAuth";

function Login() {
  return (
    <main className="bg-[#0e0f12] px-2 md:px-20 lg:px-4 py-4 min-h-screen lg:grid grid-cols-2 gap-x-10">
      <section className="lg:bg-[#191821]  font-Inter flex flex-col gap-y-32  md:gap-y-44 rounded-[18px] px-4  py-3">
        <img src="/svg/Link (2).svg" alt="logo" className="w-28 " />
        <article>
          <div className="mb-8">
            <h1 className="bg-gradient-to-r font-[600] mb-4 leading-[28px] from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
              welcome back
            </h1>
            <header className="relative">
              <p className="text-white">
                Didn’t have an account?{" "}
                <span className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
                  Signup
                </span>{" "}
              </p>
            </header>
          </div>

          <form className="space-y-4">
            {/* <input
              type="text"
              placeholder="Full Name"
              className="border border-[#A549E2] focus:outline-none bg-transparent placeholder:font-Inter placeholder:font-[400] placeholder:text-[16px] placeholder:text-white px-4 rounded-full py-2 w-full text-white"
            /> */}
            <input
              type="text"
              placeholder="Email"
              className="border border-[#A549E2] focus:outline-none bg-transparent placeholder:font-Inter placeholder:font-[400] placeholder:text-[16px] placeholder:text-white px-4 rounded-full py-2 w-full text-white"
            />
            <input
              type="text"
              placeholder="password"
              className="border border-[#A549E2] focus:outline-none bg-transparent placeholder:font-Inter placeholder:font-[400] placeholder:text-[16px] placeholder:text-white px-4 rounded-full py-2 w-full text-white"
            />

            <div className="flex items-center">
              <hr className="flex-1 h-px  border-[#A549E2]" />
              <p className="mx-4 text-white font-Inter">or register with</p>
              <hr className="flex-1 h-px border-[#A549E2]" />
            </div>

            <div className="grid grid-cols-2 gap-x-4 mb-8">
              <GoogleAuth />
              <FacebookAuth />
            </div>
            {/* <article className="flex items-center gap-x-2 ">
              <input type="checkbox" className="custom-checkbox" />
              <p className="text-white  leading-[24px]  text-[10px]">
                I agree to the{" "}
                <span className="underline">Terms of Service</span> and{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </article> */}
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

export default Login;
