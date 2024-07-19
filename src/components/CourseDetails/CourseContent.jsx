import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../../Styles/CourseDetailes.css";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegCirclePlay } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { GoQuestion } from "react-icons/go";
import { FaLock } from "react-icons/fa";
import { courses } from "./db";
import CourseCard from "../Common/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewCard from "../Common/ReviewCard";

function CourseContent() {
  const Learn = [
    "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
    "After the course you will be able to build ANY website you want.",
    "Work as a freelance web developer.",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
    "Build fully-fledged websites and web apps for your startup or business.",
  ];

  const Requirements = [
    "There are no skill prerequisites for this course although it's helpful if you are familiar with operating your computer and using the internet.",
    "You can take this course using a Mac, PC or LInux machine.",
    "It is recommended that you download the free Komodo text editor.",
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="d-flex flex-column gap-4 w-lg-75 ">
      <div className="d-lg-none flex-column gap-2">
        <div className="d-flex justify-content-center">
          <img
            src="/images/what-to-check-before-an-online-course-purchase.png"
            className=" h-50 w-75  "
            alt="Product"
          />
        </div>
        <div>
          <div className="d-flex flex-column w-100 my-2  mx-auto gap-2 mb-3">
            <button className="btn btn-outline-dark btn-hover">
              Add To Cart
            </button>
            <button className="btn btn-outline-dark btn-hover">Buy Now</button>
          </div>
          <p className="m-0 text-center">30 days Money Back Guarantee</p>
        </div>
      </div>
      <div className="border-bottom border-2 ">
        <h4>About This Course</h4>
        <p className="m-0">
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
          <p className="m-0">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>
        )}
        <button
          onClick={toggleExpand}
          className="btn btn-link-secondary border-0 text-btn"
        >
          {isExpanded ? "Show Less" : "Show More"}
          <span>
            {isExpanded ? (
              <IoIosArrowUp className="ms-1" />
            ) : (
              <IoIosArrowDown className="ms-1" />
            )}
          </span>
        </button>
      </div>
      <div className="border-bottom border-2">
        <h4>What You Will Achieve</h4>
        <div className="row">
          {Learn.map((item, index) => (
            <div
              key={index}
              className="col-lg-6 col-12 mb-2 d-flex align-items-center gap-2"
            >
              <LuBadgeCheck className="text-lg flex-shrink-0 " />
              <p className="m-0">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-bottom border-2">
        <h4>Requirement</h4>
        <ul className="d-flex flex-column gap-2">
          {Requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="d-flex flex-column gap-2">
        <h4>course content</h4>

        <div className="accordion " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="w-100 d-flex flex-column flex-lg-row align -lg-items-center justify-content-between mx-2">
                  <p className="m-0">Front-End Web Development</p>
                  <p className="m-0 ">
                    <span>3 Lectures</span> <span>.</span> <span>9 min</span>
                  </p>
                </div>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div>
                  <ul className="list-unstyled d-flex flex-column gap-4">
                    <li className="d-flex align-items-center fs-6 w-100 justify-content-between">
                      <div className="d-flex align-items-center gap-2  ">
                        <FaRegCirclePlay />
                        <p className="m-0">About The Course</p>
                      </div>
                      <div className="d-flex align-items-center gap-2  ">
                        <p className="m-0">1:20</p>
                        <p className="border border-1 border-danger m-0 p-1 text-danger">
                          Preview
                        </p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center fs-6 w-100 justify-content-between">
                      <div className="d-flex align-items-center gap-2  ">
                        <SiGoogledocs />
                        <p className="m-0">Tools introduction</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <p className="m-0">1:20</p>
                        <p className="border border-1 border-danger m-0 p-1 text-danger">
                          Preview
                        </p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center fs-6 w-100 justify-content-between ">
                      <div className="d-flex align-items-center gap-2  ">
                        <GoQuestion />

                        <p className="m-0">Basic Document Structure</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 ">
                        <p className="m-0">1:20</p>
                        <p className="border border-1 border-danger m-0 p-1 text-danger">
                          Preview
                        </p>
                        <p className="m-0">
                          <FaLock />
                        </p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-2 ">
                      <FaRegCirclePlay />
                      <p className="m-0">
                        HTML5 Foundations Certification Final Project
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <div className="w-100 d-flex flex-column flex-lg-row align -lg-items-center justify-content-between mx-2">
                  <p className="m-0">Front-End Web Development</p>
                  <p className="m-0">
                    <span>3 Lectures</span> <span>.</span> <span>9 min</span>
                  </p>
                </div>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                <div className="w-100 d-flex flex-column flex-lg-row align -lg-items-center justify-content-between mx-2">
                  <p className="m-0">Front-End Web Development</p>
                  <p className="m-0">
                    <span>3 Lectures</span> <span>.</span> <span>9 min</span>
                  </p>
                </div>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {courses.map((item, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h2 className="my-2">Reviews</h2>
      <div className="row">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="col-md-5  mb-3" key={index}>
            <ReviewCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseContent;
