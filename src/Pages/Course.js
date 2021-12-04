import React from "react";
import "../css/Course.css";
// Banner
import Banner from "../components/Course/CoursesBanner";
// Container
import CourseListContainer from "../components/Course/CourseListContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";


function Course() {
  const [notUserMask,setNotUserMask] = useState("Course__Video__isntUser__Hidden")
  useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <nav>
        <Banner />
      </nav>
      <main className="container position-relative">
        <div className={`Course__isntUser ${notUserMask}`}>
          <div className="Course__Video__isntUser__Content">
            <div className="Course__Video__isntUser__Content__text mb-4 Course__isntUser__shadow">
              <h4 className="mb-4">您尚未成為會員，立即加入！</h4>
              <Link to="/login">
                <div className="Course__Video__isntUser__Content__button pointer">
                  加入會員
                </div>
              </Link>
            </div>
          </div>
        </div>
        <CourseListContainer />
      </main>
      <Footer />
    </div>
  );
}
export default Course;
