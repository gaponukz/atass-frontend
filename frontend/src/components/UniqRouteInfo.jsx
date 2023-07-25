import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRouteInfo } from "../features/getRoute/getRouteData";
import { useLocation } from 'react-router-dom'

const UniqRouteInfo = () => {

     // helper
     const search = useLocation().search
     const searchParams = new URLSearchParams(search)
     const dispatch = useDispatch();

     console.log(searchParams.get("move_from_city"), searchParams.get("move_to_city"), searchParams.get("date"));

     // useEffect(() => {
     //      dispatch(getRouteInfo({ searchParams.get("move_from_city"), searchParams.get("move_to_city"), searchParams.get("date") }))
     // }, [])

     return (
          <div>
               UniqRouteInfo
          </div>
     )
}

export default UniqRouteInfo