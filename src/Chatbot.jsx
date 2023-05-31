import React from "react"
import "./chatbot.css"
import x from "./assets/pngwing.com.png"

export default function Chatbot() {
    const [open, setOpen] = React.useState(true)
    
    function toggleChange() {
        setOpen(prevState => !prevState)
    }
    
    return (
        <div>
        {open ? 
            <div id="d" className="wrapper">
                <img src={x} onClick={toggleChange} />
                <div className="discussion">
                    {open ? <div>hey</div> : <div>no</div>}
                </div>
                
                <input className="entry"></input>
            </div>
        : 
            <div className="openChatWrapper" onClick={toggleChange}>
                <div className="openChat">Open Chat</div>
            </div>
        }
        </div>
    )
}