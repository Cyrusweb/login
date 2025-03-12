import React from "react";
function EmailVerification({ onClose }) {
  return (
    <main
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <section className="max-w-md  mx-4 p-18  rounded-[20px] bg-[#0e0f12] ">
        <div className="text-center md:py-8 md:px-20  px-12 py-4">
          <h1 className=" mb-4 bg-gradient-to-r font-[600] leading-[28px] from-[#6857F6] text-[22px] to-[#A549E2] bg-clip-text text-transparent">
            Check Your E-mail
          </h1>
          <p className="text-white font-Inter text-[10px] font-[400]">
            Please check your email for a verification code to continue{"    "}
            <span className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
              Resend
            </span>
          </p>
          <figure>
            <img
              src="/svg/undraw_mail_sent_re_0ofv 1.svg"
              alt="Email sent illustration"
              className="w-40 h-40 md:w-32 md:h-32 mx-auto mb-6 mt-5 "
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

export default EmailVerification;
