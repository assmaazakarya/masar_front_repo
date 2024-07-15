import { course } from "./db";
import RankStars from "../Common/RankStars";
import { MdGroups } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import "../../Styles/CourseDetailes.css";
function MainSection() {
  return (
    <div className="mt-8 mb-4 bg-main p-5">
      <div className="d-flex container col-md-10 mx-auto col-sm-8  flex-column col-12 gap-2">
        <h1 className="w-lg-75">{course.title}</h1>
        <p className="fs-5 font-monospace w-lg-75">
          Learn: {course.skills.join(" | ")}
        </p>
        <div className="d-flex flex-wrap align-items-center gap-2">
          <div className="d-flex align-items-center gap-2">
            <div>{course.rating}</div>
            <RankStars starNumber={course.rating} color="black" />
            <div className="text-sm">{`${course.reviews} reviews`}</div>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <MdOutlineOndemandVideo size={20} />
              <p className="m-0">{`${course.lessons} Lessons`}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <MdGroups size={20} />
              <p className="m-0">200 Students</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <AiOutlineFieldTime size={20} />
              <p className="m-0">Last Updated</p>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 ">
          <img className="rounded rounded-circle" src="/images/image 168.svg" />
          <p className="m-0">By : Omar Mostafa</p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
