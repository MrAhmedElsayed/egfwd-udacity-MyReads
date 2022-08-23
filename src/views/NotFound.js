import React from "react";

const NotFound = () => {
  return (
    <section className="bg-indigo-50 py-[120px] relative z-10">
      <div className="container">
        <div className="flex -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className=" font-bold text-indigo-500 mb-2 text-[50px] sm:text-[80px] md:text-[100px] leading-none ">
                404
              </h2>
              <h4 className="text-indigo-400 font-semibold text-[22px] leading-tight mb-3">
                Oops! That page can’t be found
              </h4>
              <p className="text-lg text-indigo-300 mb-8">
                The page you are looking for it maybe deleted
              </p>

              <a
                href="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Go To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
      >
        <div className="w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        <div className="w-1/3 h-full flex">
          <div
            className="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
          ></div>
          <div
            className="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
          ></div>
        </div>
        <div className="w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
      </div>
    </section>
  );
};

export default NotFound;
