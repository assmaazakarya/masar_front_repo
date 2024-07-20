import LessonBar from "../components/Lessons/LessonBar";
import LessonContent from "../components/Lessons/LessonContent";
// import Lessons from "../components/Lessons/Lessons";

function LessonDetails() {
  return (
    <div className=" py-4">
      <div className="row lesson-container">
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <div className="p-3">
            <LessonContent />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="p-3 ">
        

            <LessonBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDetails;
