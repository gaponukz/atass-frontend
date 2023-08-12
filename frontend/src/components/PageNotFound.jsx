import { NavLink } from "react-router-dom"


const PageNotFound = () => {
  return (
    <body class="tyuio">
    <div>
      <div className="container for_404">
        <h1 className="error-code">404</h1>
        <p className="error-message">Сторінка, яку ви шукаєте, не існує</p>
        <p className="home-link"><NavLink to="/">Повернутися на головну!</NavLink></p>
      </div>
    </div>
    </body>
  )
}

export default PageNotFound