import React from 'react'

function ProductCard() {
    return (
        <>
             <div class="card mx-4 mb-5">
                    {/* <div className="card__crown"><i class="fas fa-crown"></i></div>
                    <p className="card__ranking">1</p> */}
                    <img src="https://via.placeholder.com/200x150/333/FFECD2/?text=picture" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <div className="card__price">$599</div>
                    <h5 className="card-title">八公斤啞鈴組  <span className="card-title__star">4.5<i class="fas fa-star"></i></span></h5>
                    <div className="card__part">部位</div>
                    <p className="card__sold text-end">售出102</p>
                    
                </div>
                </div>
        </>
    )
}

export default ProductCard
