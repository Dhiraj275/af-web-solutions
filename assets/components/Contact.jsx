import React, { useState } from 'react'
import Swal from 'sweetalert2';
import firebase from './firebase';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNo: '',
        email: '',
        message: '',
    })
    const submitForm = () => {
       
        if (formData.name!=="", formData.email==="", formData.message==="", formData.phoneNo==="") {
            Swal.fire('All field are required', '', 'warning')
         }
         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(formData.email) === false) {
           Swal.fire('Email is in valid', '', 'warning')
        }
        if(reg.test(formData.email) === true && formData.name!=="" && formData.email!=="" && formData.message!=="" && formData.phoneNo!==""){
            firebase.database().ref('contact-form').push(formData).then(()=>{
                Swal.fire("The Message Sent Successfully", 'We Will Reply You As Soon As Possible', 'success')
            })
        }
    }
    return (
        <div className="contact-me">
            <div className="row">
                <div className="col-lg-6 px-lg-5 px-0">
                    <div className="heading"><h3>Contact Us</h3></div>
                    <form action="/" className="form">
                        <label>Name/Full Name:</label>
                        <input required value={formData.name} onChange={(event)=>{setFormData({...formData, name: event.target.value})}} className="control-form" type="text" name="text" />
                        <label>Phone Number:</label>
                        <input required value={formData.phoneNo} onChange={(event)=>{setFormData({...formData, phoneNo: event.target.value})}} className="control-form" type="number" name="text" />
                        <label>Email:</label>
                        <input required value={formData.email} onChange={(event)=>{setFormData({...formData, email: event.target.value})}} className="control-form" type="email" name="text" />
                        <label>Message:</label>
                        <textarea required value={formData.message} onChange={(event)=>{setFormData({...formData, message: event.target.value})}} id="" cols="2" rows="2"></textarea>
                        <button type="button" onClick={submitForm} className="submit-btn">Submit</button>
                    </form>

                </div>
                <div className="col-lg-6 my-5 my-lg-0">
                    <div className="heading"><h3>Direct Contact</h3></div>
                    <div className="direct-contact">
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="tel:+9999999999"><div className="icon"><i className="fa fa-phone"></i></div></a>
                        </div>
                        <div className="icons ">
                            <a target="_blank" rel="noreferrer" href="http://wa.me/+9999999999?text=I want to *hire you*">
                                <div className="icon whatsapp"><i className="fa-brands fa-whatsapp"></i></div>
                            </a>
                        </div>
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="sms:+9999999999"> <div className="icon"><i className="fa fa-comment"></i></div></a>
                        </div>
                    </div>
                    <div className="heading"><h3>Follow Me ON</h3></div>
                    <div className="direct-contact">
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="http://www.instagram.com/"><div className="icon instagram"><i className="fa-brands fa-instagram"></i></div></a>
                        </div>
                        <div className="icons ">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"> <div className="icon facebook"><i className="fa-brands fa-facebook"></i></div></a>
                        </div>
                        <div className="icons">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/"><div className="icon linkedin"><i className="fa-brands fa-linkedin"></i></div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact
