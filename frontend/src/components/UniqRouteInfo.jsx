import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRouteInfo } from "../features/getRoute/getRouteData";
import { useLocation, useNavigate } from 'react-router-dom'


import Card from "./Card";
import SearchRoute from "./SearchRoute";


const UniqRouteInfo = () => {

     const route_family = useSelector((state) => state.route.route_family)
     // console.log(route_family);

     // helper
     const search = useLocation().search
     const searchParams = new URLSearchParams(search)
     const dispatch = useDispatch();
     const navigate = useNavigate();

     if (searchParams.get("move_from_city") == null || searchParams.get("move_to_city") == null || searchParams.get("date") == null ||
         searchParams.get("move_from_city") === "" || searchParams.get("move_to_city") === "" || searchParams.get("date") === "") {
          console.log(searchParams.get("move_from_city"), searchParams.get("move_to_city"), searchParams.get("date"));
          navigate("/404")
     }

     if (route_family.length === 0) {
          navigate("/404")
     }

     console.log(searchParams.get("move_from_city"), searchParams.get("move_to_city"), searchParams.get("date"));

     useEffect(() => {
          dispatch(getRouteInfo({ fromCity: searchParams.get("move_from_city"), toCity: searchParams.get("move_to_city"), date: searchParams.get("date") }))
     }, [])

     return (
          <>
               {/*  */}
               <div className="container colsss">
                    <SearchRoute flagNav={true}/>
               </div>

               <div className="container1">
                    <div className="r">
                         {route_family.map((t) => (
                              <Card
                                   key={t.root_route_id}
                                   time_from={t.move_from.date}
                                   city_from={t.move_from.place.city}
                                   time_to={t.move_to.date}
                                   city_to={t.move_to.place.city}
                                   price={t.price}
                              />
                         ))}

                    </div>
               </div>

          </>
     )
}

export default UniqRouteInfo