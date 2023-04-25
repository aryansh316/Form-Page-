import React from "react";
import {useNavigate} from 'react-router-dom'

function Contact(){
    const navigate=useNavigate()
    return(
        <h1 onClick={()=>navigate(-1)}>SuccessFully logged In!</h1>
    )
}

export default Contact;