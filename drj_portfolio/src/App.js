import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
      <div className="page">
      <div className="gradientBorder">
        <div className="wrapper">
          <Header/>
          <Main/>
          
        </div>
      </div>
      <Footer/>
      </div>
      
    
  );
}

export default App;
