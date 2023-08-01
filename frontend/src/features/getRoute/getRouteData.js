import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

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

export const getRouteInfoDetail = createAsyncThunk("route/getRouteInfoDetail", async ({ id }) => {
     console.log("tytt", `${BASE_URL}/get_route_info?route_id=${id}`, id);
     const response = await axios.get(`${BASE_URL}/get_route_info?route_id=${id}`, 
     {
          withCredentials: false
     })
     console.log(response.data);
     
     return response.data;
})

const routeSlice = createSlice({
     name: "route",
     initialState: {
         route_family: [],
         route_info: []
     },
     reducers: {

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
     }
})

export const { } = routeSlice.actions;
export default routeSlice.reducer;