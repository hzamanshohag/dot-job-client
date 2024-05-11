import { Link } from "react-router-dom";

const MyJobCard = ({ data, handleDelete }) => {
  const { url, title, _id } = data;
  return (
    <tr className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]">
      <th className="px-6 py-4 text-start">
        <img
          className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
          src={url}
        />
      </th>
      <th className="px-6 py-4 text-start ">{title}</th>
      <th className="px-6 py-4 text-start">
        <Link to={`/myjob/${_id}`}>
          <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="mr-2 h-6 w-6"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />{" "}
            </svg>
            Update
          </button>
        </Link>
      </th>
      <th className="px-6 py-4 text-start">
        <button
          onClick={() => handleDelete(_id)}
          className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mr-2 h-6 w-6"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />{" "}
          </svg>
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyJobCard;