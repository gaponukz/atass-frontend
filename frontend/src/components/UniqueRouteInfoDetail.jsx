import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { getRouteInfoDetail } from "../features/getRoute/getRouteData"


const UniqueRouteInfoDetail = () => {

  // helper
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const dispatch = useDispatch();

  const route_id = searchParams.get("id")
  console.log(route_id);

  useEffect(() => {
    dispatch(getRouteInfoDetail({ id: route_id }));
  }, [])

  return (
    <div>UniqueRouteInfoDetail</div>
  )
}

export default UniqueRouteInfoDetail