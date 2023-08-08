import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserRoute } from '../features/getRoute/getRouteData'
import { unwrapResult } from '@reduxjs/toolkit'

const CardRoute = ({ route_id, move_from , move_to }) => {
     const [user_res, setUserRes] = useState({});

     const dispatch = useDispatch()
     useEffect(() => {
          dispatch(getUserRoute({routeid: route_id, fromId: move_from, toId: move_to}))
               .then(unwrapResult)
               .then((res) => {
                    setUserRes(res)  
               })
     }, [])

     const parsed_time_from_pre = new Date(user_res?.move_from?.date);
     const parsed_time_from = `${parsed_time_from_pre.getHours().toString().padStart(2, "0")} : ${parsed_time_from_pre.getMinutes().toString().padStart(2, "0")}`;
     
     const parsed_time_to_pre = new Date(user_res?.move_to?.date);
     const parsed_time_to = `${parsed_time_to_pre.getHours().toString().padStart(2, "0")} : ${parsed_time_to_pre.getMinutes().toString().padStart(2, "0")}`;
     // console.log(user_res);

     return (
          <div>
               <div class="card new_card" >
                    <div class="card-body">
                         <p class="glav_data">Ср,5 лип,{parsed_time_from}</p>
                         <ul class="event ">
                              <li>
                                   <time >{parsed_time_from}</time>
                                   <span class="test" style={{ textAlign: "left" }}><strong>{user_res?.move_from?.place?.city}</strong></span></li>

                              <li>
                                   <time >{parsed_time_to}</time>
                                   <span style={{ textAlign: "left" }}><strong>{user_res?.move_to?.place?.city}</strong></span></li></ul>
                    </div>
               </div>
          </div>
     )
}

export default CardRoute