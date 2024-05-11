import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import { useContext } from "react";

const Addjob = () => {
  const { user } = useContext(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const catagory = form.job_catagory.value;
    const title = form.title.value;
    const email = form.email.value;
    const url = form.url.value;
    const date = form.date.value;
    const salary = form.salary.value;
    const Location = form.Location.value;
    const Level = form.Level.value;
    const Education = form.Education.value;
    const description = form.description.value;
    const newJob = {
      title,
      email,
      catagory,
      url,
      date,
      salary,
      Location,
      Level,
      Education,
      description,
    };
    axios
      .post("https://dot-job-server.vercel.app/job", newJob)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data.insertedId) {
          toast("New Job Post Successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white my-8 md:my-10">
        <form onSubmit={handleAddJob} className="p-12">
          <h1 className="backdrop-blur-sm text-4xl pb-8">Add Job</h1>
          <div className="space-y-5">
            <label className="block">Job title</label>
            <input
              type="text"
              placeholder="Job title"
              name="title"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <label className="block">User email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="User email"
              defaultValue={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex gap-6">
              <label className="block">Choose a catagory</label>
              <select name="job_catagory">
                <option value="graphics_design">Graphics Design</option>
                <option value="digital_marketing">Digital Marketing</option>
                <option value="web_development">Web Development</option>
              </select>
            </div>
            <label className="block">Photo url</label>
            <input
              type="text"
              placeholder=" Photo url"
              name="url"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <label className="block">Deadline</label>
            <input
              type="date"
              name="date"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <label className="block">Salary</label>
            <input
              type="text"
              placeholder="Salary"
              name="salary"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <label className="block">Job Location</label>
            <input
              type="text"
              name="Location"
              required
              placeholder="Job Location"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="block">Job Level</label>
            <input
              type="text"
              placeholder="Job Level"
              name="Level"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <label className="block">Education</label>
            <input
              type="text"
              name="Education"
              required
              placeholder="Education"
              className="input input-bordered w-full max-w-xs"
            />
            <label htmlFor="password" className="block">
              Short description
            </label>
            <textarea
              placeholder="Description"
              name="description"
              required
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="submit"
            className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Addjob;
