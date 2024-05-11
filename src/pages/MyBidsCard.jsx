const MyBidsCard = ({ bid, handleDelete }) => {
  const { jobName, jobPhoto, jobSalary, _id } = bid;

  return (
    <tr className="hover:bg-gray-50 border-b transition duration-300">
      <td className="py-4 px-4 flex justify-start">
        <img
          src={jobPhoto}
          alt="table navigate ui"
          className="h-16 w-16 object-cover bg-gray-300 rounded-full"
        />
      </td>
      <td className="py-4 px-6 border-b text-xl font-medium">{jobName}</td>
      <td className="py-4 px-6 border-b text-lg font-medium">{jobSalary}</td>
      <td className="py-4 px-6 border-b text-end">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyBidsCard;
