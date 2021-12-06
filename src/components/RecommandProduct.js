import React from 'react'
import { Link } from "react-router-dom";
import {BODY_PARTS} from './BodyPartandLevelTable' 

const RecommandProduct = ({productId,name,sold,part,price,rate,category,image}) => {
    
    return (
        <>
                <Link to={`/product-single/${category}/${productId}`}
                  className="recomandProductLink">
            <div className="RecommandProduct d-flex align-items-center mb-4 pe-5">
                <img src={`/product_images/${image}`} className="me-3" style={{width:"150px",height:"150px"}} alt=""/>
                <div>
                    <h4 className="mb-2" >{name}</h4>
                    <p className="mb-2"><span className="RecommandProduct__part p-1 me-1"># {part==1?"營養品": BODY_PARTS[part]}</span><span className="RecommandProduct__rating">4.5<i className="fas fa-star"></i></span></p>
                    <p>NT${price}</p>
                </div>
            </div>
                </Link>
        </>
    )
}

export default RecommandProduct
