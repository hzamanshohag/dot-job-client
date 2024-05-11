

const CatagoryDetilsCard = ({name}) => {
    const { title, salary, url, Location} = name;
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
        
      </div>
    );
};

export default CatagoryDetilsCard;