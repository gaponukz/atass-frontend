import { NavLink } from 'react-router-dom'

const PageNotFound505 = () => {
  return (
    <body class="tyuio">
    <div class="container for_404">
    <h1 class="error-code">505</h1>
    <p class="error-message">Страница не найдена</p>
    <p class="home-link"><NavLink to="/">Вернуться на главную страницу</NavLink></p>
  </div>
  </body>
  )
}

export default PageNotFound505