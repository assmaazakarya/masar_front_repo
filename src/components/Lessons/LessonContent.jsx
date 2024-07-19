import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuBadgeCheck } from "react-icons/lu";
import ReactPlayer from "react-player/youtube";

function LessonContent() {
  const Learn = [
    "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
    "After the course you will be able to build ANY website you want.",
    "Work as a freelance web developer.",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
    "Build fully-fledged websites and web apps for your startup or business.",
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="p-4">
      <div className="mb-4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width="100%"
        />
      </div>
      <div className="border-bottom border-2 pb-3 mb-4">
        <h4>About This Course</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        {isExpanded && (
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>
        )}
        <button
          onClick={toggleExpand}
          className="btn btn-link text-decoration-none"
        >
          {isExpanded ? "Show Less" : "Show More"}
          <span className="ms-1">
            {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>
      <div className="border-bottom border-2 pb-3 mb-4">
        <h4>What You Will Achieve</h4>
        <div className="row">
          {Learn.map((item, index) => (
            <div
              key={index}
              className="col-lg-6 col-12 mb-2 d-flex align-items-center gap-2"
            >
              <LuBadgeCheck className="text-success flex-shrink-0" />
              <p className="m-0">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LessonContent;
