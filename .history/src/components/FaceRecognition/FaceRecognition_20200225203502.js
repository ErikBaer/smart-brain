import React from 'react';
import './FaceRecognition.css';




const FaceRecognition = ({box, imageUrl}) => {
    return (
       <div className='center ma'>
            <div className='absolute mt2'>
               <img id='inputImage' src={imageUrl} alt="test_image" width='500px' height='auto' ></img>
            </div>
            <div className = 'bounding_box' style= {{top: box.top, right: box.right, bottom: box.bottomRow, left: box.leftCol}}></div>
       </div>
    );
}

export default FaceRecognition;