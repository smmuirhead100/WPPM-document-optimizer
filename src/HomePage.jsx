import React from "react";
import HomeNavBar from "./HomeNavBar";
import HomeBody from "./HomeBody";
import background from "./assets/wood-background-alt.jpeg"
import "./homePage.css"




export default function HomePage() {
    return (
        <div className="homePage">
            <HomeNavBar />
            <HomeBody />
        </div>
    
    )
}