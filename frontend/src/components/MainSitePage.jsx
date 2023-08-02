import main_logo from "./static/images/Logo.png"
import icons8_erson_96 from "./static/images/icons8-person-96.png"
import icons8_contact_us_96 from "./static/images/icons8-contact-us-96.png"
import icons8_globe_96 from "./static/images/icons8-globe-96.png"
import loop from "./static/images/loop.png"
import ticket from "./static/images/ticket.png"
import worlwide from "./static/images/worldwide.png";
import chat from "./static/images/chat.png"
import SearchRoute from "./SearchRoute"
import CardInfo from "./CardInfo"

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
                  <SearchRoute flagNav={false} defaultMoveFrom={""} defaultMoveTo={""} defaultDate={""}/>
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
        
         <CardInfo check={true}/>
      </>
   )
}

export default MainSitePage