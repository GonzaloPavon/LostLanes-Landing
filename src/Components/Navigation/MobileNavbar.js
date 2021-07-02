import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

import { ReactComponent as Downarrows } from  '../../Icons/Down-arrows.svg';

class MobileNavbar  extends Component{
  render(){
    if (this.props.estado === true){
    return (
      <div  className="NavbarLiListM">
        <div  className="NavbarBotonM"><button onClick={this.props.cambiarEstado} className="ButtonIcon"><Downarrows/></button></div>
        <li className="NavbarLiE"><NavLink exact to="/" className='NavbarNavLinkM'>Inicio</NavLink></li>
        <li className="NavbarLiE"><NavLink to="/theproject" className='NavbarNavLinkM'>THE_PROJECT</NavLink></li>
        <li className="NavbarLiE"><NavLink to="/about" className='NavbarNavLinkM'>About</NavLink></li>
        <li className="NavbarLiE"><NavLink to="/gallery" className='NavbarNavLinkM'>Gallery</NavLink></li>
        <li className="NavbarLiE"><NavLink to="/news" className='NavbarNavLinkM'>News</NavLink></li>
      </div>
    )
  }
    else {
      return (
        <div  className="NavbarLiListM">
          <div  className="NavbarBotonM"><button onClick={this.props.cambiarEstado} className="ButtonIcon"><Downarrows/></button></div>
        </div>
      )
    }
  }
}

export default MobileNavbar;
