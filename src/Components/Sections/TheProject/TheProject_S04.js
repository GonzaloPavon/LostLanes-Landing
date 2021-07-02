import React, { Component} from 'react';

import Marks_Assets from '../../../Assets/TheProject/Marks_Assets.png';

class TheProjectS04 extends Component{
  render(){
    return(
      <div  className="TheProjectSection">
        <div  className="SectionContainer">
          <div  className="LeftSide">
            <div  className="MarksGroup">
              <img src={Marks_Assets} alt="Marks_Assets" className="Marks_Assets"/>
            </div>
          </div>
          <div  className="RightSide">
            <div  className="TitleText"><h3>WHAT IS THIS FUCKING GAME?</h3></div>
            <div  className="BodyText"><label>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.</label></div>
            <div className="VideoContainer">
              <iframe width="400" height="200"  src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Section04">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TheProjectS04;
