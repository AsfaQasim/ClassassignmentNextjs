import React from "react";
 import csstyle from './contact.module.css'
 import Link from "next/link";
 import { FaGithub } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div className={csstyle.bg}>
      <div>
      <h1 className={csstyle.heading}>My Contact Form</h1>
        <div className={csstyle.contactform}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>

            <button>Send Message</button>
            <div className={csstyle.linked}>
            <Link target="_blank" href={'https://github.com/AsfaQasim?tab=repositories'}>
            <FaGithub /></Link>
            <div className={csstyle.linked2}>
            <Link target="_blank" href={'https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
            <FaLinkedin /></Link>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    );
}
