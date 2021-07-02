import React, { Component} from 'react';

import EntilIcon from '../../../Assets/TheProject/EntiIcon.jpg';
import MayaIcon from '../../../Assets/TheProject/MayaIcon.jpg';
import UdBIcon from '../../../Assets/TheProject/UdBIcon.jpg';
import UnrealIcon from '../../../Assets/TheProject/UnrealIcon.jpg';
import SubstanceIcon from '../../../Assets/TheProject/SubstanceIcon.jpg';

class TheProjectS06 extends Component{
  render(){
    return(
      <div  className="SponsorsSection">
        <div  className="TitleSponsor">With the sponsorship:</div>
        <div  className="BrandSponsors"><img src={EntilIcon} alt="EntilIcon" className="Brand"/>
                                        <img src={MayaIcon} alt="MayaIcon" className="Brand"/>
                                        <img src={UdBIcon} alt="UdBIcon" className="Brand"/>
                                        <img src={UnrealIcon} alt="UnrealIcon" className="Brand"/>
                                        <img src={SubstanceIcon} alt="SubstanceIcon" className="Brand"/></div>
        <a href="#HomeProjectId"   className="ButtonSponsors"><button  >BACK TO TOP</button></a>
      </div>
    )
  }
}
export default TheProjectS06;
