import Link from 'next/link';
import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Services />
      <Featured />
      <Team />
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
        backgroundImage: "url('/assets/landing/background.jpeg')"
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
            <h1 className="text-white font-semibold text-5xl">
              پروژه‌ کیت فرانت‌ فارسی مانا
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              هدف از مانا ایجاد کیت یا مجموعه‌ای از الگوها و کامپوننت های فارسی
              سازی شده جهت توسعه فرانت‌اند بر پایه تکنولوژی های پیشرفته وب به
              همراه محتواهای آموزشی می باشد.
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
  </div>
);

const Services = () => (
  <section className="pb-20 dark:bg-black bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer">
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
                  ارائه گفتارها و مطالب آموزشی در رابطه با توسعه فرانت اند وب و
                  ابزارهای بکار گرفته شده در مانا
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center cursor-pointer">
          <Link href="/templates">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="far fa-credit-card"></i>
                </div>
                <h6 className="text-xl font-semibold text-black dark:text-white">
                  الگوها
                </h6>
                <p className="mt-2 mb-4 text-gray-600 ">
                  الگوها، قالب‌ها و کامپوننت ها
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer">
          <Link href="/loyalty">
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
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal text-black dark:text-white">
            همکاری در پروژه
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-white">
            از آنجاییکه مانابه صورت اوپن سورس ارائه گردیده است، لذا هرگونه
            همکاری تخصصی بر بستر گیت هاب موجب امتنان است.
          </p>
          <a
            href="https://github.com/aminsource/mana"
            target="__blank"
            className="font-bold text-gray-800 dark:text-white mt-8"
          >
            پروژه در گیت هاب را بررسی فرمایید.
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="..."
              src="/assets/landing/collaborate.jpeg"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
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
              <h4 className="text-xl font-bold text-white">اسپانسر</h4>
              <p className="text-md font-light mt-2 text-white">
                در این راه هرگونه خدمات اسپانسری نیز بسیار دلگرم کننده است و
                پذیرفته می شود.
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
            src="/assets/landing/robot.jpeg"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mt-6 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold dark:text-white">
              تکنولوژی های پروژه
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-white">
              یکی از اهداف پروزه مانا استفاده از آخرین تکنولوژی های نرم افزاری
              روز دنیا در آن بوده است، لذا از ابزار و بسترهای زیر در آن استفاده
              شده است.
            </p>
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
                      تیل ویند Tailwind
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

const Team = () => (
  <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">تیم پروژه در حال حاضر</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            تیم ما در حال حاضر به شرح زیر می باشد و عضویت شما در این تیم باعث
            شادی ما خواهد شد.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            {/* <img
              alt="..."
              src={require("../public/assets/landing/team-1-800x800.jpg")}
              className="shadow-lg rounded-full max-w-full mx-auto"
              style={{ maxWidth: "120px" }}
            /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-black dark:text-white">
                هومن امینی
              </h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                ایجاد کننده و توسعه دهنده وب
              </p>
              <div className="mt-6">
                <a
                  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-3"
                  href="https://twitter.com/HoomanAmini"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="bg-red-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-3"
                  href="https://www.youtube.com/c/hoomanamini"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-3"
                  href="https://github.com/aminsource"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
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
        <div className="w-full lg:w-6/12 px-4 mt-10">
          <h2 className="text-4xl font-semibold text-white">
            مشارکت و هم افزایی موتور توسعه
          </h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            مشارکت و هم افزایی موتور توسعه
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">زمان ارائه</h5>
          <p className="mt-2 mb-4 text-gray-500">
            این پروژه به مرور تکمیل می شود و از زمان ایجاد آن قابل همکاری و
            استفاده توسط مخاطبین آن می باشد.
          </p>
        </div>

        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="text-xl mt-5 font-semibold text-white">خدمات تخصصی</h6>
          <p className="mt-2 mb-4 text-gray-500">در حال حاضر ارائه نمی‌گردد</p>
        </div>
      </div>
    </div>
  </section>
);
