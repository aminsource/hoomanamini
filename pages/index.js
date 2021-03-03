import Link from 'next/link';
import Container from '@/components/Container';
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Container>
      <Hero />
      <Services />
      <Favorite />
      {/* <Finisher /> */}
    </Container>
  );
}
const nameVariants = {
  hidden: {
    opacity: 0,
    x: '100'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
};


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
          <div
          >
            <motion.p className="mt-8 text-2xl text-gray-300 leading-loose" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}>
              هدف از این وب سایت یادداشت‌های تخصصی و محتواهای آموزشی  <br />در رابطه با مهندسی و تولید نرم افزار، <br />خصوصاً مهارت ها و ترفندهای حوزه توسعه وب می‌باشد.
            </motion.p>

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
          className="text-yellow-400 dark:text-black fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div >
);

const Services = () => (
  <section className="pb-20 dark:bg-black bg-yellow-400 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">

        <motion.div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer"
          whileHover={{ scale: 1.03, originX: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <a href="https://www.youtube.com/channel/UCIo-sKUGRl7C1IMpdui9McA?sub_confirmation=1" target="__blank">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto"
              >
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-300">
                  <i className="fas fa-video"></i>
                </div>
                <h6 className="text-xl font-semibold text-gray-600 dark:text-white">
                  فیلم های آموزشی
                </h6>
                <p className="mt-2 mb-4 text-gray-600 ">
                  فیلم های آموزشی ارایه شده
                </p>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div className="w-full md:w-4/12 px-4 text-center cursor-pointer"
          whileHover={{ scale: 1.03, originX: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/blog">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:text-white dark:bg-black  w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto border-purple-900">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-300">
                  <i className="fas fa-blog"></i>
                </div>
                <h6 className="text-gray-600 dark:text-white text-xl font-semibold">
                  وبلاگ
                </h6>
                <p className="mt-2 mb-4 text-gray-600 ">
                  ارائه گفتارها و مطالب آموزشی
                </p>
              </div>
            </div>
          </Link>
        </motion.div>


        <motion.div className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer"
          whileHover={{ scale: 1.03, originX: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/snippets">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-8 shadow-lg rounded-lg ">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-300">
                  <i className="fas fa-code"></i>
                </div>
                <h6 className="text-xl font-semibold text-gray-600 dark:text-white">
                  تکه کدها
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  کد های قابل استفاده مجدد
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-1 text-center inline-flex items-center justify-center w-30 h-30 mb-6 shadow-lg bg-gray-100">
            {/* <i className="fas fa-user-friends text-xl"></i> */}
            <img
              alt="..."
              src="/assets/landing/me.png"
              className="w-full align-middle rounded-t-lg"
            />

          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal text-white dark:text-white">
            درباره  من
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500 dark:text-white">
            بنده حدوده ۲۰ سال تجربه تولید و توسعه نرم افزار دارم  و دراینجا قصد دارم به مرور مواردی که کاربردی هستند و مورد علاقه خودم است را به تدریج منتشر نمایم که هم جنبه یادداشت شخصی دارد و اگر هم مورد استفاده همکاران و مخاطبین عزیز بشود باعث خوشحالی اینجانب می گردد.<br /> هر نوع همکاری و مشارکت در این زمینه باعث امتنان است و سورس کد این سایت در گیت هاب میباشد.
          </p>
          <a
            href="https://github.com/aminsource/hoomanamini"
            target="__blank"
            className="font-bold text-blue-400 dark:text-white mt-8"
          >
            لینک سورس در گیت هاب
          </a>

        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-indigo-200">
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
                  className="text-indigo-200 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-gray-600">محل فعالیت من</h4>
              <p className="text-md font-light mt-2 text-gray-600">
                مجموعه فناپ - شرکت پرداخت الکترونیک پاسارگاد
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Favorite = () => (
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
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mt-6 mb-6 shadow-lg rounded-full bg-indigo-200">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold text-gray-600 dark:text-white">
              حوزه‌‌های مورد علاقه
            </h3>
            <ul className="list-none mt-6">
              <li>
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl inline-block p-1 uppercase  text-indigo-200  ml-3">
                      <i className="fab fa-js-square"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      جاوااسکریپت
                    </h4>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl inline-block p-1 uppercase  text-indigo-200  ml-3">
                      <i className="fab fa-react"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      ری‌اکت و نکست‌ جی اس
                    </h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl inline-block p-1 uppercase  text-indigo-200  ml-3">
                      <i className="fab fa-python"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      پایتون و یادگیری ماشین
                    </h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl inline-block p-1 uppercase  text-indigo-200  ml-3">
                      <i className="fab fa-android"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      توسعه اپلیکیشن های اندروید
                    </h4>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl inline-block p-1 uppercase  text-indigo-200  ml-3">
                      <i className="fab fa-osi"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      مشارکت در پروژه‌های اوپن سورس
                    </h4>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <div>
                    <span className="text-4xl inline-block p-1 uppercase  text-indigo-200  ml-3">
                      <i className="fas fa-database"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600 dark:text-white">
                      نگهداری و بهینه سازی اوراکل
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
