import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit";
import { getUserRoutes } from "../features/getUser/getUserData";
import { useNavigate } from "react-router-dom";
import CardRoute from "./CardRoute";
import { Circles } from "react-loader-spinner";
import PageNotFound505 from "./PageNotFound505";

const UserRoutes = () => {

     const userCheck = useSelector((state) => state.getUser.userNotHaveRoutes)
     const userRoutes = useSelector((state) => state.getUser.userRoutes)
     const loading = useSelector((state) => state.getUser.loading)
     const [checkError, setCheckError] = useState(false);

     // helper
     const dispatch = useDispatch();
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(getUserRoutes())
               .then(unwrapResult)
               .then((res) => {
                    // console.log(res);
               })
               .catch((err) => {
                    //console.log("t1");
                    if (err.message === "Request failed with status code 401")
                         navigate("/sign-in")
                    else if (err.message === "Network Error") {
                         setCheckError(true);
                    }
               })
     }, [])
     //console.log(loading);
     if (checkError) {
          return (
               <>
                  <PageNotFound505 />
               </>
          )
     }

     return (
          <>
               {(loading) ? (
                    <>
                         <div className="loader-container"><Circles height={120} width={120} color="#00FFFF"/></div>
                    </>) : (
                    <>
                         <div>
                              {(userCheck) ? (<p>У вас ще немає марштрутів</p>) : (<>
                                   <div className="container qty">
                                        <h1 className="first_name">Ваші поїздки</h1>
                                        <div className="rov">
                                             {userRoutes.map(t => (
                                                  <CardRoute
                                                       route_id={t.rootRouteId}
                                                       move_from={t.movingFromId}
                                                       move_to={t.movingTowardsId}
                                                  />
                                             ))}
                                        </div>
                                   </div>
                              </>)}
                         </div>
                    </>)}
          </>
     )
}

export default UserRoutes