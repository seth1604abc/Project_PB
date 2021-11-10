import React from 'react'
import CoachLeftBar from '../components/CoachLeftBar'
import CoachEventEditCard from '../components/CoachEventEditCard'
// import Swal from "sweetalert2"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

 
function CoachEventEdit() {

    return (
        <>
            <Navbar />
            <div className="member-container d-flex">
                <CoachLeftBar />
                <div>
                  <CoachEventEditCard />
                </div>
            </div>
            <Footer />
        </>    
    )
}

export default CoachEventEdit;