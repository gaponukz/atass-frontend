import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPaymnet } from '../features/payment/paymentSlice';
import { useNavigate } from 'react-router-dom';

const ProccessPaymentNF = () => {
     const route_info = useSelector((state) => state.route.route_info)

     const dispatch = useDispatch();
     const navigate = useNavigate()

     const [name, setName] = useState("");
     const [phone, setPhone] = useState("");
     const [email, setEmail] = useState("");

     const handleButtonClick = () => {
          const obj = {
               "amount": route_info.price,
               "routeId": route_info.root_route_id,
               "passenger": {
                    "id": "",
                    "gmail": email,
                    "fullName": name,
                    "phoneNumber": phone,
                    "movingFromId": route_info.move_from.id,
                    "movingTowardsId": route_info.move_to.id
               }
          }
          console.log(obj);
          dispatch(postPaymnet({amount: route_info.price, routeId: route_info.root_route_id,
               gmail: email, fullName: name, phoneNumber: phone, movingFromId: route_info.move_from.id, movingTowardsId: route_info.move_to.id
          }))
     }

     useEffect(() => {
          if (route_info.length === 0) {
               navigate("/")
          }
     }, [route_info])

     return (
          <div>
               <div class="container">
                    <div class="form-group xpo">
                         <label for="name" class="nad">Введіть інформацію про себе</label>
                         <label for="name">Повне ім'я</label>
                         <div class="input-group rey mb-3 ">
                              <input
                                   type="text"
                                   class="form-control zxc"
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                              />
                         </div>
                    </div>
                    <div class="form-group xpo">
                         <label for="email">Номер телефону</label>
                         <div class="input-group rey mb-3 ">
                              <input
                                   type="text"
                                   class="form-control zxc"
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                              />
                         </div>
                    </div>
                    <div class="form-group xpo">
                         <label for="email">Email:</label>
                         <div class="input-group rey mb-3 ">
                              <input
                                   type="text"
                                   class="form-control zxc"
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                              />
                         </div>
                    </div>
                    <div class="btn-container">
                         <div class="but1">
                              <button
                                   class="btn oi"
                                   onClick={handleButtonClick}
                              >Підтвердити</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ProccessPaymentNF