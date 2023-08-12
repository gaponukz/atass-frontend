import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import icons8_globe_96 from "./static/images/icons8-globe-96.png"
import check from "./static/images/checked.png"
import { useSelector } from 'react-redux'
const SuccessPaymnet = () => {

  const navigate = useNavigate()

  const user_code = useSelector((state) => state.payment.user_code)
  console.log(user_code);

  useEffect(() => {
    if (user_code === "") {
      navigate("/")
    } 
  }, [])

  return (
    <div>
     <div className="success-container">
        <img src={check} alt="Успешно"/>
        <h1>Підписка на маршрут здійснена успішно!</h1>
        <p>Наші менеджери скоро зв'яжуться з вами, збережіть код нижче, він може знадобитися</p>
        <p>{user_code}</p>
        <NavLink to="/">Повернутися на головну</NavLink>
    </div>
    </div>
  )
}

export default SuccessPaymnet