import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/Container';

function BlogA(props) {
  return (
    <Container>
      <Block props={props} />
    </Container>
  );
}

function Block(props) {
  return (
    <section className="text-gray-700 body-font" id="xxxx">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://via.placeholder.com/720x400"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  دسته بندی
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  دسته اول
                </h1>
                <p className="leading-relaxed mb-3">
                  مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار
                  نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد
                  رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید
                  مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه
                  مداد رنگی جای خالی او با هیچ رنگی پر نشد، به یاد هم باشیم شاید
                  فردا ما هم در کنار هم نباشیم…{' '}
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    // href
                    className={`text-blue-400 inline-flex items-center md:mb-2 lg:mb-0`}
                  >
                    بیشتر
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                  </a>
                  <span className="text-gray-600 ml-3 inline-flex items-center lg:mr-auto md:ml-0 mr-auto leading-none text-sm pl-3 py-1 border-l-2 border-gray-300">
                    <svg
                      className="w-4 h-4 ml-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 ml-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3"></div>
          <div className="p-4 md:w-1/3"></div>
        </div>
      </div>
    </section>
  );
}

BlogA.defaultProps = {
  theme: 'indigo'
};

BlogA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default BlogA;
