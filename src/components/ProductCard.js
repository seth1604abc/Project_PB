import * as React from "react";
import { useState } from "react";
import Popover from "@mui/material/Popover";

import Button from "@mui/material/Button";

function ProductCard() {
  
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
      <div class="card mx-4 mb-5">
        <div className="card__addCart p-0">
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <i class="fas fa-shopping-cart"></i>
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
            <button onClick={() => {
                  handleCount(0);
                }} className="btn poper__count__btn-m">-</button>
            <div className="mx-2">{number}</div>
            <button onClick={() => {
                  handleCount(1);
                }} className="btn poper__count__btn-p">+</button>
            </div>
            <button className="btn poper__cart__btn"><i class="fas fa-shopping-cart"></i></button>
          </div>

          </Popover>
        </div>
        {/* <div className="card__crown"><i class="fas fa-crown"></i></div>
                    <p className="card__ranking">1</p> */}

        <img
          src="https://via.placeholder.com/200x150/333/FFECD2/?text=picture"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <div className="card__price">$599</div>
          <h5 className="card-title">
            八公斤啞鈴組{" "}
            <span className="card-title__star">
              4.5<i class="fas fa-star"></i>
            </span>
          </h5>
          <div className="card__part">部位</div>
          <p className="card__sold text-end">售出102</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
