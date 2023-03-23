import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "react-dotenv";
import { data } from "../../data";
const initialState = {
NigeriaStates: data,
openSideBar: false, 
eventData: null,
relenderMarkers: null,
selectedEvent: null,
isloading:true,
viewPort: {
    latitude: 8.831122799397733,
    longitude: 7.172467300000001,
    zoom: 7,
    width: "100vw",
    height: "100vh",
    pitch: 50,
},

}


export const getWeatherForcast = createAsyncThunk('location/getWeatherForcast', async (name, thunkApi) => {
try {
    const lat = thunkApi.getState().location.viewPort.latitude
    const long = thunkApi.getState().location.viewPort.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&APPID=${env.REACT_APP_API_KEY}`
    const resp = await axios.get(url)

    return resp.data
} catch (error) {
   console.log(error);
   return thunkApi.rejectWithValue('something went wrong')
}
})
const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: { 
        setOpenSideBar: (state, action) => {
            state.openSideBar = action.payload
        },
        setSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload
        },
        setRelenderMarkes: (state, action) => {

        },
        setLenderEvent: (state, action) => {
            
        },
        setViewPort: (state, action) => {
            state.viewPort = action.payload
        },
    },
    extraReducers: {
        [getWeatherForcast.pending] : (state) => {
            state.isloading = true
        },
        [getWeatherForcast.fulfilled] : (state, action) => {
            state.isloading = false
            state.eventData = action.payload
            
        },
        [getWeatherForcast.rejected] : (state, action) => {
            console.log(action);
            state.isloading = false

        } 
    }
})
export const {setEventData,setSelectedEvent, setRelenderMarkes, setLenderEvent, setViewPort,setOpenSideBar} = locationSlice.actions
export default locationSlice.reducer