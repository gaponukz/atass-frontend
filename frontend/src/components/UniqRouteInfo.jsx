import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRouteInfo } from "../features/getRoute/getRouteData";
import { useLocation, useNavigate } from 'react-router-dom'

import Card from "./Card";
import SearchRoute from "./SearchRoute";
import CardInfo from "./CardInfo";
import { unwrapResult } from "@reduxjs/toolkit";
import { Circles } from "react-loader-spinner";

const UniqRouteInfo = () => {

  // helper
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route_family = useSelector((state) => state.route.route_family)
  const loading = useSelector((state) => state.route.loading)
  const move_from_city = searchParams.get("move_from_city")
  const move_to_city = searchParams.get("move_to_city")
  const date = searchParams.get("date")

  console.log(loading);

  useEffect(() => {
    dispatch(getRouteInfo({ fromCity: move_from_city, toCity: move_to_city, date: date }))
      .then(unwrapResult)
      .catch((err) => {
        if (err.message === "Network Error") {
          navigate("/505")
        }
      })
  }, [])

  return (
    <>
      <div className="container colsss">
            <SearchRoute flagNav={true} defaultMoveFrom={move_from_city} defaultMoveTo={move_to_city} defaultDate={date?.split(".").reverse().join("-")} />
          </div>
      {(loading) ? (
        <>
          <Circles 
            color="#00FFFF"
          />
        </>
      ) : (
        <>
          <div className="bef">
            <div className="container1">
              {route_family.map((t) => (
                <Card
                  key={t.root_route_id}
                  time_from={t.move_from.date}
                  city_from={t.move_from.place.city}
                  id_from={t.move_from.id}
                  time_to={t.move_to.date}
                  city_to={t.move_to.place.city}
                  id_to={t.move_to.id}
                  price={t.price}
                  route_id={t.root_route_id}
                />
              ))}
            </div>
          </div>
          <CardInfo check={false} />
        </>)}
    </>
  )
}

export default UniqRouteInfo