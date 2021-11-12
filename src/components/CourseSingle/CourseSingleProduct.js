import React from 'react'
import RecommandProduct from './RecommandProduct'

function CourseSingleProduct() {
  return (
    <>
      <div className="d-flex Article__area__title">
        <i class="fas fa-shopping-bag Course__area__icon p-2"></i>
        <h2>推薦商品</h2>
      </div>
      <RecommandProduct />
    </>
  )
}


export default CourseSingleProduct