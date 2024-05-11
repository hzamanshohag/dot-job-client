import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import { useLoaderData } from "react-router-dom";

const FindJobDetils = () => {
  const data = useLoaderData();
  const { url, title, salary, email } = data;

  const handleBid = (url, title, salary, email) => {
    const jobPhoto = url;
    const jobName = title;
    const jobSalary = salary;
    const jobEmail = email;

    const mybid = {
      jobPhoto,
      jobName,
      jobSalary,
      jobEmail,
    };
    axios
      .post("https://dot-job-server.vercel.app/mybids", mybid)
      .then((response) => {
        if (response.data.insertedId) {
          toast("Add to Bids Successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <article className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <img
            src={data.url}
            className="object-cover w-full h-96 bg-center rounded-lg"
          />
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
            {data.catagory}
          </p>
          <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            title="Rise of Tailwind - A Utility First CSS Framework"
          >
            {data.title}
          </h1>
          <div className="flex mb-6 space-x-2">
            <p
              className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
              href="#"
            >
              {data.Level}
            </p>
            <p
              className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
              href="#"
            >
              {data.date}
            </p>
            <p
              className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
              href="#"
            >
              {data.Education}
            </p>
            <p
              className="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
              href="#"
            >
              {data.salary}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Job Location: {data.Location}
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {data.email}
              </p>
            </div>
            <button
              onClick={() => handleBid(url, title, salary, email)}
              className="btn btn-outline"
            >
              Add To Bid
            </button>
          </div>
        </div>
        <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
          <p>{data.description}</p>
        </div>
      </article>
      <ToastContainer />
    </>
  );
};

export default FindJobDetils;
