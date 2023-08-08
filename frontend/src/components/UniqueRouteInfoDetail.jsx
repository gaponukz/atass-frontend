import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { getRouteInfoDetail, getUserIdRoute, idleStatus } from "../features/getRoute/getRouteData"
import { postPaymnet } from '../features/payment/paymentSlice';
import { unwrapResult } from "@reduxjs/toolkit";


const UniqueRouteInfoDetail = () => {

  const handleButtonClick = () => {
    dispatch(getUserIdRoute())
    .then(unwrapResult)
      .catch((err) => {
        console.log(err);
        if (err.message === "Request failed with status code 401") {
               console.log("tyt");
               navigate("/passenger-payment-nf")
               dispatch(idleStatus())
          }
      })
  }

  // helper
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route_id = searchParams.get("id")
  const move_from = searchParams.get("move_from")
  const move_to = searchParams.get("move_to")

  useEffect(() => {
    dispatch(getRouteInfoDetail({ id: route_id, id_from: move_from, id_to: move_to }))
      .then(unwrapResult)
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          navigate("/404")
        }
      })

  }, [])

  const route_info = useSelector((state) => state.route.route_info)
  const err = useSelector((state) => state.route.user.err)
  const succedded = useSelector((state) => state.route.user.succedded)
  const user = useSelector((state) => state.route.user.info)


  // useEffect(() => {
  //   if (err === "Request failed with status code 401") {
  //     console.log("tyt");
  //     navigate("/passenger-payment-nf")
  //     dispatch(idleStatus())
  //   }
  // }, [err])

  useEffect(() => {
    if (succedded) {
      console.log(user);
      const obj = {
        "amount": route_info.price,
        "routeId": route_info.root_route_id,
        "passenger": {
          "id": "",
          "gmail": user.gmail,
          "fullName": user.fullName,
          "phoneNumber": user.phone,
          "movingFromId": route_info.move_from.id,
          "movingTowardsId": route_info.move_to.id
        }
      }
      console.log(obj);
      dispatch(postPaymnet({amount: route_info.price, routeId: route_info.root_route_id,
        gmail: user.gmail, fullName: user.fullName, phoneNumber: user.phone, movingFromId: route_info.move_from.id, movingTowardsId: route_info.move_to.id
      })).then(() => {
        navigate("/success-payment");
      })
      dispatch(idleStatus())
    }
  }, [succedded])

  const move_from_pre = new Date(route_info?.move_from?.date)
  const move_to_pre = new Date(route_info?.move_to?.date)
  //console.log(move_from_pre.getHours(), move_from_pre.getMonth(), move_from_pre.getDay(), move_from_pre);

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
                <time >{move_from_pre.getHours().toString().padStart(2, "0")}:{move_from_pre.getMinutes().toString().padStart(2, "0")}</time>
                <span style={{ textAlign: "left" }}><strong>{route_info?.move_from?.place?.street},{route_info?.move_from?.place?.city},{route_info?.move_from?.place?.country}</strong> {route_info?.move_from?.place?.city}</span></li></a><div class="test_s"><a href="#" class="link"><p class="for_s"></p></a></div>
            <a href="#" className="link">
              <li>
                <time >{move_to_pre.getHours().toString().padStart(2, "0")}:{move_to_pre.getMinutes().toString().padStart(2, "0")}</time>
                <span style={{ textAlign: "left" }}><strong>{route_info?.move_to?.place?.street},{route_info?.move_to?.place?.city},{route_info?.move_to?.place?.country}</strong>{route_info?.move_to?.place?.city} </span></li></a>
            <hr className="horiz" />
            <div className="money">
              <p className="tex">Ціна</p>
              <p className="priceyyy">{route_info?.price}$</p>

            </div>
            <hr className="horiz" />
            <div className="dop">
              <p className="te zagol" >Опис:</p>
              <div className="for_pppppppp">
                <p className="te">{route_info?.rules?.ua}</p>
              </div>
              <p className="te zagol">Правила поїздки:</p>
              <div className="for_pppppppp">
                <p className="te">{route_info?.rules?.ua}</p>
              </div>
              <p className="te zagol hza">Правила перевезення:</p>
              <div className="for_pppppppp">
                <p className="te">{route_info?.rules?.ua}</p>
              </div>
            </div>

            <hr className="horiz ho" />
          </ul>
          <div class="butto">
            <button
              type="button"
              className="btn yuiooo"
              style={{ backgroundColor: "#40ABCF", color: "white", fontWeight: "bold" }}
              id="knop"
              onClick={handleButtonClick}
            >
              <span >Продовжити</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniqueRouteInfoDetail