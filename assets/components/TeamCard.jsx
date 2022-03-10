import React from 'react'

function TeamCard(props) {
    return (

        <div className="col-lg-4 col-12 mx-auto my-4">
            <div className={`${props.no} team-card`}>
                <div className="img">
                    <img alt="team" src={props.img} />
                </div>
                <div className="caption">
                    <h4>{props.MemberName}</h4>
                    <p>{props.work}</p>
                </div>
                <div className="social-icons">
                    <ul>
                        <li className="facebbook"><a href={props.facebook}> <i className="fa-brands fa-facebook"></i></a></li>
                        <li className="linkedin"><a href={props.linkedin}> <i className="fa-brands fa-linkedin"></i></a></li>
                        <li className="instagram"><a href={props.instagram}> <i className="fa-brands fa-instagram"></i></a></li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default TeamCard
