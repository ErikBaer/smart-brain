import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: auto, width: auto }} >
                <div className="Tilt-inner pa3"> 
                    <img src={brain} alt='brain'/> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;