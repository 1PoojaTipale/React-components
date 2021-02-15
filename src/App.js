import './Pooja.css'//to join the css file
import About from './components/screen/About.js';
import Myinformation from './components/Myinformation.js';
function App() {
  return (
    <div>
   
     <h1 className="pooja"> Welcome To React JS</h1>

     <h1 className="wisdom"> Today is Thursday</h1>
    
       <h2 id="test"> Welcome to Our Home</h2>  
       
       <About></About>

       <Myinformation name="Pooja" age="24" mobileno ="+915555555555"> </Myinformation>
       <Myinformation name="Sneha" age="23" mobileno ="+915566441215"></Myinformation>
       <Myinformation name="sayali" age="23"mobileno ="+915556389545"> </Myinformation>
    </div>
  );
}

export default App;
