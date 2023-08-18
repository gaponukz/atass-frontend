import { NavLink } from 'react-router-dom'

const PageNotFound505 = () => {
  return (
    <body class="tyuio">
    <div class="container for_404">
    <h1 class="error-code">500</h1>
    <p class="error-message">
      Прохання зачекати декілька хвилин. <br />
      До того часу, візьміть чашку кави та віртуальної вибірки печива від нас, ми вже намагаємося відновити нормальний рух. 🍪🚍
    </p>
    <p class="home-link"><NavLink to="/">Повернутися на головну!</NavLink></p>
  </div>
  </body>
  )
}

export default PageNotFound505