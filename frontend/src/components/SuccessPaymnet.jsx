import React from 'react'
import { NavLink } from 'react-router-dom'
import icons8_globe_96 from "./static/images/icons8-globe-96.png"
import check from "./static/images/checked.png"
const SuccessPaymnet = () => {
  return (
    <div>
     <div className="success-container">
        <img src={check} alt="Успешно"/>
        <h1>Платіж прошла успішно!</h1>
        <p>Дякую за оплату. Чек автоматично буде надіслано на пошту</p>
        <NavLink to="/">Вернутися на головну</NavLink>
    </div>
    </div>
  )
}

export default SuccessPaymnet