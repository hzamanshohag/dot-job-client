import { FaCertificate } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#F1F2F4] px-8 py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center flex flex-col space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-black opacity-70 mb-2">
              #1 PLATFORM FOR JOBS
            </p>
            {/* Text content for the banner */}
            <div className=" text-black  mb-4">
              <h2 className="lg:text-5xl sm:text-4xl max-w-[800px] mx-auto text-3xl font-bold">
                Find Your <span className="text-[#EE7236]">Dream Job</span> That
                Suit With Exciting Opportunities
              </h2>
              <p className="sm:text-base text-sm text-black opacity-70 mb-8 mt-5">
                Embark on a journey towards your dream career, yousr ultimate
                job-finding companion! We&apos;ve curated
                <br />a platform that connects talented individuals with
                exciting opportunities.
              </p>
              {/* Explore and input field */}
              <div className="flex justify-center items-center sm:flex-row flex-col space-x-4 sm:space-y-0  space-y-3 mb-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black h-6 w-6 md:block hidden"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={2} x2={22} y1={12} y2={12} />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black h-6 w-6  md:block hidden"
                >
                  <g strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M16 11H14M16 16H14M8 11L9 12L11 10M8 16L9 17L11 15"
                      stroke="#000000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
                <div className="relative rounded-md shadow-sm lg:w-[400px] sm:w-[300px] w-full ">
                  <input
                    className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none"
                    placeholder="Job title, Salary, or Companies..."
                  />
                </div>
                <button className="inline-flex items-center justify-center  sm:w-auto w-full rounded-md text-sm font-medium  disabled:opacity-50 hover:bg-black/90 h-10 px-4 py-2 bg-black text-white">
                  Explore Now
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black h-6 w-6  md:block hidden"
                >
                  {" "}
                  <path d="M3 7V5c0-1.1.9-2 2-2h2" />{" "}
                  <path d="M17 3h2c1.1 0 2 .9 2 2v2" />{" "}
                  <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />{" "}
                  <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />{" "}
                  <rect width={7} height={5} x={7} y={7} rx={1} />{" "}
                  <rect width={7} height={5} x={10} y={12} rx={1} />{" "}
                </svg>
              </div>
            </div>
          </div>
          {/* Stats of the banner */}
          <div className="flex flex-wrap justify-center  lg:gap-20 md:gap-10  gap-10 items-center text-center">
            <div>
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 76.16 76.16"
                xmlSpace="preserve"
                stroke="#000000"
                strokeWidth="0.00076161"
                className="text-black h-12 w-12 mx-auto"
              >
                <g strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M62.943,20.161H13.216v-7.393h49.728V20.161z M13.216,46.369h19.712V26.657H13.216V46.369z M13.216,57.792h26.88 c-0.673-0.672-1.345-1.567-1.792-2.464H13.216V57.792z M13.216,51.969h23.52c-0.224-0.896-0.672-1.566-0.896-2.465H13.216V51.969z M41.664,29.121c0.896-0.896,2.016-1.792,3.137-2.464h-6.497v2.464H41.664z M13.216,63.393h34.72 c-1.567-0.672-2.912-1.567-4.479-2.465h-30.24V63.393z M75.936,49.504c-0.672,2.912-2.016,5.377-3.584,7.616l3.81,6.72V48.833 C76.16,49.057,76.16,49.281,75.936,49.504z M63.393,72.801l-0.449-1.121H8.96c-2.464,0-4.48-2.016-4.48-4.479V8.96 c0-2.464,2.016-4.479,4.48-4.479H67.2c2.464,0,4.479,2.017,4.479,4.479v21.728c0.896,0.896,1.566,2.019,2.238,3.139 c1.12,1.792,1.792,3.584,2.24,5.603V8.96C76.16,4.033,72.128,0,67.2,0H8.96C4.032,0,0,4.033,0,8.96v58.24 c0,4.928,4.032,8.96,8.96,8.96h56.448l-0.225-0.448L63.393,72.801z M40.768,52.865c-4.705-8.288-1.791-19.04,6.496-23.744 c8.289-4.704,19.041-1.792,23.743,6.496c4.929,8.288,2.017,19.04-6.271,23.743C56.225,64.289,45.695,61.376,40.768,52.865z M63.168,56.897c6.943-4.033,9.409-12.994,5.376-19.938c-4.032-6.942-12.991-9.405-19.937-5.376 c-6.943,4.034-9.407,12.994-5.375,19.938C47.264,58.465,56.225,60.928,63.168,56.897z M68.993,58.079l-7.565,4.367l5.822,10.088 l7.566-4.366L68.993,58.079z M68.096,73.92c1.121,2.016,3.811,2.688,5.824,1.568c2.016-1.12,2.688-3.809,1.568-5.824L68.096,73.92z " />{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">
                Live Jobs
              </p>
              <p className="md:text-2xl sm:text-xl text-base font-bold text-black">
                30000+
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black h-12 w-12 mx-auto"
              >
                {" "}
                <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />{" "}
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />{" "}
              </svg>
              <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">
                Daily Job Post
              </p>
              <p className="md:text-2xl sm:text-xl text-base font-bold text-black">
                5000+
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black h-12 w-12 mx-auto"
              >
                {" "}
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />{" "}
                <circle cx={9} cy={7} r={4} />{" "}
                <polyline points="16 11 18 13 22 9" />{" "}
              </svg>
              <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">
                People Get Hired
              </p>
              <p className="md:text-2xl sm:text-xl text-base font-bold text-black">
                25000+
              </p>
            </div>
            <div>
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black h-12 w-12 mx-auto"
              >
                <g strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z" />
                </g>
              </svg>
              <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">
                Companies
              </p>
              <p className="md:text-2xl sm:text-xl text-base font-bold text-black">
                1000+
              </p>
            </div>
          </div>
          {/* Some disclaimer for the banner */}
          <div className="flex justify-center mt-8 items-center flex-wrap gap-4 space-x-2">
            <p className="text-xs font-semibold">Product Manager</p>
            <p className="text-xs font-semibold">Frontend Dev</p>
            <p className=" text-xs font-semibold">Data Analyst</p>
          </div>
        </div>
      </section>

      {/* Top Catagory */}
      <section className="my-8 md:my-10">
        <div className="flex items-center justify-center">
          <h2 className="text-[#18191C] font-bold text-2xl md:text-4xl md:py-4">
            Top Catagory
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-10 md:gap-20 px-4 py-10 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
          <Link to="catagory/graphics_design">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 mb-4 text-purple-700"
              aria-hidden="true"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
              Graphics Design
            </h3>
          </Link>
          <Link to="catagory/digital_marketing">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 mb-4 text-purple-700"
              aria-hidden="true"
            >
              <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
            <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
              Digital Marketing
            </h3>
          </Link>
          <Link to="catagory/web_development">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 mb-4 text-purple-700"
              aria-hidden="true"
            >
              <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
            </svg>
            <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
              Web Development
            </h3>
          </Link>
        </div>
      </section>

      {/* Most Popular Vacancies */}
      <section className="px-8 py-12">
        <h2 className="text-[#18191C] font-bold text-2xl md:text-4xl md:py-4">
          Most Popular Vacancies
        </h2>
        <div className="grid gap-4 grid-rows-4 lg:grid-cols-4 md:grid-cols-2 py-4">
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Anesthesiologists
            </h2>
            <p className="text-[#767F8C]">45,904 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">Surgeons</h2>
            <p className="text-[#767F8C]">50,364 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Obstetricians-Gynecologists
            </h2>
            <p className="text-[#767F8C]">4,339 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">Orthodontists</h2>
            <p className="text-[#767F8C]">20,079 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Maxillofacial Surgeons
            </h2>
            <p className="text-[#767F8C]">74,875 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Software Developer
            </h2>
            <p className="text-[#767F8C]">43359 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">Psychiatrists</h2>
            <p className="text-[#767F8C]">18,599 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">Data Scientist</h2>
            <p className="text-[#767F8C]">28,200 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Financial Manager
            </h2>
            <p className="text-[#767F8C]">61,391 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Management Analysis
            </h2>
            <p className="text-[#767F8C]">93,046 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">IT Manager</h2>
            <p className="text-[#767F8C]">50,963 Open Positions</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-7">
              Operations Research Analysis
            </h2>
            <p className="text-[#767F8C]">16,627 Open Positions</p>
          </div>
        </div>
      </section>
      {/* How Dot Job Work */}
      <section className="bg-[#F1F2F4] px-8 py-12">
        <div className="flex items-center justify-center">
          <h2 className="text-[#18191C] font-bold text-2xl md:text-4xl md:py-4">
            How Dot Job Work
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border/10 mx-auto my-10  rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-6">
              <FaUser className="text-4xl"></FaUser>
              <h6 className="text-center font-medium text-slate-700 dark:text-white/80">
                Create account
              </h6>
              <p className="text-slate-500 text-center dark:text-white/60">
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </p>
            </div>
          </div>
          <div className="border/10 mx-auto my-10 rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-6">
              <FaCloudUploadAlt className="text-4xl"></FaCloudUploadAlt>
              <h6 className="text-center font-medium text-slate-700 dark:text-white/80">
                Upload CV/Resume
              </h6>
              <p className="text-slate-500 text-center dark:text-white/60">
                Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
              </p>
            </div>
          </div>
          <div className="border/10 mx-auto my-10 rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-6">
              <FaSearch className="text-4xl"></FaSearch>
              <h6 className="text-center font-medium text-slate-700 dark:text-white/80">
                Find suitable job
              </h6>
              <p className="text-slate-500 text-center dark:text-white/60">
                Phasellus quis eleifend ex. Morbi nec fringilla nibh.
              </p>
            </div>
          </div>
          <div className="border/10 mx-auto my-10 rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-6">
              <FaCertificate className="text-4xl"></FaCertificate>
              <h6 className="text-center font-medium text-slate-700 dark:text-white/80">
                Apply job
              </h6>
              <p className="text-slate-500 text-center dark:text-white/60">
                Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
                purus.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Testimonial */}
      <section className="bg-[#F1F2F4] px-8 py-12">
        <div className="flex items-center justify-center">
          <h2 className="text-[#18191C] font-bold text-2xl md:text-4xl md:py-4">
            Clients Testimonial
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-10">
          <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
            <p className="text-gray-600 dark:text-white">
              <span className="text-lg font-bold text-indigo-500">“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className="text-lg font-bold text-indigo-500">”</span>
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://www.tailwind-kit.com/images/person/1.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                  Jean Miguel
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                  Google Team
                  <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
            <p className="text-gray-600 dark:text-white">
              <span className="text-lg font-bold text-indigo-500">“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className="text-lg font-bold text-indigo-500">”</span>
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://www.tailwind-kit.com/images/person/1.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                  Jean Miguel
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                  Youtube Team
                  <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
            <p className="text-gray-600 dark:text-white">
              <span className="text-lg font-bold text-indigo-500">“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className="text-lg font-bold text-indigo-500">”</span>
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="https://www.tailwind-kit.com/images/person/1.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                  Jean Miguel
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                  Facebook Team
                  <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="my-8 md:my-10">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mx-auto">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-10">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Become a Candidate</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  cursus a dolor convallis efficitur.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Register now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-10">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://plus.unsplash.com/premium_photo-1682310169766-234aafa39c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHNpZ24lMjB1cHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Become a Employers</h2>
                <p>
                  Cras in massa pellentesque, mollis ligula non, luctus dui.
                  Morbi sed efficitur dolor. Pelque augue risus, aliqu.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary bg-[#F1F2F4] text-black">
                    Register now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="my-8 md:my-10">
        <div className="p-8 bg-white rounded-lg dark:bg-gray-800">
          <p className="text-[#18191C] font-bold text-2xl md:text-4xl md:py-4 text-center">
            Professional Team
          </p>
          <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
            Meat the best team in wolrd
          </p>
          <div className="flex gap-6 flex-col items-center md:flex-row justify evenly justify-center">
            <div className="p-4 shadow">
              <div className="mb-4 text-center opacity-90">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://www.tailwind-kit.com/images/person/1.jpg"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Patrick Sebastien
                </p>
                <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                  Developpeur
                </p>
                <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                  Patrick Sébastien, born November 14, 1953 in
                  Brive-la-Gaillarde, is an imitator.
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 shadow">
              <div className="mb-4 text-center opacity-90">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://www.tailwind-kit.com/images/person/1.jpg"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Jean Castux
                </p>
                <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                  Founder
                </p>
                <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                  Jean Castux is an imitator, humorist, actor, born November 14,
                  1953 in Pontivy.
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 shadow">
              <div className="mb-4 text-center opacity-90">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://www.tailwind-kit.com/images/person/1.jpg"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  Thierry Halliday
                </p>
                <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                  CTO
                </p>
                <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                  Thierry Halliday, born November 4, 1993 in Saint hilaire de
                  riez, is css specialist.
                </p>
              </div>
              <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
