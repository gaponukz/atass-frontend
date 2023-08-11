import { useEffect, useState } from "react"
import loop from "./static/images/loop.png"
import { useNavigate } from "react-router-dom";
import { Hint } from 'react-autocomplete-hint';
import { useDispatch } from "react-redux";
import { getRouteHint } from "../features/getRoute/getRouteData";
import { unwrapResult } from "@reduxjs/toolkit";

import { ToastContainer, toast } from 'react-toastify';


function containsNumbers(str) {
     return /\d/.test(str);
}
   

const SearchRoute = ({ flagNav, defaultMoveFrom, defaultMoveTo, defaultDate }) => {

     // ui state
     const [hintDataTo, setHintDataTo] = useState({});
     const [hintDataFrom, setHintDataFrom] = useState([]);

     const [ moveFrom, setMoveFrom ] = useState(defaultMoveFrom);
     const [ moveTo, setMoveTo ] = useState(defaultMoveTo);
     const [ date, setDate ] = useState(defaultDate);

     // helper functions
     const navigate = useNavigate();
     const dispatch = useDispatch();
     
     useEffect(() => {
          dispatch(getRouteHint())
               .then(unwrapResult)
               .then((res) => {
                    //console.log(res);
                    //console.log(Object.keys(res));
                    setHintDataTo(res)
                    setHintDataFrom(Object.keys(res))
               })
               .catch((err) => {
                    // console.log(err);
                    // if (err.message === "Network Error") {
                    //      navigate("/505")
                    // }
               })
     }, [])

     const handleButtonClickSent = () => {
          let datePrepared = date.split("-").reverse().join(".");
          if (date.length === 0) {
               datePrepared = "*"   
          }
          //console.log("here", moveFrom, moveTo, datePrepared); // route?move_from_city=Ac&move_to_city=Bc&date=02.08.2023

          if (containsNumbers(moveFrom) || containsNumbers(moveTo) || moveFrom.length === 0 || moveTo.length === 0) {
               toast.error("Некоректні данні", {autoClose: 1500})
          }
          else {
               if (flagNav) {
                    navigate(`?move_from_city=${moveFrom}&move_to_city=${moveTo}&date=${datePrepared}`, { replace: true })
                    navigate(0) // refresh page
               }   
               else {
                    navigate(`route?move_from_city=${moveFrom}&move_to_city=${moveTo}&date=${datePrepared}`)
               } 
               
          }
 
     }
     //console.log(Object.keys(hintDataTo));
     return (
          <>
          <ToastContainer />
               <div className="big12">
                    <div className="input-group" id="sadasd">
                         <div className="form-floating mb-3" id="fr">
                              <Hint options={hintDataFrom} allowTabFill allowEnterFill>
                                   <input 
                                        type="text" 
                                        id="from" 
                                        className="form-control sadadas " 
                                        placeholder="Звідки?" 
                                        name="from" 
                                        required 
                                        value={moveFrom}
                                        onChange={(e) => setMoveFrom(e.target.value)}
                                   />
                              </Hint>
                         </div>
                         <div className="form-floating mb-3" id="t">
                              <Hint options={(hintDataTo[moveFrom.charAt(0).toUpperCase() + moveFrom.slice(1)]) ? (hintDataTo[moveFrom.charAt(0).toUpperCase() + moveFrom.slice(1)]) : ([])} allowTabFill allowEnterFill>
                                   <input 
                                        type="text" 
                                        id="to" 
                                        className="form-control sadadas" 
                                        name="to" placeholder="Куди?" 
                                        required 
                                        value={moveTo}
                                        onChange={(e) => setMoveTo(e.target.value)}
                                   />
                              </Hint>
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
                              <Hint options={hintDataFrom} allowTabFill allowEnterFill>
                                   <input 
                                        type="text" 
                                        id="from1" 
                                        className="form-control sadadas" 
                                        name="from" placeholder="Звідки?" 
                                        required 
                                        style={{ display: "block" }} 
                                        value={moveFrom}
                                        onChange={(e) => setMoveFrom(e.target.value)}
                                   />
                              </Hint>
                         </div>
                    </div>
                    <div className="input-grou" >
                         <div className="form-floating mb-3 test12">
                              <Hint options={(hintDataTo[moveFrom.charAt(0).toUpperCase() + moveFrom.slice(1)]) ? (hintDataTo[moveFrom.charAt(0).toUpperCase() + moveFrom.slice(1)]) : ([])} allowTabFill allowEnterFill>
                                   <input 
                                        type="text" 
                                        id="to1" 
                                        className="form-control sadadas" 
                                        name="to" 
                                        placeholder="Куди?" 
                                        required 
                                        style={{ display: "block" }} 
                                        value={moveTo}
                                        onChange={(e) => setMoveTo(e.target.value)}
                                   />
                              </Hint>
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