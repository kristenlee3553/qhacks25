import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState } from 'react';
import { SceneData } from '../Data/SceneData';
import ChoiceBubble from '../Components/ChoiceBubble';

function EgoChoices() {

    const [sceneNum, SetSceneNum] = useState(0)
    
return (
    <div>
        {/* Header Text*/}
        <div>
            <div class="image-overlay">
                <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                <div class="overlay-text scene-title-text"> 
                    <h1>{SceneData[sceneNum].sceneTitle}</h1> 
                </div> 
            </div>
        </div>

        {/* Choices Text*/}
        <div class="center-choicediv">
        <table>
                    <th><div class="stagger"><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice1"}/></div></th>
                    <th><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice2"}/></th>
                    <th><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice3"}/></th>
                    <th><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice4"}/></th>
        </table>
        </div>
    </div>
  );
}

export default EgoChoices;