import React, { useState } from 'react'
import Swal from 'sweetalert2';
import firebase from './firebase';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNo: '',
        email: '',
        message: '',
    })
    const submitForm = (e) => {
        e.preventDefault()
        if (formData.name !== "", formData.email === "", formData.message === "", formData.phoneNo === "") {
            Swal.fire('All field are required', '', 'warning')
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(formData.email) === false) {
            Swal.fire('Email is in valid', '', 'warning')
        }
        if (reg.test(formData.email) === true && formData.name !== "" && formData.email !== "" && formData.message !== "" && formData.phoneNo !== "") {
            emailjs.sendForm('service_4ur89oj', 'template_q313rsw', e.target, '_rJlGUKsCQGwNslcb').then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            firebase.database().ref('contact-form').push(formData).then(() => {

                Swal.fire("The Message Sent Successfully", 'We Will Reply You As Soon As Possible', 'success')

            })
        }
    }
    return (
        <div className="contact-me">
            <div className="row">
                <div className="col-lg-6 px-lg-5 px-0">
                    <div className="heading"><h3>Contact Us</h3></div>
                    <form onSubmit={submitForm} className="form">
                        <label>Name/Full Name:</label>
                        <input required name="name"
                            value={formData.name} onChange={(event) => { setFormData({ ...formData, name: event.target.value }) }}
                            className="control-form" type="text" />
                        <label>Phone Number:</label>
                        <input required name="phoneNo"
                            value={formData.phoneNo} onChange={(event) => { setFormData({ ...formData, phoneNo: event.target.value }) }}
                            className="control-form" type="number" />
                        <label>Email:</label>
                        <input required name="email"
                            value={formData.email} onChange={(event) => { setFormData({ ...formData, email: event.target.value }) }}
                            className="control-form" type="email" />
                        <label>Message:</label>
                        <textarea required name="message"
                            value={formData.message} onChange={(event) => { setFormData({ ...formData, message: event.target.value }) }}
                            id="" cols="2" rows="2"></textarea>
                        <input type="submit" value="submit" className="submit-btn" />
                    </form>

                </div>
                <div className="col-lg-6 my-5 my-lg-0">
                    <div className="heading"><h3>Direct Contact</h3></div>
                    <div className="direct-contact">
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="tel:+919727085342"><div className="icon"><i className="fa fa-phone"></i></div></a>
                        </div>
                        <div className="icons ">
                            <a target="_blank" rel="noreferrer" href="http://wa.me/+919727085342?text=I want to *hire you*">
                                <div className="icon whatsapp"><i className="fa-brands fa-whatsapp"></i></div>
                            </a>
                        </div>
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="sms:+919727085342"> <div className="icon"><i className="fa fa-comment"></i></div></a>
                        </div>
                    </div>
                    <div className="heading"><h3>Follow Me ON</h3></div>
                    <div className="direct-contact">
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="http://www.instagram.com/dhruvloper"><div className="icon instagram"><i className="fa-brands fa-instagram"></i></div></a>
                        </div>
                        <div className="icons ">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dhiraj.prajapati.7146"> <div className="icon facebook"><i className="fa-brands fa-facebook"></i></div></a>
                        </div>
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dhruv-prajapati-031b6a216/"><div className="icon linkedin"><i className="fa-brands fa-linkedin"></i></div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact
