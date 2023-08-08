import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPaymnet } from '../features/payment/paymentSlice';
import { useNavigate } from 'react-router-dom';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
     name: yup.string().min(2, "Заповніть поле: Повне Ім'я").max(32, "Нажаль надто довгий запис, спробуйте скоротити").required(),
     email: yup.string().email().required(),
     phoneNumber: yup.string().matches(phoneRegExp, 'Заповніть поле: Номер телефону'),
});

const ProccessPaymentNF = () => {
     const route_info = useSelector((state) => state.route.route_info)

     const dispatch = useDispatch();
     const navigate = useNavigate()

     const { register, handleSubmit, formState: { errors }, resetField, reset } = useForm({
          resolver: yupResolver(schema),
     });

     const onSubmitHandler = (data) => {
          console.log({ data });

          if  (data.phoneNumber.includes(" ")) {
               toast.error("Неправильно введено номер\nПриклад: 09912312323", { autoClose: 1500 })
           }

          const obj = {
               "amount": route_info.price,
               "routeId": route_info.root_route_id,
               "passenger": {
                    "id": "",
                    "gmail": data.email,
                    "fullName": data.name,
                    "phoneNumber": data.phoneNumber,
                    "movingFromId": route_info.move_from.id,
                    "movingTowardsId": route_info.move_to.id
               }
          }
          console.log(obj);
          dispatch(postPaymnet({amount: route_info.price, routeId: route_info.root_route_id,
               gmail: data.email, fullName: data.name, phoneNumber: data.phoneNumber, movingFromId: route_info.move_from.id, movingTowardsId: route_info.move_to.id
          })).then(() => {
               navigate("/success-payment");
          })
     }

     useEffect(() => {
          if (route_info.length === 0) {
               navigate("/404")
          }
     }, [route_info])

     return (
          <div>
               <ToastContainer />
               <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                                        {...register("name")}

                                   />
                              </div>
                              {/* <p>{errors.name?.message}</p> */}
                         </div>
                         <div class="form-group xpo">
                              <label for="email">Номер телефону</label>
                              <div class="input-group rey mb-3 ">
                                   <input
                                        type="text"
                                        class="form-control zxc"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                        {...register("phoneNumber")}

                                   />
                              </div>
                              {/* <p>{errors.phoneNumber?.message}</p> */}

                         </div>
                         <div className="form-group xpo">
                              <label for="email">Email:</label>
                              <div className="input-group rey mb-3 ">
                                   <input
                                        type="text"
                                        className="form-control zxc"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                        {...register("email")}

                                   />
                              </div>
                              {/* <p>{errors.email?.message}</p> */}

                         </div>
                         <div className="btn-container">
                              <div className="but1">
                                   <button
                                        className="btn oi"
                                        type='submit'
                                   >Підтвердити</button>
                              </div>
                         </div>
                    </div>
               </form>
          </div>
     )
}

export default ProccessPaymentNF