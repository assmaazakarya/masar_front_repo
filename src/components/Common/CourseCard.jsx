import { MdGroups, MdOutlineOndemandVideo } from "react-icons/md";
import "./Common.css";
import RankStars from "./RankStars";
import { AiOutlineFieldTime } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function CourseCard({ name, instructor, rating, price, imageUrl, lessons }) {
  return (
    <div className="card shadow-sm  h-100">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={name}
          className="card-img-top fixed-height-image"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate" title={name}>
          {name}
        </h5>
        <p className="card-text text-truncate" title={instructor}>
          {instructor}
        </p>
        <div className="d-flex align-items-center mb-2">
          <RankStars starNumber={rating} color={"black"} />
          <p className="m-0 ms-2">{rating} (143,983)</p>
        </div>
        <p className="fw-bold mt-auto">£{price}</p>
      </div>
      <div className="card-footer bg-white">
        <div className="d-flex flex-wrap align-items-center gap-2">
          <div className="d-flex align-items-center gap-2">
            <MdOutlineOndemandVideo size={15} />
            <p className="m-0 fs-6">{`${lessons} Lessons`}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <MdGroups size={20} />
            <p className="m-0">200 Students</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <AiOutlineFieldTime size={20} />
            <p className="m-0">Updated at</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
