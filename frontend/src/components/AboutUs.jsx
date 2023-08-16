import React from 'react'
import FooterAboutUs from './FooterAboutUs'
import icons8_bus_96 from "./static/images/icons8-bus-96.png"





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
        </div>
        <div className='new_test'>
        <div class="info-block idea">
          <h1>Контакти</h1>
          <h2>ЧЕКАЄМО НА ВАС</h2>
          <p>Володимира Момота 42</p>
          <p>Бориспіль,Київська,0830</p>
          <h4>прийомна:</h4>
          <p>04595 6 47 82</p>
          <h5>відділ перевезень:</h5>
          <p>04595 6 14 86</p>
          <p>atass@atass.com.ua</p>
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