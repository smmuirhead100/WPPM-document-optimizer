import React from "react";
import logo from "./assets/logo.png"

let FADE_INTERVAL_MS = 3000
let WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2

export default function HomeNavBar() {
    
    const [documentList, setDocumentList] = React.useState(["Lease Agreements", "Rental Applications", "Inspection Reports", "Eviction Notices"]);
    const [currIndex, setCurrIndex] = React.useState(0)
    const [fadeProp, setFadeProp] = React.useState({fade: 'fade-in'})
    const [fadeDuration, setFadeDuration] = React.useState(0)
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({ fade: 'fade-out' }); 
                setFadeDuration(400);
            } else {
                setFadeProp({ fade: 'fade-in' })
                setFadeDuration(7000)
                setCurrIndex((prev) => (prev + 1) % documentList.length)
            }
          }, fadeDuration);
          return () => clearInterval(interval);
    }, [fadeProp]);

    
    return (
        <div>
            <navbar>
                <div className='navbar--left'>
                    <img src={logo} width="50px"/>
                    <div>LegalDoc</div>
                </div>

                <div className="navbar--center">
                    <span className={fadeProp.fade}>{documentList[currIndex]}</span>
                </div>

                <div className='navbar--right'>
                    <li>About</li>
                    <li>Log In</li>
                </div>
            </navbar>
            <div className='divider' />
        </div>
    )
}