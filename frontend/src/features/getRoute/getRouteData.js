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
     //console.log(response.data);

     return response.data
})

const routeSlice = createSlice({
     name: "route",
     initialState: {
         route_family: []
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
     }
})

export const { } = routeSlice.actions;
export default routeSlice.reducer;