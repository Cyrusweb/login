import React from "react";
function EmailVerification({ onClose }) {
  return (
    <main
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <section className="max-w-md mx-4 p-18 rounded-xl bg-[#0e0f12] ">
        <div className="text-center px-4 py-2">
          <h1 className=" mb-4 bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
            Check Your E-mail
          </h1>
          <p className="text-white font-Inter">
            Please check your email for a verification code to continue{" "}
            <span className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] bg-clip-text text-transparent">
              Resend
            </span>
          </p>
          <img
            src="/svg/undraw_mail_sent_re_0ofv 1.svg"
            alt="Email sent illustration"
            className="w-64 h-64 mx-auto mb-6"
          />
        </div>
      </section>
    </main>
  );
}

export default EmailVerification;
