import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getRouteInfoDetail } from "../features/getRoute/getRouteData"



const UniqueRouteInfoDetail = () => {

  // helper
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const dispatch = useDispatch();

  const route_id = searchParams.get("id")
  const route_info = useSelector((state) => state.route.route_info)
  console.log(route_info);

  useEffect(() => {
    dispatch(getRouteInfoDetail({ id: route_id }));
  }, [])

  return (
    <div>
      <div class="container">
        <h2 class="data">Чт,13 липня</h2>

        <div class="test">
          <ul class="events ert">
            <a href="#" class="link">
              <div class="test_s">
                <p class="for_s" ></p></div>
              <li>
                <time >02:00</time>
                <span style={{textAlign: "left"}}><strong>Проспект Володимира 25,Київ,Україна</strong> Київ</span></li></a><div class="test_s"><a href="#" class="link"><p class="for_s"></p></a></div>
            <a href="#" class="link">
              <li>
                <time >14:03</time>
                <span style={{textAlign: "left"}}><strong> Залізничний вокзал</strong>Львів </span></li></a>
            <hr class="horiz" />
            <div class="money">
              <p class="tex">Ціна</p>
              <p class="price">300$</p>

            </div>
            <hr class="horiz" />
            <div class="dop">
              <p class="te">В моєму авто не палять</p>
              <p class="te">Люблю тварин!</p>
            </div>
            <hr class="horiz"/>


          </ul>
          <div class="butto">
            <button type="submit" class="btn yuiooo" style={{backgroundColor: "#40ABCF", color:"white", fontWeight: "bold"}} id="knop">
              <span >Продовжити</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniqueRouteInfoDetail