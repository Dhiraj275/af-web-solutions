import React, { useEffect, useState } from 'react'
import Portfoliocard from './Portfoliocard'
import firebase from './firebase'
function Portfolio() {
    const [portfolioData, setPortfolioData] = useState([])
    useEffect(() => {
        firebase.database().ref('portfolio/').on(("value"), (snapshot) => {
            const snapVal = snapshot.val()
            var fatched = [];
            for (let id in snapVal) {
                fatched.push({ ...snapVal[id], id })
            }
            setPortfolioData(fatched)
        })
    }, [])
    return (
        <>
            <div className="third">
                <div className="heading text-center">
                    <h3>Our Portfolio</h3>
                    <br />
                </div>
                <div className="portfolio-body">
                    <div className="card-container">
                        {
                            portfolioData.map((val, ind) => {
                                return <Portfoliocard
                                    portfolioData={{ ...val, index: ind }}
                                    key={ind}
                                />
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Portfolio
