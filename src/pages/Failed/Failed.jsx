import "./failed.css";
import { useNavigate } from "react-router-dom";
import cancel from "../../assets/cancel.png";

const Failed = () => {
  const navigate = useNavigate();

  return (
    <div className="failed">
      <div className="title">
        <h1>Your payment process failed</h1>
      </div>
      <div className="img">
        <img src={cancel} alt="cencel" />
      </div>
      <div className="back-btn">
        <button onClick={() => navigate("/", { replace: true })}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Failed;
