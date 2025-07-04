import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";



const Contact = () => {

        const [username, setUsername] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [email, setEmail] = useState("");
        const [subject, setSubject] = useState("");
        const [message, setMessage] = useState("");
        const [errMsg, setErrMsg] = useState("");
        const [successMsg, setSuccessMsg] = useState("");

        // ========================= Email validation start heare ============== //
         const emailValidation = () => {
            return String(email)
                .toLocaleLowerCase()
                .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)

            
         };

         // ========================= Email validation end heare ============== //

         const haddleSend = (e) => {
            e.preventDefault();
            if (username === "") {
                setErrMsg("Username is required!");
            }else if (phoneNumber === "") {
                setErrMsg("Phone number is required!");
            }else if (email === "") {
                setErrMsg('Please give your Email!');
            }else if (!emailValidation(email)) {
                setErrMsg("Give a valid Email!");
            }else if (subject === "") {
                setErrMsg("Please give a Subject");
            }else if (message === "") {
                setErrMsg("Message is required!");
            }else {
                setSuccessMsg(`Thank you dear ${username}, Your message was sent successfully!`);
                setErrMsg("");
                setUsername("");
                setPhoneNumber("");
                setEmail("");
                setSubject("");
                setMessage("");
                console.log(username,phoneNumber,email,message,subject)
            }
        };
         

    return(
        <section id="contacts"
        className="w-full py-20 bordeer-b-[1px] border-b-black">
          <div className="flex justify-center items-center text-center">
                  <Title 
                  title="CONTACT"
                  des="Contact With Me" />
              </div>
              <div className="w-full">
                    <div className="w-full h-auto flex justify-between">

                        <ContactLeft />
                       
                        
                        <div className="w-[60%] h-full py-10  bg-gradient-to-r from-[#1e2024] to-[#23272b]
                        flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
                            <form className="w-full flex flex-col gap-6 py-2">
                                {
                                    errMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-designColor text-base
                                    tracking-wide animate-bounce">
                                        {errMsg}</p>
                                    )
                                }
                                {
                                    successMsg && (<p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-green-500 text-base
                                    tracking-wide animate-bounce">{successMsg}</p>
                                    )
                                }
                                <div className="w-full flex gap-10">
                                    <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        your name</p>
                                    <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    className={`contactInput ${errMsg === "Username is required!" ? "outline-designColor" : ""}`}

                                    type="text" />
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        phone number</p>
                                    <input
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    className={`contactInput ${errMsg === "Phone number is required!" ? "outline-designColor" : ""}`}

                                    type="text" />
                                    </div>

                                </div>
                                <div className="flex flex-col gap-4">
                                
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        e mail</p>
                                    <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`contactInput ${errMsg === "Please give your Email!" ? "outline-designColor" : ""}`}
                                    type="email" />
                                </div>
                                <div className="flex flex-col gap-4">
                                
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        subject</p>
                                    <input
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    className={`contactInput ${errMsg === "Please give a Subject" ? "outline-designColor" : ""}`}
 
                                    type="text" />
                                </div>
                                <div className="flex flex-col gap-4">
                                
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    message</p>
                               <textarea 
                               onChange={(e) => setMessage(e.target.value)}
                               value={message}
                               className={`contactInput ${errMsg === "Message is required!" ? "outline-designColor" : ""}`}
                                cols="30" 
                                rows="10"
                                style={{ width: 'auto', height: 'auto' }}></textarea>
                            </div>
                                <div className="w-full">
                                    <button onClick={haddleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base
                                     text-gray-400 tracking-wider uppercase hover:text-white duration-300
                                    hover:border-[1px] hover:border-designColor border-transparent">
                                    send message
                                    </button>
                               

                             
                                
                                    
                                </div>

                            </form>
                        </div>
                    </div>
                       
                </div>
        </section>
    )
}

export default Contact