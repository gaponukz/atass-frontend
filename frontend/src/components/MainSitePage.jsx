import main_logo from "./static/images/Logo.png"
import icons8_erson_96 from "./static/images/icons8-person-96.png"
import icons8_contact_us_96 from "./static/images/icons8-contact-us-96.png"
import icons8_globe_96 from "./static/images/icons8-globe-96.png"
import loop from "./static/images/loop.png"
import ticket from "./static/images/ticket.png"
import worlwide from "./static/images/worldwide.png";
import chat from "./static/images/chat.png"
import SearchRoute from "./SearchRoute"

const MainSitePage = () => {
   return (
      <>
         <main>
            <div>
               <div className="row1">
                  <div className="column1">
                     <h2 className="">Забронюйте свою наступну автобусну поїздку. </h2>
                     <h3>І насолоджуйтеся безпроблемним плануванням подорожей з Atass.</h3>
                  </div>
                  <div className="column2">
                  </div>
               </div>
               <div className="container xx">
                  <SearchRoute />
               </div>
            </div>
         </main>
         <div className="row">
            <div className="col-sm-4">
               <div className="d-flex">
                  <img src={ticket} alt="Image" className="img-fluid mr-3" />
                  <p>Шукаєте квитки на автобус, які відповідають вашому графіку та бюджету?</p>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="d-flex">
                  <img src={worlwide} alt="Image" className="img-fluid mr-3" />
                  <p>Попрощайтеся з нескінченними пошуками автобусних квитків. Наша платформа дозволяє забронювати ідеальну подорож.</p>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="d-flex">
                  <img src={chat} alt="Image" className="img-fluid mr-3" />
                  <p>Потрібна допомога з бронюванням? Наша команда доступна цілодобово, щоб допомогти вам.</p>
               </div>
            </div>
         </div>
         <div className="container-1">
            <div className="cloud-box">
               <h2 className="mb-4">Куди ви хочете їхати?</h2>
            </div>
            <div className="row" style={{ paddingBottom: "50px" }} id="card">
               <div className="col" >
                  <div className="card next_card">
                     <div className="card-body route_card_body">
                        <div className="sq">
                           Київ
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ktwOSD kPQuM sc-dGAOeH GAPhQ" width="24" height="24" aria-hidden="true">
                              <g fill="none" stroke="#708C91" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                                 <path d="M9 19l-7-7 7-7"></path>
                                 <path d="M22 12H2"></path>
                              </g>
                           </svg>
                           Варшава
                        </div>
                        <div >
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon2 sc-ktwOSD kPQuM" width="24" height="24" aria-hidden="true">
                              <polyline fill="none" stroke="#708C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="9 18 15 12 9 6"></polyline>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card next_card">
                     <div className="card-body route_card_body">
                        <div >
                           Варшава
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ktwOSD kPQuM sc-dGAOeH GAPhQ" width="24" height="24" aria-hidden="true">
                              <g fill="none" stroke="#708C91" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                                 <path d="M9 19l-7-7 7-7"></path>
                                 <path d="M22 12H2"></path>
                              </g>
                           </svg>
                           Київ
                        </div>
                        <div >
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon2 sc-ktwOSD kPQuM" width="24" height="24" aria-hidden="true">
                              <polyline fill="none" stroke="#708C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="9 18 15 12 9 6"></polyline>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card next_card">
                     <div className="card-body route_card_body">
                        <div >
                           Київ
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ktwOSD kPQuM sc-dGAOeH GAPhQ" width="24" height="24" aria-hidden="true">
                              <g fill="none" stroke="#708C91" strokeWidth="2" strokliterlimit="10" strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                                 <path d="M9 19l-7-7 7-7"></path>
                                 <path d="M22 12H2"></path>
                              </g>
                           </svg>
                           Львів
                        </div>
                        <div >
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon2 sc-ktwOSD kPQuM" width="24" height="24" aria-hidden="true">
                              <polyline fill="none" stroke="#708C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="9 18 15 12 9 6"></polyline>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default MainSitePage