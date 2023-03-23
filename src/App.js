import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Preloader from "./Components/PreLoader";
import SideBar from "./Components/SideBar";
import { getWeatherForcast } from "./Features/LocationSlice/LocationSlice";


function App() {

  const dispatch = useDispatch()
  const {
    selectedEvent,
    isloading,
  } = useSelector(state => state.location)
useEffect(() => {
dispatch(getWeatherForcast())
}, [selectedEvent, dispatch])
useEffect(() => {
  dispatch(getWeatherForcast())
}, [dispatch])
  return (
    <div className="app max-w-full">
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
