import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import MyJobCard from "./MyJobCard";
import axios from "axios";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState([]);
  const url = `https://dot-job-server.vercel.app/myjob/${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setJob(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const handleDelete = (id) => {
    const url = `https://dot-job-server.vercel.app/myjob/${id}`;
    axios
      .delete(url)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          alert("Delete Successfully!");
          const remaining = job.filter((bid) => bid._id !== id);
          setJob(remaining);
        }
      })
      .catch((error) => {
        console.error("Error in delete request:", error);
      });
  };

  return (
    <div className="overflow-x-auto py-6 md:py-10">
      <table className="min-w-full border border-gray-200 bg-white shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
            <th className="px-6 py-4 text-start">Photo</th>
            <th className="px-6 py-4 text-start">Job Title</th>
            <th className="px-6 py-4 text-start">Update</th>
            <th className="px-6 py-4 text-start">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {job.map((data) => (
            <MyJobCard
              key={data._id}
              data={data}
              handleDelete={handleDelete}
            ></MyJobCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyJob;
