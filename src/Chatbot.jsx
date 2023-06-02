import React from "react"
import "./chatbot.css"
import x from "./assets/pngwing.com.png"
import sendPrompt from "./openAI"

export default function Chatbot() {
    const [open, setOpen] = React.useState(true)
    const [prompt, setPrompt] = React.useState("")
    
    function toggleChange() {
        setOpen(prevState => !prevState)
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendPrompt(prompt)
    }

    function handleChange(event){
        setPrompt(event.target.value)
    }
    
    
    return (
        <div>
        {open ? 
            <div id="d" className="wrapper">
                
                <img src={x} onClick={toggleChange} />
                
                <div className="discussion">
                </div>
                
                <form value={prompt} onSubmit={handleSubmit} >
                    <input className="entry" onChange={handleChange}></input>
                    <button className="submit" type="submit" />
                </form>

            </div>
        : 
            <div className="openChatWrapper" onClick={toggleChange}>
                <div className="openChat">Open Chat</div>
            </div>
        }
        </div>
    )
}