import { FaMicrophoneLines } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import "./BuyCard.css"; // Assuming you have a separate CSS file for custom styles

function BuyCard() {
  return (
    <div className="card border-1 w-100 border-dark  shadow-sm h-100 d-lg-flex flex-column gap-2 p-3 d-none">
      <div className="image-container mb-3">
        <img
          src="/images/image 168.svg"
          className="card-img-top w-100"
          alt="Course"
        />
      </div>
      <ul className="list-unstyled mb-3">
        <li className="d-flex align-items-center gap-2 mb-2">
          <FaMicrophoneLines />
          <p className="m-0">English</p>
        </li>
        <li className="d-flex align-items-center gap-2 mb-2">
          <PiExamFill />
          <p className="m-0">
            Exercises and Quizzes to help you put theory into practice
          </p>
        </li>
        <li className="d-flex align-items-center gap-2 mb-2">
          <FaMobileAlt />
          <p className="m-0">Access on mobile and desktop</p>
        </li>
        <li className="d-flex align-items-center gap-2 mb-2">
          <MdElectricBolt />
          <p className="m-0">Full Time Access</p>
        </li>
        <li className="d-flex align-items-center gap-2 mb-2">
          <LiaCertificateSolid />
          <p className="m-0">Certification on Complete</p>
        </li>
      </ul>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="m-0">
          <span className="text-decoration-line-through">$240</span>
          <span> </span>
          <span>$120</span>
        </p>
        <p className="m-0 text-success">50% off</p>
      </div>
      <div className="d-flex flex-column gap-2 mb-3">
        <button className="btn btn-outline-dark btn-hover">Add To Cart</button>
        <button className="btn btn-outline-dark btn-hover">Buy Now</button>
      </div>
      <p className="m-0 text-center">30 days Money Back Guarantee</p>
    </div>
  );
}

export default BuyCard;
