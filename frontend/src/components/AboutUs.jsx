import React from 'react'
import FooterAboutUs from './FooterAboutUs'
import test1 from "./static/images/test1.jpg"
import test2 from "./static/images/test2.jpg"
import test3 from "./static/images/test3.jpg"





const AboutUs = () => {
  return (


    <div>
      
        <div class="about-us-container">
    <div class="about-us-content">

      <div class="info-row">
        <div class="info-block first_text">
          <h2>Про нас</h2>
          <h3>АТАСС-БОРИСПІЛЬ</h3>
          <p >Автотранспортне підприємство було засноване в 1938 році на базі автороти. За 80 років підприємство неодноразово змінювало назву та кваліфікацію перевезень: спочатку лише перевезення вантажів, потім змішаний тип – перевезення вантажів та пасажирів.



Підприємство має сучасну базу для якісного ремонту та обслуговування автобусів.</p>
<p id='new_line'>

На даний час підприємство займається перевезенням пасажирів по місту та району, області, обслуговування пасажирів міжнародного аеропорту та на договірній основі, а також вантажними перевезеннями.

Підприємство має сучасну базу для якісного ремонту та обслуговування автобусів.</p>
        
        </div>
        <div className='new_test'>
          <p className='ph'>Фотографії</p>
          <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={test1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={test2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={test3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='new_test'>
        <div class="info-block idea">
          <h1 className='new_h1' style={{fontWeight:'300', marginTop:"5%"}} >Контакти</h1>
          <h2 className='new_h2'>ЧЕКАЄМО НА ВАС</h2>
          <p  style={{color: 'black'}} >Володимира Момота 42</p>
          <p  style={{color: 'black'}}>Бориспіль,Київська,0830</p>
          <h4 style={{color:'#157FA2', fontWeight:'300'}}>прийомна:</h4>
          <p  style={{color: 'black'}}>04595 6 47 82</p>
          <h5 style={{color:'#157FA2', fontWeight:'300'}}>відділ перевезень:</h5>
          <p  style={{color: 'black'}}>04595 6 14 86</p>
          <p style={{color: 'black'}}>atass@atass.com.ua</p>
          <div className='button_con'>
          <button
                    type="submit"
                    className="btn ss zzzzzz"
                    style={{ backgroundColor: "#40ABCF", color: "white", fontWeight: "bold", width:'50%',marginTop:"5%" }}
                >
                        <span

                        >Напишіть нам</span>
                    
                </button></div>
        </div>
        </div>
      </div>
    </div>
  </div>
      <FooterAboutUs />
      
    </div>

  )
}

export default AboutUs