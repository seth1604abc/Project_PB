import React from "react";
// 推薦作者
import ArticleAuthor from "../components/Article/ArticleAuthor";
// 大頭貼
import Membericon from "../components/MemberIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArticleSingle() {
  return (
    <>
      <Navbar />
      <div className="Article__width my-4">
        <div>
          <h1 className="fw-bold mt-5">這是文章標題</h1>
          <div className="d-flex align-items-center my-3">
            <div className="ArticleSingle__Coach__icon me-3">
              <Membericon />
            </div>
            <div className="me-3">Taylor Swift</div>
            <div>發佈日期：2015/10/20</div>
          </div>
          <div className="ArticleSingle__Article__image">
            <img src="./images/01.png" alt="" />
          </div>
          <div className="m-4">
            <p className="ArticleSingle__Article__content">
              中央流行疫情指揮中心發言人莊人祥今天表示，自購的AZ疫苗約59.4萬劑預定於今天晚間抵達桃園國際機場，待完成通關程序後，直接運送至指定冷儲物流中心進行後續檢驗封緘作業，再提供COVID-19接種計畫所列實施對象接種。莊人祥說，此批效期至今年11月30日，預計在第14輪疫苗供民眾接種。
              政府自購1000萬劑AZ疫苗，今天將有第13批59.4萬劑抵台，目前共計到貨約712萬劑。莊人祥說，這批效期至今年11月30日，預計在第14輪疫苗供民眾接種。
            </p>
            <p className="ArticleSingle__Article__content">
              至於為何這批AZ疫苗到貨效期短，莊人祥則說，因目前全球疫苗仍處於搶貨階段，指揮中心是針對國內疫苗接種量能來訂購。他也透露，原本AZ疫苗將提供更多量，但指揮中心評估在11月底前無法全數接種完畢，因此最後訂購59.4萬劑，待完成檢驗封緘程序後將加緊接種。
            </p>
            <p className="ArticleSingle__Article__content">
              指揮中心指出，指揮中心於去年10月30日與台灣阿斯特捷利康公司簽署1000萬劑COVID-19疫苗供應合約，截至目前總計已約712萬劑到貨，分別為3月3日11.7萬劑、7月7日62.6萬劑、7月15日56萬劑、7月27日58.2萬劑、8月12日52.4萬劑、8月27日26.5萬劑、8月31日59.5萬劑、9月10日45.8萬劑、9月17日64萬劑、9月30日65.6萬劑、10月13日136萬劑、11月4日14.2萬劑，及本次提供第十三批59.4萬疫苗。本次提供的疫苗係為多劑型包裝（每瓶10人份），需存放於2-8℃的環境，依臨床試驗每人需施打2劑。
            </p>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="Article__area__title mb-4 pb-2">作者簡介</h2>
          <ArticleAuthor />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleSingle;
