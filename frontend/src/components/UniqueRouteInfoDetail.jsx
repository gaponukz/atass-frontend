import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getRouteInfoDetail } from "../features/getRoute/getRouteData"

const test = {
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
}

const UniqueRouteInfoDetail = () => {

  // helper
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const dispatch = useDispatch();

  const route_id = searchParams.get("id")
  const move_from = searchParams.get("move_from")
  const move_to = searchParams.get("move_to")
  const route_info = useSelector((state) => state.route.route_info)
  console.log(route_info);

  useEffect(() => {
    dispatch(getRouteInfoDetail({ id: route_id, id_from: move_from, id_to: move_to }));
  }, [])

  const move_from_pre = new Date(test.move_from.date)
  const move_to_pre = new Date(test.move_to.date)
  console.log(move_from_pre, move_from_pre.getUTCDay(), move_from_pre.getUTCMonth(), move_from_pre.getTime());

  return (
    <div>
      <div className="container yuiop">
        <h2 className="data">Чт,13 липня</h2>

        <div className="testssss">
          <ul className="events">
            <a href="#" className="link">
              <div className="test_s">
                <p className="for_s" ></p></div>
              <li>
                <time >{move_from_pre.getUTCHours()}:{move_from_pre.getUTCMinutes()}</time>
                <span style={{textAlign: "left"}}><strong>{test.move_from.place.street},{test.move_from.place.city},{test.move_from.place.country}</strong> {test.move_from.place.city}</span></li></a><div class="test_s"><a href="#" class="link"><p class="for_s"></p></a></div>
            <a href="#" className="link">
              <li>
                <time >{move_to_pre.getUTCHours()}:{move_to_pre.getUTCMinutes()}</time>
                <span style={{textAlign: "left"}}><strong>{test.move_to.place.street},{test.move_to.place.city},{test.move_to.place.country}</strong>{test.move_to.place.city} </span></li></a>
            <hr className="horiz" />
            <div className="money">
              <p className="tex">Ціна</p>
              <p className="priceyyy">{test.price}$</p>

            </div>
            <hr className="horiz" />
            <div className="dop">
              <p className="te zagol" >Опис:</p>
              <p className="te">В моєму авто не палять</p>
              <p className="te zagol">Правила поїздки:</p>
              <p className="te">Люблю тварин!</p>
              <p className="te zagol">Правила перевезення:</p>
            </div>
            <hr Name="horiz"/>


          </ul>
          <div class="butto">
            <button type="submit" className="btn yuiooo" style={{backgroundColor: "#40ABCF", color:"white", fontWeight: "bold"}} id="knop">
              <span >Продовжити</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniqueRouteInfoDetail