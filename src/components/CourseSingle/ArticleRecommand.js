import React from 'react'

const ArticleRecommand = () => {
    return (
        <>

          <h2 className="Article__area__title pb-2 mb-3"><i className="fab fa-readme"></i> 精選文章</h2>
          {/* <hr /> */}
          <div className="d-flex p-3 article-card">
              <img src="https://via.placeholder.com/200x150" className="me-3" alt=""/>
              <div>
                  <h3 >文章標題</h3>
                  <p>文章概述...文章概述...文章概述...文章概述...文章概述...文章概述...文章概述...文章概述...文章概述...文章概述...文章概述...</p>
              </div>
          </div>
          
        </>
    )
}

export default ArticleRecommand
