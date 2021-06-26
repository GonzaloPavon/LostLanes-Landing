import React, { Component} from 'react';

class TheProjectS02 extends Component{
  render(){
    return(
      <div  className="TheProjectSection">
        <div  className="SectionContainer">
          <div  className="LeftSide">
            <div  className="TitleText"><h3>WHAT IS THIS FUCKING GAME?</h3></div>
            <div  className="BodyText"><label>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</label></div>
          </div>
          <div  className="RightSide">
            <div className="VideoContainer">
              <iframe width="400" height="200"  src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Section02">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TheProjectS02;
