import React, { Component} from 'react';

import  TheProjectS01 from  './TheProject_S01';
import  TheProjectS02 from  './TheProject_S02';
import  TheProjectS03 from  './TheProject_S03';
import  TheProjectS04 from  './TheProject_S04';
import  TheProjectS05 from  './TheProject_S05';
import  TheProjectS06 from  './TheProject_S06';
import  TheProjectS07 from  './TheProject_S07';

class TheProject extends Component{
  render(){
    return(
      <div  className="TheProjectScreen">
        <TheProjectS01/>
        <TheProjectS02/>
        <TheProjectS03/>
        <TheProjectS04/>
        <TheProjectS05/>
        <TheProjectS06/>
        <TheProjectS07/>
      </div>
    )
  }
}
export default TheProject;
