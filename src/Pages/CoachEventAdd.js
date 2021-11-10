import React from 'react'
import CoachLeftBar from '../components/CoachLeftBar'
import CoachEventAddCard from '../components/CoachEventAddCard'
// import Swal from "sweetalert2"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

 
function CoachEventAdd() {

    return (
        <>
            <Navbar />
            <div className="member-container d-flex">
                <CoachLeftBar />
                <div className="m-4">
                  <CoachEventAddCard />
                </div>
            </div>
            <Footer />
        </>    
    )
}

export default CoachEventAdd;