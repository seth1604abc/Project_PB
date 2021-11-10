import React from 'react'


const comment = () => {
    return (
        <>
            <div className="product__comment__card my-1 d-flex justify-content-between " >
                <div className="d-flex">
                    <div className="d-flex flex-column justify-content-center me-3">
                        <img src="https://via.placeholder.com/50" alt="" />
                        <p>chris hung</p>
                    </div>
                    <div className="d-flex flex-column justify-content-between me-3">
                        <h5>title</h5>
                        <p className="mb-3">4.5<i class="fas fa-star"></i></p>
                        <p>我覺得這個東西很棒</p>
                    </div>
                </div>
                
                <div className="align-self-end">
                    2021-11-22
                </div>
                
            </div>
        </>
    )
}

export default comment
