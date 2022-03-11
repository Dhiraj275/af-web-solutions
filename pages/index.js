import React from 'react'
import Head from 'next/head'
import firebase from '../assets/components/firebase'
import Portfolio from '../assets/components/Portfolio'
import Contact from '../assets/components/Contact'
import Image from 'next/image'
import Header from '../assets/components/Header'
import Link from 'next/link'
import $ from 'jquery'
function Index() {
    ()=>{
        $('html').css('overflow-y', 'auto')
      }
    return (
        <div className="other-page">
            <Head>
                <title>Cover All Web Solutions | About Us</title>
            </Head>
            <Header />

            <div className="first">
                <div className="left">
                    <div className="circle-1">
                        <div className="circle-2">
                            <img src="/images/logo.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <div className="text">
                            <h1>Our <span> WORKS</span></h1>
                            <p>Web Development &amp; Mobile Development</p>
                        </div>
                        <div className="intro">
                            <div className="play-btn">
                                <i className="fa fa-play"></i>
                            </div>
                            <div className="px-2 d-flex justify-content-center align-items-center"> My Intro</div>
                        </div>
                        <div className="social">
                            <p>Follow me on:</p>
                            <div></div>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                            <a rel="noreferrer" target="_blank" href="http://www.instgram.com/"> <i className="fa-brands fa-instagram"></i></a>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/"><i className="fa-brands fa-linkedin"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="skills">

            </div>
            <div className="blue-line-horizontal"></div>
            <div className="blue-line-horizontal"></div>
            <div className="third">
                <Portfolio />
                <div className="view-all">
                    <Link href="/portfolio" className="view-all-btn">View All</Link>
                </div>
            </div>
            <div className="blue-line-horizontal"></div>
            <div className="fourth container">
                <div className="row">
                    <div className="testimonial col-lg-12 py-4 px-3">
                        <div className="heading text-center">
                            <h3>Valuable Testimonials</h3>
                            <p>See What People Say About Me</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12 py-4">
                                <div className="testimonial-card">
                                    <div className="img">
                                        <div className="cirlcle">
                                            <img src="/images/client1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <h3>Dhaval Patel</h3>
                                    <p>Very easy to use. Keep up the excellent work. Website was the best investment I ever made. Needless to say we are extremely satisfied with the results. Thank Dhruv.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 py-4">
                               <div className="testimonial-card">
                               <div className="img">
                                    <div className="cirlcle">
                                        <img src="/images/p1l.png" alt="" />
                                    </div>
                                </div>
                                <h3>Cyber Flax</h3>
                                <p>Very easy to use. Keep up the excellent work. Website was the best investment I ever made. Needless to say we are extremely satisfied with the results. Thank Dhruv.</p></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="blue-line-horizontal"></div>
            <Contact />
            <div className="blue-line-horizontal"></div>

        </div>
    )
}

export default Index
