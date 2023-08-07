import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessPaymnet = () => {
  return (
    <div>
     <div class="success-container">
        <img src="static/images/checked.png" alt="Успешно"/>
        <h1>Оплата прошла успешно!</h1>
        <p>Спасибо за оплату. Чек автоматически отправится вам на почту</p>
        <NavLink to="/">Вернуться на главную</NavLink>
    </div>
    </div>
  )
}

export default SuccessPaymnet