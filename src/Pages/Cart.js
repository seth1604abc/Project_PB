import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Cart() {
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
                        <div className="cart-content__list" style={{marginRight: "30px"}}>
                            <div className="cart-content__title p-3">
                                <h3>購物車(3件)</h3>
                            </div>
                            <div className="cart-content__choose d-flex justify-content-between">
                                <div style={{padding: "3px"}}>
                                    <input type="checkbox" />
                                    <span style={{marginLeft: "3px"}}>選擇全部</span>
                                </div>                                
                                <button>刪除全部</button>
                            </div>
                            <hr style={{width: "100%", margin: "10px 0"}} />

                            <div className="cart-content__box d-flex">
                                <div className="cart-cotent__box__check">
                                    <input type="checkbox" />
                                </div>                                
                                <div className="cart-cotent__box__image">
                                    <img src="/image/cart-list.png" alt="" />
                                </div>
                                <div className="cart-cotent__box__title">
                                    <a>能量棒</a>                                    
                                </div>
                                <div className="cart-cotent__box__count">
                                    <p>數量:</p>
                                    <input type="text" />
                                </div>
                                <div className="cart-cotent__box__price">
                                    NT 1,000 元
                                </div>
                                <div className="cart-cotent__box__delete">
                                    <i class="fas fa-trash-alt"></i>
                                </div>                                
                            </div>
                            <hr style={{width: "100%", margin: "10px 0"}} />

                            <div className="cart-content__box d-flex">
                                <div className="cart-cotent__box__check">
                                    <input type="checkbox" />
                                </div>                                
                                <div className="cart-cotent__box__image">
                                    <img src="/image/cart-list.png" alt="" />
                                </div>
                                <div className="cart-cotent__box__title">
                                    <a>能量棒</a>                                    
                                </div>
                                <div className="cart-cotent__box__count">
                                    <p>數量:</p>
                                    <input type="text" />
                                </div>
                                <div className="cart-cotent__box__price">
                                    NT 1,000 元
                                </div>
                                <div className="cart-cotent__box__delete">
                                    <i class="fas fa-trash-alt"></i>
                                </div>                                
                            </div>
                            <hr style={{width: "100%", margin: "10px 0"}} />

                            <div className="cart-content__box d-flex">
                                <div className="cart-cotent__box__check">
                                    <input type="checkbox" />
                                </div>                                
                                <div className="cart-cotent__box__image">
                                    <img src="/image/cart-list.png" alt="" />
                                </div>
                                <div className="cart-cotent__box__title">
                                    <a>能量棒</a>                                    
                                </div>
                                <div className="cart-cotent__box__count">
                                    <p>數量:</p>
                                    <input type="text" />
                                </div>
                                <div className="cart-cotent__box__price">
                                    NT 1,000 元
                                </div>
                                <div className="cart-cotent__box__delete">
                                    <i class="fas fa-trash-alt"></i>
                                </div>                                
                            </div>
                            <hr style={{width: "100%", margin: "10px 0"}} />

                        </div>

                        <div className="cart-content__total">
                            <div className="cart-content__title p-3"><h3>訂單摘要</h3></div>
                            <div className="cart-content__total__container">
                                <div className="cart-content__total__product d-flex justify-content-between">
                                    <div className="cart-content__total__product__title">商品總計</div>
                                    <div className="cart-content__total__product__price">NT 4,000</div>
                                </div>
                                <div className="cart-content__total__product d-flex justify-content-between">
                                    <div className="cart-content__total__product__title">商品總計</div>
                                    <div className="cart-content__total__product__price">NT 4,000</div>
                                </div>
                                <div className="cart-content__total__benefit d-flex justify-content-between">
                                    <div className="cart-content__total__benefit__check">
                                        <input type="checkbox" />
                                        <span>選擇紅利金</span>
                                    </div>
                                    <div className="cart-content__total__benefit__count">-NT 100</div>
                                </div>
                                <hr />
                                <div className="cart-content__total__product d-flex justify-content-between">
                                    <div className="cart-content__total__product__title">合計</div>
                                    <div className="cart-content__total__product__price">NT 4,000</div>
                                </div>
                                <div className="d-flex justify-content-center my-3">
                                    <button style={{backgroundColor: "#2571E3", color: "white", border: "0px", width: "100%"}}>下一步</button>
                                </div>
                                                                
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Cart