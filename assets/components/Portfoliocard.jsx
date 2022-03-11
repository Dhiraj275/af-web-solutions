import React from 'react'

const Portfoliocard = (props) => {
    const portfolioData = props.portfolioData
    return (
        <a key={portfolioData.index}  rel="noreferrer" target={portfolioData.link===undefined?"_self":"_blank"} href={portfolioData.link===undefined?"#":portfolioData.link}>
            <div className="portfolio-card">

                <div className="face face1">
                    <img src={portfolioData.logoUrl} alt="" />
                </div>
                <div className="face face2">
                    <img src={portfolioData.portfolioCoverUrl} alt="" />
                </div>
            </div>
        </a>
    )
}

export default Portfoliocard
