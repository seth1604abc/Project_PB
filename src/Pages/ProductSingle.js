import React from "react";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import "../css/ProductSingle.css";
import "../css/Article.css";
import "../css/Course.css";
import RecommandProduct from "../components/RecommandProduct";
import ArticleRecommand from "../components/ArticleRecommand";
import CourseSingleHitCourse from "../components/CourseSingle/CourseSingleHitCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductSingle = () => {
  //拿url傳的資料
  const { category, productId,part } = useParams();
  const history=useHistory();
  const location = useLocation();
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(async () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
    //確認登入
    let res = await axios.get("http://localhost:3001/auth/login", {
      withCredentials: true,
    });
    if (res.data.userId!=="") {
      setIsLoggedin(true);}
    //取得推薦商品
    let recommandProduct = await axios.get(
      `http://localhost:3001/product/recommand-product/${category}}/${productId}`,
      {
        withCredentials: true,
      }
    );

    

    let product = await axios.get(
      `http://localhost:3001/product/${productId}`,
      {
        withCredentials: true,
      }
    );
    //取得商品圖片
    let productImages = await axios.get(
      `http://localhost:3001/product/all-images/${productId}`,
      {
        withCredentials: true,
      }
    );
    //取得商品留言
    let productComment = await axios.get(
      `http://localhost:3001/product/comments/${productId}`,
      {
        withCredentials: true,
      }
    );
    //取得留言數量
    let commentNumber= await axios.get(
      `http://localhost:3001/product/comments-number/${productId}`,
      {
        withCredentials: true,
      }
    )
    setCommentCount(commentNumber.data[0])
    setComments(productComment.data);
    setProductImages(productImages.data);
    setProductData(product.data[0]);
    setRProduct(recommandProduct.data);
    setShowText(product.data[0].intro);
    console.log(productComment.data);
    console.log(recommandProduct.data);
    console.log(product.data[0]);
    console.log(recommandProduct.data);
    let newList = [productData.intro, productData.detail];
    const show = newList;

    
  }, [location]);

  //商品留言
  const [comments, setComments] = useState([]);
  const cList = comments.map((comment) => {
    return (
      <Comment
        content={comment.content}
        name={`${comment.first_name}${comment.last_name}`}
        rate={comment.rate}
        createdTime={comment.created_at}
        user_id={comment.user_id}
        product_id={comment.product_id}
        image={comment.image}
      />
    );
  });
  //留言數量
  const [commentCount,setCommentCount]=useState({})
  //商品圖片
  const [productImages, setProductImages] = useState([]);

  //拿商品資料
  const [productData, setProductData] = useState({});

  //推薦商品資料
  const [rProduct, setRProduct] = useState([]);
  const rList = rProduct.map((product) => {
    return (
      <RecommandProduct
        productId={product.product_id}
        name={product.title}
        sold={product.sold}
        part={product.body_part_id}
        price={product.price}
        rate={product.average_rate}
        category={product.product_type_id}
        image={product.name}
      />
    );
  });

  //拿介紹文字
  const text = ["介紹", "規格"];
  let show = [productData.intro, productData.detail];
  const [showText, setShowText] = useState(show[0]);

  //記數量
  const [number, setNumber] = useState(1);
  const handleClick = (i) => {
    if (i === 0) {
      if (number === 1) {
        return;
      }
      setNumber(number - 1);
    }
    if (i === 1) {
      setNumber(number + 1);
    }
  };

  const handleChange = (e) => {
    console.log(typeof Number(e.target.value));
    if (Number.isInteger(Number(e.target.value))) {
      e.target.value <= 0 ? setNumber(1) : setNumber(Number(e.target.value));
    } else {
      return;
    }
  };

  return (
    <>
      <Navbar />
      <div className=" my-5 productMain container d-flex justify-content-around align-items-center">
        <div className="productMain_pictures ">
          <Gallery images={productImages} className="productSingleGallery" />
          {/* <img
            src="https://via.placeholder.com/550x400/333/FFECD2/?text=picture"
            alt=""
          /> */}
        </div>
        <div className="productMain__info ms-3">
          <h1>{productData.title}</h1>
          <a href="#product-review">
            <span className="me-1">
              {productData.average_rate}
              <i className="fas fa-star"></i>
            </span>{" "}
            {commentCount.count}筆評價
          </a>
          <hr className="my-1" />
          <h3>NT${productData.price}</h3>
          <div className="productMain__info__count">
            <p>數量:</p>
            <div className="d-flex justify-content-between align-items-center productMain__info__count__group">
              <button
                className="btn productMain__info__count__group__substract"
                onClick={() => {
                  handleClick(0);
                  // console.log(productData);
                  // console.log(Number(category));
                  // console.log(productImages);
                }}
              >
                -
              </button>
              <input
                type="text"
                className="form-control rounded-0"
                value={number}
                name="amount"
                onChange={handleChange}
                maxLength="2"
              />
              <button
                className="btn productMain__info__count__group__add"
                onClick={() => {
                  handleClick(1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-start ">
            <button
              className={
                `${productId}` === "19"
                  ? `d-none btn productMain__info__btn--cart me-3`
                  : `btn productMain__info__btn--cart me-3`
              }
              // className="btn productMain__info__btn--cart me-3"
              onClick={async () => {
                if(isLoggedin){
                  let checkCart = await axios.get(
                  "http://localhost:3001/cart/list",
                  { withCredentials: true }
                );
                console.log(checkCart.data);
                if (
                  checkCart.data.filter((item) => item.product_id == productId)
                    .length > 0
                ) {
                  console.log(`${productId} is in cart`);
                  await axios
                    .patch(
                      `http://localhost:3001/cart/update/${productId}/${number}`,
                      {},
                      { withCredentials: true }
                    )
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                } else {
                  await axios
                    .post(
                      `http://localhost:3001/cart/addcart/${productId}`,
                      {
                        number: `${number}`,
                      },
                      { withCredentials: true }
                    )
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }
                Swal.fire({
                  title: "成功加入購物車",
                  text: `${productData.title} ${number}份加入購物車`,
                  icon: "success",
                  confirmButtonText: "繼續購物",
                  confirmButtonColor: "#1d6cf5",
                });
                }else{
                  history.push("/login")
                }
                
              }}
            >
              加入購物車
            </button>
            <Link
              to={
                isLoggedin
                  ? `${productId}` === "19"
                    ? `/giftcard-checkout`
                    : `/cart`
                  : "/login"
              }
              onClick={async () => {
                if (isLoggedin) {
                  if(productId!=="19"){
                    let checkCart = await axios.get(
                    "http://localhost:3001/cart/list",
                    { withCredentials: true }
                  );
                  console.log(checkCart.data);
                  if (
                    checkCart.data.filter(
                      (item) => item.product_id == productId
                    ).length > 0
                  ) {
                    console.log(`${productId} is in cart`);
                    await axios
                      .patch(
                        `http://localhost:3001/cart/update/${productId}/${number}`,
                        {},
                        { withCredentials: true }
                      )
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  } else {
                    await axios
                      .post(
                        `http://localhost:3001/cart/addcart/${productId}`,
                        {
                          number: `${number}`,
                        },
                        { withCredentials: true }
                      )
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }
                } 
              }}}
            >
              <button className="btn productMain__info__btn--buy ">
                直接購買
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="product__secondary mb-5 container d-flex  justify-content-center">
        <div clasName="product__secondary__left " style={{ width: "60%" }}>
          <div className=" mb-5 ">
            <button
              className={`btn product__secondary__left__btn--intro ${
                showText === show[0]
                  ? "product__secondary__left__btn--detail-active"
                  : ""
              }`}
              onClick={() => {
                setShowText(show[0]);
                console.log(show);
              }}
            >
              商品介紹
            </button>
            <button
              onClick={() => {
                setShowText(show[1]);
                console.log(showText);
              }}
              className={`btn product__secondary__left__btn--detail ${
                showText === show[1]
                  ? "product__secondary__left__btn--detail-active"
                  : ""
              }`}
            >
              商品規格
            </button>
            <p className="btn product__secondary__left__text w-100">
              {showText}
            </p>
          </div>
          <div className="product__secondary__left__comment  d-flex flex-column mb-5">
            <div id="product-review">商品評價</div>
            {cList}
            {/* <Comment />
            <Comment />
            <Comment />
            <Comment /> */}
            <button className="btn product__secondary__left__comment__more m-1 align-self-end"
            onClick={async()=>{
              let productComment = await axios.get(
      `http://localhost:3001/product/comment/${productId}/${comments.length}`,
      {
        withCredentials: true,
      }
    );
    console.log(productComment)
    setComments([...comments,...productComment.data])
            }}>
              更多評論
            </button>
          </div>
          <ArticleRecommand />
        </div>
        <div className="product__secondary__recommand d-flex flex-column align-items-start ms-5 ">
          <div className="d-flex Article__area__title w-100">
            <i className="fas fa-shopping-bag Course__area__icon p-2"></i>
            <h2 className="">推薦商品</h2>
          </div>
          {rList}
          <Link to="/product">
            <button className="btn product__secondary__recommand__more align-self-end mb-5">
              更多商品
            </button>
          </Link>
          <CourseSingleHitCourse />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductSingle;
