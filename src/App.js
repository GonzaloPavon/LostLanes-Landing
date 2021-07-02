//Frameworks principales
import  React from  'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import './App.css';
import  './Styles/CssMaster.css';
import  './Icons/icons.css';
import  './Styles/About.css';
import  './Styles/Login.css';

//Sections
import DeskNavbar from './Components/Navigation/DeskNavbar';
import Home from './Components/Sections/Home';
import TheProject from './Components/Sections/TheProject/TheProject';
import About from './Components/Sections/About';
import Gallery from './Components/Sections/Gallery';
import News from './Components/Sections/News';
import Footer from './Components/Sections/Footer';
import Login from './Components/Sections/Login';

//Componente
function App() {
  return (
    <Router>
      <DeskNavbar/>
      <div  className='AppRoutes'>
          <Route  path='/'  exact component={Home}/>
          <Route  path='/theproject'  exact component={TheProject}/>
          <Route  path='/about'  component={About}/>
          <Route  path='/gallery'  component={Gallery}/>
          <Route  path='/news'  component={News}/>
          <Route  path='/login'  component={Login}/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
