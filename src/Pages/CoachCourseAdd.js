import React from 'react'
import CoachLeftBar from '../components/CoachLeftBar'
import CoachCourseAddCard from '../components/CoachCourseAddCard'
// import Swal from "sweetalert2"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

 
function CoachCourseAdd() {

    return (
        <>
            <Navbar />
            <div className="member-container d-flex">
                <CoachLeftBar />
                <div>
                    <CoachCourseAddCard />
                </div>
            </div>
            <Footer />
        </>    
    )
}

export default CoachCourseAdd;