import loop from "./static/images/loop.png"

const SearchRoute = () => {
  return (
    <>
     
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

                    <div className="small56 ">
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
    </>
  )
}

export default SearchRoute