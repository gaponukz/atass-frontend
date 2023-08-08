import { NavLink } from "react-router-dom"


const PageNotFound = () => {
  return (
    <div>
      <div className="container for_404">
        <h1 className="error-code">404</h1>
        <p className="error-message">Страница не найдена</p>
        <p className="home-link"><NavLink to="/">Вернуться на главную страницу</NavLink></p>
      </div>
    </div>
  )
}

export default PageNotFound