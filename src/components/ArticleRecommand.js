import React from 'react'

const ArticleRecommand = () => {
    return (
        <>

          <h2 className="Article__area__title pb-2 mb-3 normalMouse"><i className="fab fa-readme"></i> 精選文章</h2>
          {/* <hr /> */}
          <div className="d-flex p-3 article-card">
              <img src="/articlepic.jpg" width="200px" height="150px" className="me-3" alt=""/>
              <div>
                  <h3 className="mb-3">RM、RPE、RIR什麼意思？剛開始重訓，該如何選擇適合自己的重量？ </h3>
                  <p style={{color:"#333"}}>我當初剛開始重訓時遇到的第一個困難就是：我啞鈴該拿多重？
等到我開始學習槓鈴訓練時又再次遇到一樣的問題：那我該放上幾公斤的槓片？
如果你也正在困擾 ，「到底該如何選擇適合自己的重量？」</p>
              </div>
          </div>
          
        </>
    )
}

export default ArticleRecommand
