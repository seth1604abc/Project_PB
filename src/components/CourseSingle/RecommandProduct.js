import React from 'react'

const RecommandProduct = () => {
    return (
        <>
            <div className="RecommandProduct d-flex align-items-center mb-4 pe-3">
                <img src="https://via.placeholder.com/150" className="me-3" alt=""/>
                <div>
                    <h3 className="mb-2" >推薦商品名</h3>
                    <p className="mb-2"><span className="RecommandProduct__part p-1 me-1">#部位</span><span className="RecommandProduct__rating">4.5<i className="fas fa-star"></i></span></p>
                    <p>NT$1250</p>
                </div>
            </div>
        </>
    )
}

export default RecommandProduct
