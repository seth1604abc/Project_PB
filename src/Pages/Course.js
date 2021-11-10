import React from "react";
import "../css/Course.css";
// Banner
import Banner from "../components/Course/CoursesBanner";
// Container
import CourseListContainer from "../components/Course/CourseListContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Course() {
  return (
    <div>
      <Navbar />
      <nav>
        <Banner />
      </nav>
      <main className="container">
        <CourseListContainer />
      </main>
      <Footer />
    </div>
  );
}
export default Course;
