import React from "react";
import "../css/Course.css";
// Banner
import Banner from "../components/Course/CoursesBanner";
// Container
import CourseListContainer from "../components/Course/CourseListContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
function Course() {
  useEffect(()=>{
    window.scroll({
      top:0,
      behavior:"instant"
    });
    
  },[])
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
