import Link from 'next/link';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Services />
      <Featured />
      <Finisher />
    </Container>
  );
}

/// Page Sections
const Hero = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: '50vh'
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: "url('/assets/landing/bg.png')"
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div>
            <div>
              <h1 className="text-white font-semibold text-5xl">هومن امینی</h1>
            </div>

            <p className="mt-8 text-2xl text-gray-300 leading-loose">
              هدف از این وب سایت یادداشت‌های تخصصی و محتواهای آموزشی  <br />در رابطه با مهندسی و تولید نرم افزار، <br />خصوصاً مهارت ها و ترفندهای حوزه توسعه وب می‌باشد.
            </p>

          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: '70px', transform: 'translateZ(0)' }}
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
  </div >
);

const Services = () => (
  <section className="pb-20 dark:bg-black bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">

        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer">

          <a href="https://www.youtube.com/channel/UCIo-sKUGRl7C1IMpdui9McA?sub_confirmation=1" target="__blank">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="far fa-credit-card"></i>
                </div>
                <h6 className="text-xl font-semibold text-black dark:text-white">
                  فیلم های آموزشی
                </h6>
                <p className="mt-2 mb-4 text-gray-600 ">
                  فیلم های آموزشی ارایه شده
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center cursor-pointer">
          <Link href="/blog">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:text-white dark:bg-black w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-blog"></i>
                </div>
                <h6 className="text-black dark:text-white text-xl font-semibold">
                  وبلاگ
                </h6>
                <p className="mt-2 mb-4 text-gray-600 ">
                  ارائه گفتارها و مطالب آموزشی
                </p>
              </div>
            </div>
          </Link>
        </div>


        <div className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer">
          <Link href="/snippets">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-8 shadow-lg rounded-lg ">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fab fa-uikit"></i>
                </div>
                <h6 className="text-xl font-semibold text-black dark:text-white">
                  تکه کدها
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  کد های قابل استفاده مجدد
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            {/* <i className="fas fa-user-friends text-xl"></i> */}
            <img
              alt="..."
              src="/assets/landing/me.png"
              className="w-full align-middle rounded-t-lg"
            />

          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal text-black dark:text-white">
            درباره  من
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-white">
            بنده حدوده ۲۰ سال تجربه تولید و توسعه نرم افزار در حوزه های فرانت و بک اند و همچنین نگهداری دیتابیس‌ ها دارم  و دراینجا قصد دارم به مرور مواردی که کاربردی هستند و مورد علاقه خودم است را به تدریج منتشر نمایم که هم جنبه یادداشت شخصی دارد و اگر هم مورد استفاده همکاران و مخاطبین عزیز بشود باعث خوشحالی اینجانب می گردد.<br /> هر نوع همکاری و مشارکت در این زمینه باعث امتنان است و سورس کد این سایت در گیت هاب میباشد.
          </p>
          <a
            href="https://github.com/aminsource/hoomanamini"
            target="__blank"
            className="font-bold text-gray-800 dark:text-white mt-8"
          >
            لینک سورس در گیت هاب
          </a>

        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="..."
              src="/assets/landing/fanap.jpg"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4 mt-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: '95px',
                  top: '-94px'
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">محل فعالیت من</h4>
              <p className="text-md font-light mt-2 text-white">
                مجموعه فناپ - شرکت پرداخت الکترونیک پاسارگاد
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Featured = () => (
  <section className="relative py-20">
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
          className="text-white dark:text-black fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="/assets/landing/favorite.jpg"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mt-6 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold text-gray-600 dark:text-white">
              حوزه‌‌های مورد علاقه
            </h3>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      جاوااسکریپت
                    </h4>
                  </div>
                </div>
              </li>

              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      ری‌اکت و نکست‌ جی اس
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      پایتون
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      توسعه اپلیکیشن های اندروید
                    </h4>
                  </div>
                </div>
              </li>

              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      مشارکت در پروژه‌های اوپن سورس
                    </h4>
                  </div>
                </div>
              </li>

              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      تجارت الکترونیک
                    </h4>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const Finisher = () => (
  <section className="pb-20 relative block bg-gray-900">
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
          className="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div className="flex flex-wrap text-center justify-center">
        {/* <div className="w-full lg:w-6/12 px-4 mt-10">
          <h2 className="text-4xl font-semibold text-white">
            حوزه های تجربه شده من
          </h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            مشارکت و هم افزایی موتور توسعه
          </p>
        </div> */}
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-2 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="text-xl mt-5 font-semibold text-white">خدمات تخصصی</h6>
          <p className="mt-2 mb-4 text-gray-500">مشاوره تولید نرم افزار</p>
        </div>
      </div>
    </div>
  </section>
);
