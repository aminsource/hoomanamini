import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6 dark:bg-black">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: '80px', transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 dark:text-black fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-black dark:text-white">
              تماس
            </h4>
            <h5 className="text-lg mt-3 mb-2 text-gray-700 dark:text-white">
              از روش های زیر می توانید با ما من در تماس باشید.
            </h5>
            <div className="mt-6">
              <div className="flex justify-evenly">
                <div>
                  <a
                    className="bg-green-400 text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 p-3 rounded-md"
                    href="https://api.whatsapp.com/send/?phone=989123049506&text&app_absent=0"
                    target="_blank"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>

                <div>
                  <a
                    className="bg-blue-400 text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 p-3 rounded-md"
                    href="https://twitter.com/HoomanAmini"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div>
                  <a
                    className="bg-red-500 text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 p-3 rounded-md"
                    href="https://www.youtube.com/c/hoomanamini"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div>
                  <a
                    className="bg-black text-white w-8 h-8 outline-none focus:outline-none mr-1 mb-1 p-3 rounded-md"
                    href="https://github.com/aminsource"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 dark:text-white text-sm font-semibold mb-2 mt-5">
                  لینک های مفید
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 dark:text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      نکست جی اس
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 dark:text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      ری‌اکت
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 dark:text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      تیل ویند
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 dark:text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      گیت هاب
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mt-5">
                <span className="block uppercase text-gray-600 dark:text-white text-sm font-semibold mb-2">
                  منابع دیگر
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 dark:text-white hover:text-gray-900  font-semibold block pb-2 text-sm"
                      href=""
                    >
                      مجوز MIT
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 dark:text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      شرایط و ضوابط
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              کپی رایت © ۱۳۹۹ .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
