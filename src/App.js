
import Main from "./Component/Main";
import Upsc from "./Component/UPSC/Upsc";
import Navbar from "./Component/Navbar/Navbar";
import {Route,Routes}from 'react-router-dom';
import Bitcoin from "./Component/Bitcoin/Bitcoin";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

      <Route path="/" element ={<Main/>}/>
      <Route path="/upsc" element ={<Upsc/>}/>
      <Route path="/bitcoin" element ={<Bitcoin/>}/>


      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
