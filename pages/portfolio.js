import React, { useEffect, useState } from 'react'
import Portfoliocard from '../assets/components/Portfoliocard'
import firebase from '../assets/components/firebase'
import Header from '../assets/components/Header'
import Head from 'next/head'
import $ from 'jquery'
function PortfolioPage() {
    ()=>{
        $('html').css('overflow-y', 'auto')
      }
    const [portfolioData, setPortfolioData]= useState([])
    useEffect(()=>{
        firebase.database().ref('portfolio/').on(("value"), (snapshot)=>{
            const snapVal = snapshot.val()
            var fatched = [];
            for(let id in snapVal){
                fatched.push({...snapVal[id], id})
            }
            setPortfolioData(fatched)
        })
    },[])
    return (
            <>
            <Header/>
            <div className="other-page">
            <Head>
                <title>Cover All Web Solutions | Portfolio</title>
            </Head>
            <div className="third">
                <div className="heading text-center">
                    <h3>My Portfolio</h3>
                    <p>Web Developer</p>
                </div>
                <div className="portfolio-body">
                    <div className="card-container">
                        {
                            portfolioData.map((val, ind) => {
                                return <Portfoliocard
                                portfolioData={{...val, index:ind}}
                                key={ind}
                                />
                            })
                        }

                    </div>
                </div>
            </div>
       
            </div>
            </>
        )
}

export default PortfolioPage
