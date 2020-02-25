import React from 'react'



const ImageLinkForm = () => {
    return (
       <div>
           <p className='f3'>
               {'This Magic Brain will detect faces in your pictures. Give it a try:'}
           </p>
            <div>
                <input className ='f4 pa2 w-30 center' type='text' />
                <button className='w-15 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>

       </div>
       
       
       
    );
}

export default ImageLinkForm;