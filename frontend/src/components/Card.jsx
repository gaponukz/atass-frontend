import clock from "./static/images/icons8-clock-96.png"
import visit from "./static/images/icons8-visit-32.png"
import circle from "./static/images/icons8-circle-32.png"
import { useNavigate } from "react-router-dom"

const Card = ({ time_from, city_from, time_to, city_to, price }) => {

     // helper
     const navigate = useNavigate();

     const parsed_time_from_pre = new Date(time_from);
     const parsed_time_from = `${parsed_time_from_pre.getHours()} : ${parsed_time_from_pre.getMinutes()}`;
     
     const parsed_time_to_pre = new Date(time_to);
     const parsed_time_to = `${parsed_time_to_pre.getHours()} : ${parsed_time_to_pre.getMinutes()}`;

     //console.log("start");
     //console.log(parsed_time_from_pre);
     //console.log(parsed_time_to_pre);

     let test = new Date(parsed_time_to_pre - parsed_time_from_pre);
     //console.log(test.getUTCHours(), test.getUTCMinutes());

     //console.log("end");
     return (
          <>
               <div className="card mn">
                    <div className="card-body qwert">
                         <div className="testtttttt">
                              <img src={circle} className="pic1111" />
                              <span className="names">{parsed_time_from} {city_from}</span>

                              <div className="second">
                                   <img src={visit} className="pic1111" />
                                   <span className="names">{parsed_time_to} {city_to}</span>
                              </div>
                         </div>
                         <span className="price">{price}$</span>
                         <button 
                              className="but"
                              onClick={() => {
                                   // console.log("here");
                                   navigate('/route-info-detail')
                              }}
                         >Вибрати</button>
                         <img src={clock} className="time" />
                         <span className="t">{`${test.getUTCHours()}.${test.getUTCMinutes()}`} ч</span>
                    </div>
               </div>
          </>
     )
}

export default Card