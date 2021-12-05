import Event from './Pages/Event'
import EventSingle from './Pages/EventSingle';
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductSingle from "./Pages/ProductSingle";
import ProductGiftCard from "./Pages/ProductGiftCard";
import GiftCardCheckout from "./Pages/GiftCardCheckout";
import GiftCardWriting from "./Pages/GiftCardWriting";
import './css/Home.css';
import Course from "./Pages/Course";
import CourseSingle from "./Pages/CourseSingle";
import Article from "./Pages/Article";
import ArticleSingle from "./Pages/ArticleSingle";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MemberInfo from './Pages/MemberInfo';
import MemberOrder from './Pages/MemberOrder';
import MemberCoin from './Pages/MemberCoin';
import MemberCourse from './Pages/MemberCourse';
import MemberEvent from './Pages/MemberEvent';
import Login from './Pages/Login';
import Subscribe from './Pages/Subscribe';
import Coach from './Pages/Coach';
import CoachInfo from './Pages/CoachInfo';
import CoachCourse from './Pages/CoachCourse';
import CoachEvent from './Pages/CoachEvent';
import Cart from './Pages/Cart';
import CartInfo from './Pages/CartInfo' 
import CoachEventAdd from './Pages/CoachEventAdd';
import CoachEventEdit from './Pages/CoachEventEdit';
import CoachCourseAdd from './Pages/CoachCourseAdd';
import SubscibePay from './Pages/SubscribePay';
let storage = sessionStorage;

function App() {
  // sessionStorage
  // 給 WaitingList 空字串
  if (storage["WaitingList"] == null) {
    storage["WaitingList"] = "";
  }
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/event" exact component={Event}></Route>
          <Route path="/event-single/:id" exact component={EventSingle}></Route>
          <Route path="/article" exact component={Article}></Route>
          <Route path="/article-single" exact component={ArticleSingle}></Route>
          <Route path="/course" exact component={Course}></Route>
          <Route path="/course-single/:courseId" exact component={CourseSingle}></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/product-single/:category/:productId" exact component={ProductSingle}></Route>
          <Route path="/giftcard" exact component={ProductGiftCard}></Route>
          <Route path="/giftcard-checkout" exact component={GiftCardCheckout}></Route>
          <Route path="/giftcard-writing" exact component={GiftCardWriting}></Route>
          <Route path="/member-info" exact component={MemberInfo}></Route>
          <Route path="/member-order" exact component={MemberOrder}></Route>
          <Route path="/member-coin" exact component={MemberCoin}></Route>
          <Route path="/member-course" exact component={MemberCourse}></Route>
          <Route path="/member-event" exact component={MemberEvent}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/subscribe" exact component={Subscribe}></Route>
          <Route path="/coach/:id" exact component={Coach}></Route>
          <Route path="/coach-info" exact component={CoachInfo}></Route>
          <Route path="/coach-course" exact component={CoachCourse}></Route>
          <Route path="/coach-event" exact component={CoachEvent}></Route>
          <Route path="/cart" excat component={Cart}></Route>
          <Route path="/cart-info" excat component={CartInfo}></Route>                 
          <Route path="/coach-event-add" exact component={CoachEventAdd}></Route>          
          <Route path="/coach-event-edit/:id" exact component={CoachEventEdit}></Route>          
          <Route path="/coach-course-add" exact component={CoachCourseAdd}></Route>
          <Route path="/subscribe-pay/:time/:price" exact component={SubscibePay}></Route>          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;