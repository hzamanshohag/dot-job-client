import CatagoryDetilsCard from "./CatagoryDetilsCard";
import { useLoaderData } from "react-router-dom";

const CatagoryDetils = () => {

  const data = useLoaderData();
    return (
      <div>
        <div className="hero md:py-6">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">
                Catagory: {data[0]?.catagory}
              </h1>
            </div>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8">
          {data.map((name) => (
            <CatagoryDetilsCard key={name._id} name={name}></CatagoryDetilsCard>
          ))}
        </div>
      </div>
    );
};

export default CatagoryDetils;