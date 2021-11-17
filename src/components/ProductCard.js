import * as React from "react";
import { useState,useEffect } from "react";
import Popover from "@mui/material/Popover";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function ProductCard({ key, name, sold, rate, part, price }) {
  //對部位
  let bodyPart={
    0:"綜合",
    1:"手部",
    2:"肩部",
    3:"胸部",
    4:"背部",
    5:"腿部",
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
      <div class="card mx-4 mb-5" key={key}>
        <div className="card__addCart p-0">
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <i class="fas fa-shopping-cart" />
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
                <div className="mx-2">{number}</div>
                <button
                  onClick={() => {
                    handleCount(1);
                  }}
                  className="btn poper__count__btn-p"
                >
                  +
                </button>
              </div>
              <button className="btn poper__cart__btn">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </Popover>
        </div>
        <Link to="/product-single" className="text-decoration-none">
          {/* <div className="card__crown"><i class="fas fa-crown"></i></div>
                    <p className="card__ranking">1</p> */}

          <img
            src="https://via.placeholder.com/200x150/333/FFECD2/?text=picture"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div className="card__price">${price}</div>
            <h5 className="card-title">
              {name}
              <span className="card-title__star">
                {rate}<i class="fas fa-star"></i>
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
