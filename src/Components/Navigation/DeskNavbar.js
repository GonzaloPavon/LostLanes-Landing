import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

import MobileNavbar from './MobileNavbar';

import { ReactComponent as Downarrows } from  '../../Icons/Down-arrows.svg';

class DeskNavbar  extends Component{

  state =  {
    mostrar:false
  }
  cambiarEstado = ()  =>{
    this.setState({mostrar:!this.state.mostrar})
  }
  render(){
    return(
      <div  className="Navbar">
        <ul className="NavbarUlE">
          <div  className="NavbarBotonE"><button className="ButtonIcon"><Downarrows/></button></div>
          <div  className="NavbarLiListE">
            <li className="NavbarLiE"><NavLink exact to="/" className='NavbarNavLinkE'>Inicio</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/theproject" className='NavbarNavLinkE'>THE PROJECT</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/about" className='NavbarNavLinkE'>About</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/gallery" className='NavbarNavLinkE'>Gallery</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/news" className='NavbarNavLinkE'>News</NavLink></li>
          </div>
        </ul>
        <ul className="NavbarUlM">
          <MobileNavbar estado={this.state.mostrar}  cambiarEstado={this.cambiarEstado} Downarrows={<Downarrows/>}/>
        </ul>
      </div>
    )
  }
}

export default DeskNavbar;
