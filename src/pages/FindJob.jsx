import FindJobCard from "./FindJobCard";
import { useLoaderData } from "react-router-dom";

const FindJob = () => {

    const data = useLoaderData();

    return (
      <div>
        <div className="hero md:py-6">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">All Job</h1>
            </div>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8">
          {data.map((job) => (
            <FindJobCard key={job._id} job={job}></FindJobCard>
          ))}
        </div>
      </div>
    );
};

export default FindJob;