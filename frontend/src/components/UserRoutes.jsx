import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit";
import { getUserRoutes } from "../features/getUser/getUserData";
import { useNavigate } from "react-router-dom";

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
                    // console.log(res);
               })
               .catch((err) => {
                    //console.log("t1");
                    //if (err.message === "Request failed with status code 401")
                    //     navigate("/sign-in")
               })
     }, [])
     console.log(userCheck);
     return (
          <div>
               {(userCheck) ? (<>у вас ще немає марштрутів</>) : (<>Ваші маршрути Oleg html</>)}


               <div class="container">
                    <h1 class="first_name">Ваші поїздки</h1>
                    <div class="rov">
                         <div class="card new_card" >
                              <div class="card-body">
                                   <p class="glav_data">Ср,5 лип,15 00</p>
                                   <ul class="events ert">
                                        <li>
                                             <time >02:00</time>
                                             <span class="test" style={{textAlign: "left"}}><strong>Київ</strong></span></li>

                                        <li>
                                             <time >14:03</time>
                                             <span style={{textAlign: "left"}}><strong>Львів </strong></span></li></ul>
                              </div>
                         </div>
                         <div class="card new_card" >
                              <div class="card-body">
                                   <p class="glav_data">Ср,5 лип,15 00</p>
                                   <ul class="events ert">
                                        <li>
                                             <time >02:00</time>
                                             <span class="test" style={{textAlign: "left"}}><strong>Київ</strong></span></li>

                                        <li>
                                             <time >14:03</time>
                                             <span style={{textAlign: "left"}}><strong>Львів </strong></span></li></ul>
                              </div>
                         </div>
                    </div> </div>
          </div>
     )
}

export default UserRoutes