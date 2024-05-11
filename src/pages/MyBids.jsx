import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthProvider";
import MyBidsCard from "./MyBidsCard";
import axios from "axios";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    const url = `https://dot-job-server.vercel.app/mybids/${id}`;
    axios
      .delete(url)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          alert("Delete Successfully!");
          const remaining = data.filter((bid) => bid._id !== id);
          setData(remaining);
        }
      })
      .catch((error) => {
        console.error("Error in delete request:", error);
      });
  };
  const url = `https://dot-job-server.vercel.app/mybids/${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return (
    <div className="overflow-x-auto py-6 md:py-10">
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#141B29] text-[#FFFFFF]">
            <th className="py-4 px-6 text-lg text-left border-b">Photo</th>
            <th className="py-4 px-6 text-lg text-left border-b">Job Title</th>
            <th className="py-4 px-6 text-lg text-left border-b">Salary</th>
            <th className="py-4 px-6 text-lg border-b text-end">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bid) => (
            <MyBidsCard
              key={bid._id}
              bid={bid}
              handleDelete={handleDelete}
            ></MyBidsCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
