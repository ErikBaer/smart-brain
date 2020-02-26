import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn==='true') {
        return (
            <nav style ={{display:"flex", justifyContent:"flex-end"}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim light-blue underline pa3 pointer'>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style ={{display:"flex", justifyContent:"flex-end"}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim light-blue underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim light-blue underline pa3 pointer'>Register</p>
            </nav>
        )

    }
}

export default Navigation;