import Slider from "react-slick";
import Carousel from "./Components/Responsive/Carousel";
import Item from "./Components/MultipleItems/Item";

import Resizable from "./Components/Resizable/Resizable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Slider />
      <Item />
      <Resizable />
    </div>
  );
}

export default App;
