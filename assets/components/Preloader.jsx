import React from 'react'
import gadgets from '../images/gadgets.svg'
function Preloader() {
    return (
        <div className="pre-loader">
            <img src={gadgets} alt="" />
            <h2>WebBeond</h2>
        </div>
    )
}

export default Preloader
