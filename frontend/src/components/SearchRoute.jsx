import { useState } from "react"
import loop from "./static/images/loop.png"

const SearchRoute = () => {

     const [ moveFrom, setMoveFrom ] = useState("");
     const [ moveTo, setMoveTo ] = useState("");
     const [ date, setDate ] = useState("");
 
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
                                   autocomplete="off" 
                                   required 
                                   value={moveFrom}
                                   onChange={(e) => setMoveFrom(e.target.value)}
                              />
                              <label for="from">Звідки?</label>
                         </div>
                         <div className="form-floating mb-3" id="t">
                              <input 
                                   type="text" 
                                   id="to" 
                                   class="form-control sadadas" 
                                   name="to" placeholder="Куди?" 
                                   autocomplete="off" 
                                   required 
                                   value={moveTo}
                                   onChange={(e) => setMoveTo(e.target.value)}
                              />
                              <label for="to">Куди?</label>
                         </div>


                         <div className="form-floating mb-3">
                              <input 
                                   type="date" 
                                   id="date" 
                                   className="form-control sadadas" 
                                   name="date" placeholder="Коли?" 
                                   autocomplete="off" 
                                   required 
                                   value={date}
                                   onChange={(e) => setDate(e.target.value)}
                              />
                              <label for="date">Коли?</label>
                         </div>

                         <button 
                              type="button" 
                              className="btn qw" 
                              style={{ backgroundColor: "#40ABCF", height: "59px" }} 
                              id="knop"
                              onClick={() => {
                                   console.log("here1", moveFrom, moveTo, date);
                              }}
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
                                   autocomplete="off" 
                                   required 
                                   style={{ display: "block" }} 
                                   value={moveFrom}
                                   onChange={(e) => setMoveFrom(e.target.value)}
                              />
                              <label for="from1">Звідки?</label>
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
                                   autocomplete="off" 
                                   required 
                                   style={{ display: "block" }} 
                                   value={moveTo}
                                   onChange={(e) => setMoveTo(e.target.value)}
                              />
                              <label for="to1">Куди?</label>
                         </div>
                    </div>
                    <div className="input-grou" >
                         <div className="form-floating mb-3 test12">
                              <input 
                                   type="date" 
                                   id="date1" 
                                   className="form-control sadadas" 
                                   name="date" 
                                   autocomplete="off" 
                                   required 
                                   style={{ display: "block" }} 
                                   value={date}
                                   onChange={(e) => setDate(e.target.value)}
                              />
                              <label for="date1">Коли?</label>
                         </div>
                    </div>
                    <div className="input-grou" id="small3">
                         <button 
                              type="button" 
                              className="btn " 
                              style={{ backgroundColor: "#40ABCF", color: "white", display: "block" }} 
                              id="knop"
                              onClick={() => {
                                   console.log("here2", moveFrom, moveTo, date);
                              }}
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