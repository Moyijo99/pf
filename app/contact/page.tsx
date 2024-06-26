"use client";
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa"
import { BsMedium, BsTwitter, BsMailbox, BsLinkedin, BsTelephone, BsGithub } from "react-icons/bs"
import { useForm } from "react-hook-form"
import emailjs from "emailjs-com"
import ContactStyles from "../styles/Contact.module.scss"

const ContactPage = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [statusMessage, setStatusMessage] = useState("Fill in the form below to send me a message")

    const onSubmit = () => {
        emailjs.sendForm('service_6skm0wr', 'template_0329f1r', '.form', 'NbYzr8u5DO_uMLwQ-')
            .then((result: any) => {
                setStatusMessage("Message sent successfully, and I'll make sure to get back to you within 24 hours.");
                console.log(result.text);
            }, (error: any) => {
                console.log(error.text);
            });
        reset();
    };

    return (
        <>
            <div className='container my-5'>
                <h1 className='text-3xl text-center uppercase'>Contact Me</h1>
                <p className={`${ContactStyles.statusMessage} text-center`}>{statusMessage}</p>            
            </div>
            <section className={`${ContactStyles.contact} container`}>
                    <div>
                        <h2 className="title"><span className="line"></span>Get in touch</h2>

                        <form className={`${ContactStyles.form} form`} onSubmit={handleSubmit(onSubmit)}>
                            <div className={ContactStyles.gridInput}>
                                <div>
                                    <input 
                                        {...register("fullName", {
                                            required: "required"
                                        })} 
                                        placeholder="Full Name" 
                                        name="fullName" 
                                    />
                                    {
                                        errors.fullName && errors.fullName.type === "required" && (
                                            <span className={ContactStyles.errorMsg}>Field can&apos;t be empty</span>
                                        )
                                    }
                                </div>

                                <div>
                                    <input 
                                        {...register("email", {
                                            required: "required"
                                        })} 
                                        placeholder="Email" 
                                        name="email" 
                                    />
                                    {
                                        errors.email && errors.email.type === "required" && (
                                            <span className={ContactStyles.errorMsg}>Field can&apos;t be empty</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={ContactStyles.gridInput}>
                                <div>
                                    <input 
                                        {...register("phoneNumber", {
                                            required: "required"
                                        })} 
                                        placeholder="Phone Number" 
                                        name="phoneNumber" 
                                    />
                                    {
                                        errors.phoneNumber && errors.phoneNumber.type === "required" && (
                                            <span className={ContactStyles.errorMsg}>Field can&apos;t be empty</span>
                                        )
                                    }
                                </div>

                                <div>
                                    <input 
                                        {...register("subject", {
                                            required: "required"
                                        })} 
                                        placeholder="Subject" 
                                        name="subject" 
                                    />

                                </div>
                            </div>
                            <div>
                                <textarea 
                                    {...register("message", {
                                        required: "required"
                                    })} 
                                    placeholder="Message" 
                                    name="message"
                                />
                                {
                                    errors.message && errors.message.type === "required" && (
                                        <span className={ContactStyles.errorMsg}>Field can&apos;t be empty</span>
                                    )
                                }
                            </div>
                            <button type="submit" className="btn mt-5 w-full">Send</button>
                        </form>
                    </div>

                    <div className={ContactStyles.right}>
                        <h2 className="title"><span className="line"></span>Contact Information</h2>
                        <p className="mb-3">Use any of the social media links of your choice below to contact me</p>            
                        <div className={ContactStyles.oneLiner}>
                            <BsMailbox />
                            <p>moyeedjo@gmail.com</p>
                        </div>
                        <div className={ContactStyles.oneLiner}>
                            <BsTelephone />
                            <p>+23490 8272 1195</p>
                        </div>
                        <div className={ContactStyles.socialLinks}>
                            <a className={ContactStyles.socialLink} target="_blank" href="https://www.linkedin.com/in/maishanu-ahidjo-36bb7b1bb/" rel="noreferrer"><BsLinkedin className={ContactStyles.icon} /></a>
                            <a className={ContactStyles.socialLink} target="_blank" href="https://github.com/Moyijo99" rel="noreferrer"><BsGithub className={ContactStyles.icon} /></a>
                            <a className={ContactStyles.socialLink} target="_blank" href="https://twitter.com/moyeedjo" rel="noreferrer"><BsTwitter className={ContactStyles.icon} /></a>
                            <a className={ContactStyles.socialLink} target="_blank" href="https://wa.me/message/KSLAK2HKVYBGK1" rel="noreferrer"><FaWhatsapp className={ContactStyles.icon} /></a>
                            <a className={ContactStyles.socialLink} target="_blank" href="https://medium.com/@moyeedjo" rel="noreferrer"><BsMedium className="icon-" /></a>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default ContactPage;