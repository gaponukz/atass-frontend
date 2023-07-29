import { useState } from "react"
import loop from "./static/images/loop.png"
import { useNavigate } from "react-router-dom";


const SearchRoute = ({ flagNav }) => {

     // ui state
     const [ moveFrom, setMoveFrom ] = useState("");
     const [ moveTo, setMoveTo ] = useState("");
     const [ date, setDate ] = useState("");

     // helper functions
     const navigate = useNavigate();

     const handleButtonClickSent = () => {
          let datePrepared = date.split("-").reverse().join(".");
          console.log("here", moveFrom, moveTo, datePrepared); // route?move_from_city=Ac&move_to_city=Bc&date=02.08.2023
          // navigate(`route?move_from_city=${moveFrom}&move_to_city=${moveTo}&date=${datePrepared}`, { replace: true })
          if (flagNav) {
               
               navigate(`?move_from_city=${moveFrom}&move_to_city=${moveTo}&date=${datePrepared}`, { replace: true })
          }   
          else {
               navigate(`route?move_from_city=${moveFrom}&move_to_city=${moveTo}&date=${datePrepared}`)
          }  
     }
 
     return (
          <>
               <div className="big12">
                    <div className="input-group" id="sadasd">
                         <div className="form-floating mb-3" id="fr">
                              <input 
                                   type="text" 
                                   id="from" 
                                   className="form-control sadadas" 
                                   placeholder="Звідки?" 
                                   name="from" 
                                   autoComplete="off" 
                                   required 
                                   value={moveFrom}
                                   onChange={(e) => setMoveFrom(e.target.value)}
                              />
                              <label htmlFor="from">Звідки?</label>
                         </div>
                         <div className="form-floating mb-3" id="t">
                              <input 
                                   type="text" 
                                   id="to" 
                                   className="form-control sadadas" 
                                   name="to" placeholder="Куди?" 
                                   autoComplete="off" 
                                   required 
                                   value={moveTo}
                                   onChange={(e) => setMoveTo(e.target.value)}
                              />
                              <label htmlFor="to">Куди?</label>
                         </div>


                         <div className="form-floating mb-3">
                              <input 
                                   type="date" 
                                   id="date" 
                                   className="form-control sadadas" 
                                   name="date" placeholder="Коли?" 
                                   autoComplete="off" 
                                   required 
                                   value={date}
                                   onChange={(e) => setDate(e.target.value)}
                              />
                              <label htmlFor="date">Коли?</label>
                         </div>

                         <button 
                              type="button" 
                              className="btn qw" 
                              style={{ backgroundColor: "#40ABCF", height: "59px" }} 
                              id="knop"
                              onClick={handleButtonClickSent}
                         >
                              <img src={loop} />
                              <span>Шукати</span>
                         </button>
                    </div>
               </div>

               <div className="small56 ">
                    <div className="input-grou" >
                         <div className="form-floating mb-3 test12" id="he">
                              <input 
                                   type="text" 
                                   id="from1" 
                                   className="form-control sadadas" 
                                   name="from" placeholder="Звідки?" 
                                   autoComplete="off" 
                                   required 
                                   style={{ display: "block" }} 
                                   value={moveFrom}
                                   onChange={(e) => setMoveFrom(e.target.value)}
                              />
                              <label htmlFor="from1">Звідки?</label>
                         </div>
                    </div>
                    <div className="input-grou" >
                         <div className="form-floating mb-3 test12">
                              <input 
                                   type="text" 
                                   id="to1" 
                                   className="form-control sadadas" 
                                   name="to" 
                                   placeholder="Куди?" 
                                   autoComplete="off" 
                                   required 
                                   style={{ display: "block" }} 
                                   value={moveTo}
                                   onChange={(e) => setMoveTo(e.target.value)}
                              />
                              <label htmlFor="to1">Куди?</label>
                         </div>
                    </div>
                    <div className="input-grou" >
                         <div className="form-floating mb-3 test12">
                              <input 
                                   type="date" 
                                   id="date1" 
                                   className="form-control sadadas" 
                                   name="date" 
                                   autoComplete="off" 
                                   required 
                                   style={{ display: "block" }} 
                                   value={date}
                                   onChange={(e) => setDate(e.target.value)}
                              />
                              <label htmlFor="date1">Коли?</label>
                         </div>
                    </div>
                    <div className="input-grou" id="small3">
                         <button 
                              type="button" 
                              className="btn " 
                              style={{ backgroundColor: "#40ABCF", color: "white", display: "block" }} 
                              id="knop"
                              onClick={handleButtonClickSent}
                         >
                              <img src={loop} />
                              <span>Шукати</span>
                         </button>
                    </div>
               </div>
          </>
     )
}

export default SearchRoute