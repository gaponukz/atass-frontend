import main_logo from "./static/images/Logo.png"
import icons8_erson_96 from "./static/images/icons8-person-96.png"
import icons8_contact_us_96 from "./static/images/icons8-contact-us-96.png"
import icons8_globe_96 from "./static/images/icons8-globe-96.png"
import loop from "./static/images/loop.png"
import ticket from "./static/images/ticket.png"
import worlwide from "./static/images/worldwide.png";
import chat from "./static/images/chat.png"

import { NavLink } from "react-router-dom"


const HeaderNavBar = () => {
   return (
      <>
         <nav className="navbar  " id="top">
            <div className="container-fluid">
               <div className="pic" >
                  <NavLink to="/">
                     <img src={main_logo} />
                  </NavLink>
               </div>
               <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                     <NavLink to="/">
                        <img src={main_logo} style={{ width: "90px" }} />
                     </NavLink>
                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                     <ul>
                        <img src={icons8_erson_96} className="person" style={{ float: "left" }} />
                        <li className="osob"><NavLink to="/user-profile">Увійти</NavLink></li>
                        <div style={{ marginRight: "100px", marginTop: "25px" }}>
                           <img src={icons8_contact_us_96} className="us" style={{ float: "left" }} />
                           <li className="onas"><a href="#" >О нас</a></li>
                        </div></ul>
                     <div id="selec">
                        <img src={icons8_globe_96} className="world" style={{ float: "left" }} />
                        <select id="language-selector1">
                           <option value="uk">Українська</option>
                           <option value="en">English</option>
                           <option value="pl">Polski</option>
                        </select>
                     </div>


                  </div>
               </div>
            </div>
         </nav>
         <nav className="navigation" id="top2">
            <NavLink to="/">

               <img src={main_logo} />
            </NavLink>
            <ul style={{ color: "white" }}>
               <select id="language-selector">
                  <option value="uk">Українська</option>
                  <option value="en">English</option>
                  <option value="pl">Polski</option>
               </select>
               <li ><NavLink to="/about-us">Про нас</NavLink></li>
               <li><NavLink to="/user-profile">Особистий кабінет</NavLink></li>
            </ul>
         </nav>

      </>
   )
}

export default HeaderNavBar