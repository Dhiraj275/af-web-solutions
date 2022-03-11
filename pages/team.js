import Head from 'next/head'
import React from 'react'
import Header from '../assets/components/Header'
import TeamCard from '../assets/components/TeamCard'
import TeamData from '../assets/components/TeamData'
function TeamPage() {
    return (
        <>
        <Header />
            <div className="other-page">
            <Head>
                <title>Cover All Web Solutions | Team</title>
            </Head>
                <div className="team container">
                    <div className="heading my-5 text-center" style={{ fontFamily: "MyWebFont" }}>
                        <h3>Meet Our Team</h3>
                    </div>
                    <div className="row">
                        {
                            TeamData.map((val, ind) => {
                                return <TeamCard
                                    key={ind}
                                    img={val.img}
                                    MemberName={val.MemberName}
                                    work={val.work}
                                    no={val.no}
                                    instagram={val.instagram}
                                    facebook={val.facebook}
                                    linkedin={val.linkedin}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default TeamPage
