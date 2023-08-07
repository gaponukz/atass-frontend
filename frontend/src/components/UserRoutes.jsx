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
                    if (err.message === "Request failed with status code 401")
                         navigate("/sign-in")
               })
     }, [])
     console.log(userCheck);
     return (
          <div>
               {(userCheck) ? (<>у вас ще немає марштрутів</>) : (<>Ваші маршрути Oleg html</>)}
          </div>
     )
}

export default UserRoutes