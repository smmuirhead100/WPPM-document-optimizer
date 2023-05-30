import React from "react";
import "./HomePage.css"

export default function HomeBody() {
    return (
        <div className="homeBody">
           
            <div className="homeBody--left">
                All your legal documents made easy with AI.
            </div>

            <div className="homeBody--right">
                <button className="signUpButton">Try for free!</button>
            </div>

        </div>
    )
}