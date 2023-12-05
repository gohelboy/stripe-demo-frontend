import "./success.css";
import { useNavigate, useLocation } from "react-router-dom";
import confirm from "../../assets/confirm.png";

const Success = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataParam = queryParams.get('data');
  const parsedData = JSON.parse(decodeURIComponent(dataParam));

  // Access the data as needed
  console.log(parsedData);

  return (
    <div className="success">
      <div className="title">
        <h1>Your payment accepted successfully</h1>
      </div>
      <div className="img">
        <img src={confirm} alt="confirm" />
      </div>
      <div className="back-btn">
        <button onClick={() => navigate("/", { replace: true })}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Success;
