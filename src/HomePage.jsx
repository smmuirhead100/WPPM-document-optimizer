import React from "react";
import HomeNavBar from "./HomeNavBar";
import HomeBody from "./HomeBody";
import { onSnapshot } from "firebase/firestore";
import "./homePage.css"




export default function HomePage() {


    return (
        <div className="homePage">
            <HomeNavBar />
            <HomeBody />
        </div>
    
    )
}