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
import { useEffect, useState } from "react";
import { refreshUser } from "./features/getUser/getUserData";
import UniqRouteInfo from "./components/UniqRouteInfo";
import UniqueRouteInfoDetail from "./components/UniqueRouteInfoDetail";
import ProccessPaymentNF from "./components/ProccessPaymentNF";
import UserRoutes from "./components/UserRoutes";
import SuccessPaymnet from "./components/SuccessPaymnet";
import PageNotFound505 from "./components/PageNotFound505";
import AboutUs from "./components/AboutUs";
import { Circles } from "react-loader-spinner";

function App() {
  const flag = useSelector((state) => state.getUser.flag);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (!flag || authorized) {
  //       // dispatch(refreshUser())
  //       // console.log("SEND REFRESH");
  //     }
  //   }, 2000);
    
  //   return () => {
  //     clearInterval(interval);
  //   };

  // }, [flag, authorized])
  const [authorized, setAuthorized] = useState(false);
  
  return (
    <div className="">
      <HeaderNavBar authorized={authorized} setAuthorized={setAuthorized}/>
      <Routes>
        {/* site */}
        <Route path="/" element={<MainSitePage />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/route" element={<UniqRouteInfo />}/>
        <Route path="/route-info-detail" element={<UniqueRouteInfoDetail />}/>
        
        {/* user features */}
        <Route path="/sign-in" element={<SignIn authorized={authorized} setAuthorized={setAuthorized} />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/user-profile" element={<UserProfile authorized={authorized} setAuthorized={setAuthorized} />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/edit-profile" element={<EditProfile />}/>
        <Route path="/success-payment" element={<SuccessPaymnet />}/>
        <Route path="/user-routes" element={<UserRoutes />}/>
        <Route path="/passenger-payment-nf" element={<ProccessPaymentNF />}/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/505" element={<PageNotFound505 />} />
        <Route path="/loading" element={<div className="loader-container"><Circles height={120} width={120} color="#00FFFF"/></div>}/>
      </Routes>
    </div>
  );
} 

export default App;
