import { Link } from "react-router-dom";

const FindJobCard = ({ job }) => {
  const { _id, title, salary, url, Location, Level } = job;
  return (
    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
      <img
        width={200}
        height={200}
        className="h-[275px] w-[350px] rounded-lg object-cover"
        src={url}
        alt="card navigate ui"
      />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{title}</h1>
        <h1 className="text-lg font-normal ">Location: {Location}</h1>
        <div className="text-lg font-semibold">Salary: {salary}</div>
      </div>
      <div className="flex gap-4">
        <p className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
          {Level}
        </p>
        <Link to={_id}>
          <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindJobCard;
