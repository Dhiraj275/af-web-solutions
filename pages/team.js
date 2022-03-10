import React from 'react'
import Header from '../assets/components/Header'
import TeamCard from '../assets/components/TeamCard'
import TeamData from '../assets/components/TeamData'
function TeamPage() {
    return (
        <>
        <Header />
            <div className="other-page">
                <div className="team container">
                    <div className="heading my-5 text-center" style={{ fontFamily: "MyWebFont" }}>
                        <h3>Meat My Team</h3>
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
