import Layout from "../components/Layout";
import Link from "next/link";
const IndexPage = () => (
  <Layout title="مانا">
    <Hero />
    <Services />
    <Featured />
    <Team />
    <Finisher />
  </Layout>
);

export default IndexPage;

/// Page Sections
const Hero = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "75vh",
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558114965-eeb97aa84c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80')",
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
              پروژه بستر تجارت الکترونیک مانا
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              هدف از مانا ایجاد بستر اوپن سورس تجارت الکترونیک خصوصا فروشگاه
              اینترنتی به همراه بهره‌گیری از ابزار و سرویس های ارایه شده درایران
              بر پایه تکنولوژی های پیشرفته وب می باشد.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px", transform: "translateZ(0)" }}
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
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
);

const Services = () => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap cursor-pointer">
        <Link href="/blog">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-blog"></i>
                </div>
                <h6 className="text-xl font-semibold">وبلاگ</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  ارایه گفتارهای تخصصی نشانه تخصص هر کسب و کاری می باشد و یکی از
                  راه های حرفه ای جذب مشتری است که در بستر وبلاگ مانا ارایه می
                  گردد.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h6 className="text-xl font-semibold">فروشگاه اینترنتی</h6>
              <p className="mt-2 mb-4 text-gray-600">
                فروش و ارایه محصول هدف نهایی یک کسب و کار و یا بنگاه اقتصادی می
                باشد که در بستر فروشگاه اینترنتی مانا ارایه می گردد.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                <i className="fa fa-users"></i>
              </div>
              <h6 className="text-xl font-semibold">
                باشگاه و ارتباط با مشتریان
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                ارتباط با مشتری و ارایه خدمات پس از فروش بهترین راه بازاریابی و
                افزایش فروش خواهد بود که در بستر باشگاه مشتریان قابل ارایه است.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            همکاری در پروژه
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            از آنجاییکه مانا قرار است به صورت اوپن سورس ارایه گردد هرگونه همکاری
            تخصصی بر بستر گیت هاب موجب امتنان است.
          </p>
          <a href="" className="font-bold text-gray-800 mt-8">
            پروژه در گیت هاب را بررسی فرمایید.
          </a>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
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
      style={{ height: "80px", transform: "translateZ(0)" }}
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
          className="text-white fill-current"
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
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mt-6 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">تکنولوژی های پروژه</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              یکی از اهداف پروزه مانا استفاده از آخرین تکنولوژی های نرم افزاری
              روز دنیا در آن بوده است، لذا در از ابزار و بسترهای زیر در آن
              استفاده شده است.
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
                    <h4 className="text-gray-600">ری اکت و نکست جی اس</h4>
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
                    <h4 className="text-gray-600">تیل ویند Tailwind</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 ml-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      استرپی Headless CMS Strapi به عنوان بستر بک اند
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
            تیم ما در حال حاضر به شرح زیر می باشد و عضویت شما در تیم ما پذیرا
            خواهد بود و موجب شادی ما خواهد شد.
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
              <h5 className="text-xl font-bold">هومن امینی</h5>
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
      style={{ height: "80px", transform: "translateZ(0)" }}
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
          <h5 className="text-xl mt-5 font-semibold text-white">زمان ارایه</h5>
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
          <p className="mt-2 mb-4 text-gray-500">در حال حاضر ارایه نمی‌گردد</p>
        </div>
      </div>
    </div>
  </section>
);
