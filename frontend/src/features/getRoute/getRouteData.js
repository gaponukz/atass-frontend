import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000";
const BASE_URL_USER = "http://localhost:8080";


export const getUserIdRoute = createAsyncThunk("data/getUserIdRoute", async () => {
     const response = await axios.get(`${BASE_URL_USER}/getUserInfo`, {
          withCredentials: true
     })
     //console.log(response.data);
 
     return response.data
 })

export const getRouteInfo = createAsyncThunk("route/getRouteInfo", async ({ fromCity, toCity, date }) => {
     console.log("here");
     // console.log(fromCity, toCity, date);
     console.log(`${BASE_URL}/available?move_from_city=${fromCity}&move_to_city=${toCity}&date=${date}`);

     const response = await axios.get(`${BASE_URL}/available?move_from_city=${fromCity}&move_to_city=${toCity}&date=${date}`,
          {
               withCredentials: false
          }
     )
     console.log(response.data);

     return response.data
})

export const getRouteInfoDetail = createAsyncThunk("route/getRouteInfoDetail", async ({ id, id_from, id_to }) => {
     console.log("tytt", `${BASE_URL}/get_path_info?route_id=${id}&move_from=${id_from}&move_to=${id_to}`, id);
     const response = await axios.get(`${BASE_URL}/get_path_info?route_id=${id}&move_from=${id_from}&move_to=${id_to}`, 
     {
          withCredentials: false
     })
     console.log(response.data);
     
     return response.data;
})

export const getRouteHint = createAsyncThunk("route/getRouteHint", async () => {
     const response = await axios.get(`${BASE_URL}/availability_graph`, 
     {
          withCredentials: false
     })
     // console.log(response.data);
     
     return response.data;
})

export const getUserRoute = createAsyncThunk("route/getUserRoute", async ({ routeid, fromId, toId }) => {
     const response = await axios.get(`${BASE_URL}/get_path_info?route_id=${routeid}&move_from=${fromId}&move_to=${toId}`, 
     {
          withCredentials: false
     })
     // console.log(response.data);
     
     return response.data;
})

const routeSlice = createSlice({
     name: "route",
     initialState: {
         route_family: [],
         route_info: [],
         user: {
          err: "",
          info: {},
          succedded: false
         }
     },
     reducers: {
          idleStatus: (state) => {
               state.user.succedded = false;
               state.user.err = "";
          }
     },
     extraReducers: (builder) => {
          builder
               .addCase(getRouteInfo.pending, (state) => {
                    console.log("n?");
               })
               .addCase(getRouteInfo.fulfilled, (state, action) => {
                    console.log("n+");
                    //console.log(action.payload);
                    state.route_family = [...action.payload];
               })
               .addCase(getRouteInfo.rejected, (state, action) => {
                    console.log("n-");
               })
               .addCase(getRouteInfoDetail.pending, (state) => {
                    console.log("n1?");
               })
               .addCase(getRouteInfoDetail.fulfilled, (state, action) => {
                    console.log("n1+");
                    //console.log(action.payload.rules);
                    //console.log(action.payload.description);
                    //console.log(action.payload.transportation_rules);

                    state.route_info = {...action.payload}
               })
               .addCase(getRouteInfoDetail.rejected, (state, action) => {
                    console.log("n1-");
                    
               })
               .addCase(getUserIdRoute.pending, (state) => {
                    console.log("u?");
               })
               .addCase(getUserIdRoute.fulfilled, (state, action) => {
                    console.log("u+");
                    state.user.succedded = true;
                    state.user.info = {...action.payload};
               })
               .addCase(getUserIdRoute.rejected, (state, action) => {
                    console.log("u-");
                    state.user.err = action.error.message;
               })
               .addCase(getRouteHint.pending, (state) => {
                    //console.log("h?");
               })
               .addCase(getRouteHint.fulfilled, (state, action) => {
                    //console.log("h+");
               })
               .addCase(getRouteHint.rejected, (state, action) => {
                    //console.log("h-");
               })
               .addCase(getUserRoute.pending, (state) => {
                    //console.log("t?");
               })
               .addCase(getUserRoute.fulfilled, (state, action) => {
                    //console.log("+");
               })
               .addCase(getUserRoute.rejected, (state, action) => {
                    //console.log("h-");
               })
     }
})

export const { idleStatus } = routeSlice.actions;
export default routeSlice.reducer;