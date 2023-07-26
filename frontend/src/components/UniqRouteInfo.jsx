import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRouteInfo } from "../features/getRoute/getRouteData";
import { useLocation } from 'react-router-dom'

// import clock from "./static/images/icons8-clock-96.png"
// import visit from "./static/images/icons8-visit-32.png"
// import circle from "./static/images/icons8-circle-32.png"
import loop from "./static/images/loop.png"
import Card from "./Card";

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
          "id": "af94ea36-0b93-4c82-94bb-f1d769bfcae7"
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
          "id": "af94ea36-0b93-4c82-94bb-f1d769bfcae7"
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
          "id": "af94ea36-0b93-4c82-94bb-f1d769bfcae7"
     }
]

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
          <>
               <div className="container colsss">
                    <div className="big12">
                         <div className="input-group" id="sadasd">
                              <div className="form-floating mb-3" id="fr">
                                   <input type="text" id="from" className="form-control sadadas" placeholder="Звідки?" name="from" autocomplete="off" required />
                                   <label for="from">Звідки?</label>
                              </div>
                              <div className="form-floating mb-3" id="t">
                                   <input type="text" id="to" class="form-control sadadas" name="to" placeholder="Куди?" autocomplete="off" required />
                                   <label for="to">Куди?</label>
                              </div>


                              <div className="form-floating mb-3">
                                   <input type="date" id="date" className="form-control sadadas" name="date" placeholder="Коли?" autocomplete="off" required />
                                   <label for="date">Коли?</label>
                              </div>

                              <button type="submit" className="btn qw" style={{ backgroundColor: "#40ABCF", height: "59px" }} id="knop">

                                   <img src={loop} />
                                   <span>Шукати</span>
                              </button>
                         </div>
                    </div>
                    <div className="small56">
                         <div className="input-grou" >
                              <div className="form-floating mb-3 test12" id="he">
                                   <input type="text" id="from1" className="form-control sadadas" name="from" placeholder="Звідки?" autocomplete="off" required style={{ display: "block" }} />
                                   <label for="from1">Звідки?</label>
                              </div>
                         </div>
                         <div className="input-grou" >
                              <div className="form-floating mb-3 test12">
                                   <input type="text" id="to1" className="form-control sadadas" name="to" placeholder="Куди?" autocomplete="off" required style={{ display: "block" }} />
                                   <label for="to1">Куди?</label>
                              </div>
                         </div>
                         <div className="input-grou" >
                              <div className="form-floating mb-3 test12">
                                   <input type="date" id="date1" className="form-control sadadas" name="date" autocomplete="off" required style={{ display: "block" }} />
                                   <label for="date1">Коли?</label>
                              </div>
                         </div>
                         <div className="input-grou" id="small3">
                              <button type="submit" className="btn " style={{ backgroundColor: "#40ABCF", color: "white", display: "block" }} id="knop">
                                   <img src={loop} />
                                   <span>Шукати</span>
                              </button>
                         </div>
                    </div>
               </div>

               <div className="container1">
                    <div className="r">
                         {test.map((t) => (
                              <Card
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