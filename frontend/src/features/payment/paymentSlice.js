import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000";
const BASE_URL_USER = "http://localhost:8080";
const BASE_URL_PAY = "http://localhost:9090";

export const postPaymnet = createAsyncThunk("pay/postPaymnet", async ({ amount, routeId, passenger, id, gmail, fullName, phoneNumber, movingFromId, movingTowardsId }) => {
     const response = await axios.post(`${BASE_URL_PAY}/processPayment`, {
          "amount": amount,
          "routeId": routeId,
          "passenger": {
              "id": id,
              "gmail": gmail,
              "fullName": fullName,
              "phoneNumber": phoneNumber,
              "movingFromId": movingFromId,
              "movingTowardsId": movingTowardsId
          }
     }
     )
     // console.log(response.data);
 
     return response.data
 })

 const paymentSlice = createSlice({
     name: "payment",
     initialState: {
          user_code: ""
     },
     reducers: {},
     extraReducers: (builder) => {
          builder
          .addCase(postPaymnet.pending, (state) => {
               console.log("p?");
          })
          .addCase(postPaymnet.fulfilled, (state, action) => {
               console.log("p+");
               console.log(action.payload);
               state.user_code = action.payload;
               
          })
          .addCase(postPaymnet.rejected, (state, action) => {
               console.log("p?");
          })
     }
 })

 export const {} = paymentSlice.actions;
 export default paymentSlice.reducer;