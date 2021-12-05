import React from 'react'
import Moment from 'react-moment';

const comment = (props) => {
    
    return (
        <>
            <div className="product__comment__card my-1 d-flex justify-content-between " >
                <div className="d-flex">
                    <div className="d-flex flex-column justify-content-center me-3">
                        <img src={`/image/${props.image}`} width="50px" height="50px" alt="" />
                        <p>{props.name}</p>
                    </div>
                    <div className="d-flex flex-column justify-content-between me-3">
                        <p className="mb-3">{props.rate}<i class="fas fa-star" style={{color:"rgb(253, 211, 22)"}}></i></p>
                        <p>{props.content}</p>
                    </div>
                </div>
                
                <div className="align-self-end">
                <Moment format="YYYY-MM-DD">{props.createdTime}</Moment>
                    
                </div>
                
            </div>
        </>
    )
}

export default comment
