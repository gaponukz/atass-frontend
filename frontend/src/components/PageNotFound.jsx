import { NavLink } from "react-router-dom"


const PageNotFound = () => {
  return (
    <body class="tyuio">
    <div>
      <div className="container for_404">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Виглядає, ніби ви вибралися на зупинку, якої ніколи не існувало на нашому автобусному маршруті. <br />
          Можливо, це виглядає як приголомшливий пригодницький маршрут, але на жаль, наші автобуси не ризикують такими вибухами драйву.
        </p>
        <p className="home-link"><NavLink to="/">Повернутися на головну!</NavLink></p>
      </div>
    </div>
    </body>
  )
}

export default PageNotFound