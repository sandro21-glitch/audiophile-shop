import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="block mb-[3rem] hover:underline text-text"
    >
      Go Back
    </button>
  );
};

export default BackBtn;
