import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./components/EditProfile";
import HeaderNavBar from "./components/HeaderNavBar";
import MainSitePage from "./components/MainSitePage";
import PageNotFound from "./components/PageNotFound";
import ResetPassword from "./components/ResetPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";

import {  Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { refreshUser } from "./features/getUser/getUserData";
import UniqRouteInfo from "./components/UniqRouteInfo";
import UniqueRouteInfoDetail from "./components/UniqueRouteInfoDetail";
import ProccessPaymentNF from "./components/ProccessPaymentNF";
import UserRoutes from "./components/UserRoutes";

function App() {
  const flag = useSelector((state) => state.getUser.flag);
  const authorized = useSelector((state) => state.getUser.authorized)

  const dispatch = useDispatch();

  useEffect(() => {
    let interval = setInterval(() => {
      if (!flag || authorized) {
        // dispatch(refreshUser())
        // console.log("SEND REFRESH");
      }
    }, 2000);
    
    return () => {
      clearInterval(interval);
    };

  }, [flag, authorized])
  
  
  return (
    <div className="">
      <HeaderNavBar />
      <Routes>
        {/* site */}
        <Route path="/" element={<MainSitePage />}/>
        <Route path="/about-us" element={<>About Us</>}/>
        <Route path="/route" element={<UniqRouteInfo />}/>
        <Route path="/route-info-detail" element={<UniqueRouteInfoDetail />}/>
        
        {/* user features */}
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/user-profile" element={<UserProfile />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/edit-profile" element={<EditProfile />}/>
        <Route path="/success-payment" element={<>
          <div class="success-container">
        <img src="static/images/checked.png" alt="Успешно"/>
        <h1>Оплата прошла успешно!</h1>
        <p>Спасибо за оплату. Чек автоматически отправится вам на почту</p>
        <a href="#">Вернуться на главную</a>
    </div></>}/>
        <Route path="/user-routes" element={<UserRoutes />}/>
        <Route path="/passenger-payment-nf" element={<ProccessPaymentNF />}/>
        {/* <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
