import Head from 'next/head'
import React from 'react'
import Contact from '../assets/components/Contact'
import Header from '../assets/components/Header'
import $ from 'jquery'
function ContactPage() {
    ()=>{
        $('html').css('overflow-y', 'auto')
      }
    return (
        <div className="other-page">
            <Head>
                <title>Contact Us | Cover All Web Solutions</title>
            </Head>
            <Header />
            <Contact />
            <div className="blue-line-horizontal"></div>
        </div>
    )
}

export default ContactPage
