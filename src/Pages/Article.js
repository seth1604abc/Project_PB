import React from "react";
import "../css/Article.css";
import ArticleBanner from "../components/Article/ArticleBanner";
import ArticleNews from "../components/Article/ArticleNews";
import ArticleAuthor from "../components/Article/ArticleAuthor";
import ArticleList from "../components/Article/ArticleList";
import CoursesPageButton from "../components/Course/CoursesPageButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Article() {
  return (
    <div>
      <Navbar />
      <nav>
        <ArticleBanner />
      </nav>
      <main className="Article__width">
        <div className="mb-5">
          <ArticleNews />
        </div>
        <div className="mb-5 container">
          <h2 className="Article__area__title pb-2 mb-4">推薦作者</h2>
          <ArticleAuthor />
        </div>
        <div className="mb-5">
          <ArticleList />
        </div>
        <div className="mb-5">
          <CoursesPageButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Article;
