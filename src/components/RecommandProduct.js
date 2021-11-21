import React from 'react'
import{useState,useEffect}from "react"
import { Link } from "react-router-dom";
import axios from "axios";
const RecommandProduct = ({productId,name,sold,part,price,rate,category}) => {
    return (
        <>
                <Link to="/product-single" className="recomandProductLink">
            <div className="RecommandProduct d-flex align-items-center mb-4 pe-5">
                <img src="https://via.placeholder.com/150" className="me-3" alt=""/>
                <div>
                    <h4 className="mb-2" >{name}</h4>
                    <p className="mb-2"><span className="RecommandProduct__part p-1 me-1">#{part}</span><span className="RecommandProduct__rating">4.5<i className="fas fa-star"></i></span></p>
                    <p>NT${price}</p>
                </div>
            </div>
                </Link>
        </>
    )
}

export default RecommandProduct
