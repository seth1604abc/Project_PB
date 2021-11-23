import React from 'react'
import { useState,useEffect } from 'react'

const comment = (props) => {
    
    return (
        <>
            <div className="product__comment__card my-1 d-flex justify-content-between " >
                <div className="d-flex">
                    <div className="d-flex flex-column justify-content-center me-3">
                        <img src="https://via.placeholder.com/50" alt="" />
                        <p>{props.name}</p>
                    </div>
                    <div className="d-flex flex-column justify-content-between me-3">
                        <h5>title</h5>
                        <p className="mb-3">{props.rate}<i class="fas fa-star"></i></p>
                        <p>{props.content}</p>
                    </div>
                </div>
                
                <div className="align-self-end">
                    {props.createdTime}
                </div>
                
            </div>
        </>
    )
}

export default comment
