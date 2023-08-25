import React from 'react'
import { useNavigate } from "react-router-dom"

const CardInfo = ({ check }) => {
  const navigate = useNavigate();
  return (
    <div>
     <div className="container-1">
            {check && (
               <div className="cloud-box">
               <h2 className="mb-4">Куди ви хочете їхати?</h2>
            </div>
            )}
            <div className="row" style={{ paddingBottom: "50px" }} id="card">
               <div className="col" >
                  <div className="card next_card" onClick={()=>{
                     navigate("/route?move_from_city=Київ&move_to_city=Варшава&date=*")
                     navigate(0)
                  }}>
                     <div className="card-body route_card_body">
                        <div className="sq">
                           Київ {'  '}
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ktwOSD kPQuM sc-dGAOeH GAPhQ" width="24" height="24" aria-hidden="true">
                              <g fill="none" stroke="#708C91" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                                 <path d="M9 19l-7-7 7-7"></path>
                                 <path d="M22 12H2"></path>
                              </g>
                           </svg>
                           {'  '} Варшава
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
                  <div className="card next_card" onClick={()=>{
                     navigate("/route?move_from_city=Бориспіль&move_to_city=Лодзь&date=*")
                     navigate(0)
                     }}>
                     
                     <div className="card-body route_card_body">
                        <div >
                        Бориспіль {'  '}
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ktwOSD kPQuM sc-dGAOeH GAPhQ" width="24" height="24" aria-hidden="true">
                              <g fill="none" stroke="#708C91" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                                 <path d="M9 19l-7-7 7-7"></path>
                                 <path d="M22 12H2"></path>
                              </g>
                           </svg>
                           {'  '} Лодзь
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
                  <div className="card next_card" onClick={()=>{
                     navigate("/route?move_from_city=Київ&move_to_city=Познань&date=*")
                     navigate(0)
                     }}>
                     <div className="card-body route_card_body">
                        <div >
                           Київ {'  '}
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ktwOSD kPQuM sc-dGAOeH GAPhQ" width="24" height="24" aria-hidden="true">
                              <g fill="none" stroke="#708C91" strokeWidth="2" strokliterlimit="10" strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                                 <path d="M9 19l-7-7 7-7"></path>
                                 <path d="M22 12H2"></path>
                              </g>
                           </svg>
                           {'  '} Познань
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
    </div>
  )
}

export default CardInfo