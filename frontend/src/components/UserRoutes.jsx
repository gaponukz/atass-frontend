import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit";
import { getUserRoutes } from "../features/getUser/getUserData";
import { useNavigate } from "react-router-dom";
import CardRoute from "./CardRoute";

const UserRoutes = () => {

     const userCheck = useSelector((state) => state.getUser.userNotHaveRoutes)
     const userRoutes = useSelector((state) => state.getUser.userRoutes)

     // helper
     const dispatch = useDispatch();
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(getUserRoutes())
               .then(unwrapResult)
               .then((res) => {
                    //console.log(res);
               })
               .catch((err) => {
                    //console.log("t1");
                    if (err.message === "Request failed with status code 401")
                         navigate("/sign-in")
               })
     }, [])
     //console.log(userCheck);
     return (
          <div>
               {(userCheck) ? (<p>у вас ще немає марштрутів</p>) : (<>
                    <div class="container qty">
                         <h1 class="first_name">Ваші поїздки</h1>
                         <div class="rov">
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
     )
}

export default UserRoutes