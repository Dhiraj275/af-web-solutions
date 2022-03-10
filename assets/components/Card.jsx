import React from 'react'
function Card(props) {
    return (
            <div className="col-lg-4 col-12">
                <div className="cards text-center">
                    <div className="img mx-auto">
                        <img src={props.imgsrc} className="svg" alt="" />
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.about}</p>
                    <div className="learn-more-btn" style={{display:"none"}}>
                        <a href="/" className="learn-more">Learn more</a>
                    </div>
                </div>
            </div>
    )
}

export default Card
