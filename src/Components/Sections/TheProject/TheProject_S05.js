import React, { Component} from 'react';
import Face_Assets from '../../../Assets/TheProject/Face_Assets.png';

class TheProjectS05 extends Component{
  render(){
    return(
      <div  className="CenterSection">
        <div  className="FacesGroup">
          <img src={Face_Assets} alt="Face_Assets" className="Faces"/>
        </div>
        <div  className="centerTextContainer">
          <div  className="centerTextTitle">
            <h3>WHAT IS THIS FUCKING GAME?</h3>
          </div>
          <div  className="centerTextBody">
            <label> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur et euismod lectus. Nullam ut tristique mi. Nulla pellentesque et ante sit amet aliquam. Aliquam tincidunt eu lectus a laoreet. Nulla in consequat nisi. Donec nec consectetur mauris, eu tempor mauris. Quisque feugiat, tortor sed fringilla cursus, orci justo mollis lacus, in tincidunt diam tortor vitae est. Donec viverra ipsum eget sapien venenatis fringilla. Donec pulvinar, purus non vulputate pulvinar, diam massa faucibus ligula, a porttitor mauris elit non arcu. Aliquam id sagittis nibh. Duis sed pellentesque augue, vel sollicitudin enim. Phasellus orci risus, semper a lobortis quis, tempus in lorem. Phasellus sit amet elementum tortor. Mauris pellentesque, orci id volutpat egestas, ipsum metus feugiat purus, at molestie nulla nibh nec diam. Vivamus a est faucibus, convallis ipsum sit amet, pulvinar risus. Maecenas pulvinar erat vitae tellus tristique tempor. Proin a ultrices nisi, eu sollicitudin lorem. Donec auctor dolor in eros ullamcorper iaculis. Integer id aliquam lacus, vitae interdum metus. Suspendisse ac arcu id nisl blandit convallis at eu tellus. Vivamus auctor mi non elementum scelerisque. </label>
          </div>
        </div>
      </div>
    )
  }
}
export default TheProjectS05;
