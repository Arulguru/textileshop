// import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
// import Navi from "./components/Navi"
import Header from './components/Header';
import Body from './components/Body';
// import Particles from "react-particles-js"

function App() {
  return (
    <div className="App">
      {/* <Navi/> */}
     
      <Header/>
      <Cards/>
      <Body/>
    </div>
  );
}

export default App;
