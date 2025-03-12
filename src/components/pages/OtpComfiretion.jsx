import React, { useRef, useState, useEffect } from "react";

function OtpConfirmation({ onClose }) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [countdown, setCountdown] = useState(300);
  const inputs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onClose();
    }
  }, [countdown, onClose]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleChange = (index, value) => {
    const numericValue = value.replace(/\D/g, "");
    const newOtp = [...otp];
    newOtp[index] = numericValue.slice(-1);
    setOtp(newOtp);

    if (numericValue && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <main
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className=" md:px-12 py-10 px-4  mx-8  md:py-4 rounded-[20px] bg-[#0e0f12]"
      >
        <div className="text-center mb-6">
          <h1 className="mb-4 bg-gradient-to-r font-[600] leading-[28px] from-[#6857F6] text-[22px] to-[#A549E2] bg-clip-text text-transparent">
            Confirm E-mail
          </h1>
          <p className="text-white  text-[10px] ">
            Enter the 5-digit code sent to your email
          </p>
        </div>

        <form className="flex justify-center gap-4">
          {otp.map((digit, index) => (
            <div
              key={index}
              className="p-[1px] bg-gradient-to-r from-[#6857F6] rounded-[16px] to-[#A549E2]"
            >
              <input
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputs.current[index] = el)}
                className="w-12 h-12 bg-[#0e0f12] lg:bg-[#191821] rounded-[16px] text-white 
                  text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </form>
        <p className="text-white  text-[10px]  text-center mt-4">
          Send code again {formatTime(countdown)}
        </p>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] text-white px-4 py-2 rounded-full w-full font-Inter"
          >
            submit
          </button>
        </div>
      </section>
    </main>
  );
}

export default OtpConfirmation;
