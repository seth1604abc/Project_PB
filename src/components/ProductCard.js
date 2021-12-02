import * as React from "react";
import { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ProductCard({
  productId,
  name,
  sold,
  rate,
  part,
  price,
  category,
  mainImage,
  isLoggedin
}) {
  
  useEffect(async () => {
    //抓商品圖片
    let pImages = await axios.get(
      `http://localhost:3001/product/images/${productId}`,
      {
        withCredentials: true,
      }
    );
    // console.log(pImages);
  }, []);
  const history = useHistory();
  //處理彈出視窗(滑動時隱藏)
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    if (anchorEl !== null) {
      setAnchorEl(null);
    } else {
      return;
    }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // console.log(scrollY);
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  //對部位
  let bodyPart = {
    1: "其他",
    2: "手部",
    3: "肩部",
    4: "胸部",
    5: "背部",
    6: "腿部",
  };
  //記數量
  const [number, setNumber] = useState(1);
  const handleCount = (i) => {
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className={`card mx-5 mb-5`}>
        <div className="card__addCart p-0">
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            className={productId === 19 ? "d-none" : ""}
          >
            <i className="fas fa-shopping-cart" />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            className="m-0"
          >
            <div className="poper p-3 d-flex justify-content-center flex-column">
              <div className=" poper__count__group d-flex justify-content-between align-items-center mb-3">
                <button
                  onClick={() => {
                    handleCount(0);
                  }}
                  className="btn poper__count__btn-m"
                >
                  -
                </button>
                <input
                  className="mx-2"
                  value={number}
                  style={{ width: "30px",border:"none", textAlign:"center"}}
                />
                <button
                  onClick={() => {
                    handleCount(1);
                  }}
                  className="btn poper__count__btn-p"
                >
                  +
                </button>
              </div>
              <button
                className="btn poper__cart__btn"
                onClick={async () => {
                  setAnchorEl(null);
                  if(isLoggedin){
                    let checkCart = await axios.get(
                    "http://localhost:3001/cart/list",
                    { withCredentials: true }
                  );
                  
                  if (
                    checkCart.data.filter(
                      (item) => item.product_id == productId
                    ).length > 0
                  ) {
                    console.log(`${productId} is in cart`);
                    await axios
                      .patch(
                        `http://localhost:3001/cart/update/${productId}/${number}`,
                        {},{ withCredentials: true }
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
                    text: `${name} ${number}份加入購物車`,
                    icon: "success",
                    confirmButtonText: "繼續購物",
                    confirmButtonColor: "#1d6cf5",
                  });
                  }else{
                    history.push("/login")
                  }
                 
                }}
              >
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </Popover>
        </div>
        <Link
          // to={productId===19?`/giftcard`:`/product-single/${category}/${productId}`}
          to={`/product-single/${category}/${productId}`}
          className="text-decoration-none"
        >
          {/* <div className="card__crown"><i className="fas fa-crown"></i></div>
                    <p className="card__ranking">1</p> */}

          <img
            src={`/product_images/${mainImage}`}
            className="card-img-top"
            style={{ objectFit: "contain" }}
            alt="..."
          />
          <div className="card-body">
            <div className="card__price">NT${price}</div>
            <h5 className="card-title">
              {name}
              <span className="card-title__star">
                {rate}
                <i className="fas fa-star"></i>
              </span>
            </h5>
            <div className="card__part">{bodyPart[part]}</div>
            <p className="card__sold text-end">售出{sold}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
