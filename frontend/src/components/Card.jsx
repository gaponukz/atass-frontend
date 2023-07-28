import clock from "./static/images/icons8-clock-96.png"
import visit from "./static/images/icons8-visit-32.png"
import circle from "./static/images/icons8-circle-32.png"

const Card = ({ time_from, city_from, time_to, city_to, price }) => {

     const parsed_time_from_pre = new Date(time_from);
     const parsed_time_from = `${parsed_time_from_pre.getHours()} : ${parsed_time_from_pre.getMinutes()}`;
     
     const parsed_time_to_pre = new Date(time_to);
     const parsed_time_to = `${parsed_time_to_pre.getHours()} : ${parsed_time_to_pre.getMinutes()}`;

     console.log(parsed_time_from_pre);
     console.log(parsed_time_to_pre);
     let test = new Date(parsed_time_to_pre.getTime() - parsed_time_from_pre.getTime());
     console.log(test.getFullYear(), test.getHours(), test.getMinutes());
     console.log(parsed_time_to_pre.getFullYear(), parsed_time_to_pre.getFullYear());
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
                         <button className="but">Вибрати</button>
                         <img src={clock} className="time" />
                         <span className="t">{test.getHours()}ч</span>
                    </div>
               </div>
          </>
     )
}

export default Card