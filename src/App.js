import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Map from "./Components/Map";
import Preloader from "./Components/PreLoader";
import SideBar from "./Components/SideBar";
import { getWeatherForcast } from "./Features/LocationSlice/LocationSlice";
import {setEventData,setSelectedEvent, setRelenderMarkes, setLenderEvent,setViewPort} from "./Features/LocationSlice/LocationSlice";

function App() {

  const dispatch = useDispatch()
  const {eventData,
    selectedEvent,
    relenderMarkers,
    isloading,
    lenderEvent, viewPort} = useSelector(state => state.location)
useEffect(() => {
dispatch(getWeatherForcast())
}, [selectedEvent])
useEffect(() => {
  dispatch(getWeatherForcast())
}, [])
  return (
    <div className="app">
      <Header />
      <Main />
      <SideBar />
      <Footer />
{
  isloading && <Preloader />
}
    </div>
  );
}

export default App;
