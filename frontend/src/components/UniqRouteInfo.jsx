import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRouteInfo } from "../features/getRoute/getRouteData";
import { useLocation, useNavigate } from 'react-router-dom'


import Card from "./Card";
import SearchRoute from "./SearchRoute";
import CardInfo from "./CardInfo";

const test = [
  {
    "move_from": {
      "place": {
        "country": "Ac",
        "city": "Ac",
        "street": "As",
        "map_url": null,
        "id": "6d9a98b0-c496-431b-942a-6c7f5c9bf211"
      },
      "date": "2023-08-02T16:38:43.428918",
      "is_active": true,
      "id": "93b7f7ea-60f2-4524-82b9-a532721f2596"
    },
    "move_to": {
      "place": {
        "country": "Cc",
        "city": "Cc",
        "street": "Cs",
        "map_url": null,
        "id": "34ea0425-ff38-4e2c-a7f1-3a8725533319"
      },
      "date": "2023-08-03T17:38:43.428918",
      "is_active": true,
      "id": "0f1363c7-9e74-45d7-8de3-29bbf3e07bc7"
    },
    "price": 5,
    "root_route_id": "7c47bcb9-8179-49b5-93fc-089fafa793d3",
    "id": "06aaab1c-b53e-496f-b267-d2684b17a5ce"
  },
  {
    "move_from": {
      "place": {
        "country": "Ac",
        "city": "Ac",
        "street": "As",
        "map_url": null,
        "id": "6d9a98b0-c496-431b-942a-6c7f5c9bf211"
      },
      "date": "2023-08-02T16:38:43.428918",
      "is_active": true,
      "id": "93b7f7ea-60f2-4524-82b9-a532721f2596"
    },
    "move_to": {
      "place": {
        "country": "Bc",
        "city": "Bc",
        "street": "Bs",
        "map_url": null,
        "id": "b40b2e0d-b8da-4ae2-b9d6-d2cca49df391"
      },
      "date": "2023-08-04T01:58:43.428918",
      "is_active": true,
      "id": "82ebef20-cde6-4b87-be3d-3030b8fe481d"
    },
    "price": 10,
    "root_route_id": "7c47bcb9-8179-49b5-93fc-089fafa793d3",
    "id": "06aaab1c-b53e-496f-b267-d2684b17a5ce"
  },
  {
    "move_from": {
      "place": {
        "country": "Cc",
        "city": "Cc",
        "street": "Cs",
        "map_url": null,
        "id": "34ea0425-ff38-4e2c-a7f1-3a8725533319"
      },
      "date": "2023-08-03T17:38:43.428918",
      "is_active": true,
      "id": "0f1363c7-9e74-45d7-8de3-29bbf3e07bc7"
    },
    "move_to": {
      "place": {
        "country": "Bc",
        "city": "Bc",
        "street": "Bs",
        "map_url": null,
        "id": "b40b2e0d-b8da-4ae2-b9d6-d2cca49df391"
      },
      "date": "2023-08-04T01:58:43.428918",
      "is_active": true,
      "id": "82ebef20-cde6-4b87-be3d-3030b8fe481d"
    },
    "price": 5,
    "root_route_id": "7c47bcb9-8179-49b5-93fc-089fafa793d3",
    "id": "06aaab1c-b53e-496f-b267-d2684b17a5ce"
  }
]

const UniqRouteInfo = () => {

  // helper
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route_family = useSelector((state) => state.route.route_family)
  const move_from_city = searchParams.get("move_from_city")
  const move_to_city = searchParams.get("move_to_city")
  const date = searchParams.get("date")
  // console.log(move_from_city, move_to_city, date);
  console.log(route_family);

  // useEffect(() => {
  //   console.log(move_from_city, move_to_city, date);
  //   if (move_from_city === null || move_to_city === null || date === null ||
  //     move_from_city === "" || move_to_city === "" || date === "") {
  //     console.log(move_from_city, move_to_city, date);
  //     navigate("/404")
  //   }
  // }, [move_from_city, move_to_city, date])


  useEffect(() => {
    dispatch(getRouteInfo({ fromCity: move_from_city, toCity: move_to_city, date: date }))
  }, [])

  return (
    <>
      {/*  */}
      <div className="container colsss">
        <SearchRoute flagNav={true} defaultMoveFrom={move_from_city} defaultMoveTo={move_to_city} defaultDate={date?.split(".").reverse().join("-")} />
      </div>

      <div className="container1">
        <div className="r">
          {test.map((t) => (
            <Card
              key={t.root_route_id}
              time_from={t.move_from.date}
              city_from={t.move_from.place.city}
              time_to={t.move_to.date}
              city_to={t.move_to.place.city}
              price={t.price}
              route_id={t.root_route_id}
            />
          ))}

        </div>
      </div>
      
      <CardInfo check={false}/>
    </>
  )
}

export default UniqRouteInfo