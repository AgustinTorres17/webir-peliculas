import "./App.css";
import { Header } from "./Header";
import { Carousel } from "./Carousel";
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {


  return (
    <>
      <div className="h-screen w-full p-0 m-0 bg-primario">
        <Header />
        <Carousel />
      </div>
    </>
  );
}

export default App;
