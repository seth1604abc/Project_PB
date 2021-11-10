import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CartInfo() {
    return (
        <>
            <Navbar />
                <div className="cart-contanier">
                    <div className="cart-progress-bar d-flex justify-content-between">
                        <div className="cart-progress-bar__box">
                            <div className="cart-progress-bar__box__ball">1</div>
                            <div className="cart-progress-bar__box__txt">購物清單</div>
                        </div>
                        <div className="cart-progress-bar__box">
                            <div className="cart-progress-bar__box__ball">2</div>
                            <div className="cart-progress-bar__box__txt">填寫資料</div>
                        </div>
                        <div className="cart-progress-bar__box">
                            <div className="cart-progress-bar__box__ball">3</div>
                            <div className="cart-progress-bar__box__txt">訂單確認</div>
                        </div>
                        <hr className="cart-progress-bar__line" />
                    </div>

                    <div className="cart-content">
                        <div className="cart-content-l">
                            <div className="cart-content-l__info"></div>
                            <div className="cart-content-l__paymethod"></div>
                        </div>
                        <div className="cart-content-r">
                            <div className="cart-content-r__payment"></div>
                            <div className="cart-content-r__btn"></div>
                        </div>
                    </div>
                        
                </div>
            <Footer />
        </>
    )
}

export default CartInfo