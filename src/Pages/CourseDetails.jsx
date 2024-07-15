import BuyCard from "../components/CourseDetails/BuyCard";
import CourseContent from "../components/CourseDetails/CourseContent";
import MainSection from "../components/CourseDetails/MainSection";
import "../Styles/CourseDetailes.css"; // Assuming you have a CSS file for CourseDetails-specific styles

function CourseDetails() {
  return (
    <div className="course-details relative">
      <MainSection />

      <div className="container my-4">
        <CourseContent />
        <div className="buy-card-container position-absolute top-0 end-0 w-25">
          <BuyCard />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
