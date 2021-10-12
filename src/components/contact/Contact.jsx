import "./contact.css"
import React, { useRef, useState, useContext } from 'react'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode =  theme.state.darkMode;

    const handleSubmit = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_2hipo2l', 'template_sycvuhr', formRef.current, 'user_5KYwCRC5e1XPbBG5n5cjR')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className="c-icon" src={Phone} alt="" />
                            +124 454 655
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            iamshamimbn@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Dhaka 1212, Bangladesh
                        </div>
                
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Illo vitae veniam soluta voluptate ipsa aliquid eveniet magnam at doloribus perspiciatis, dolores illum? Veritatis atque nesciunt mollitia minus corrupti expedita asperiores.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text"  placeholder="Name" name="user_name" />
                        <input  type="text"  placeholder="Subject" name="user_subject" />
                        <input  type="text"  placeholder="Email" name="user_email" />
                        <textarea  name="message" id="" placeholder="Message" rows="5"></textarea>
                        <button >Submit</button>
                        {
                            done && "Message Sent!"
                        }
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact
