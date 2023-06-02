import React from "react";
import { onSnapshot } from "firebase/firestore";
import { signUpClicked } from "./firebase";
import { addDoc } from "firebase/firestore";
import Chatbot from "./Chatbot";


export default function HomeBody() {
    const[buttonCount, setButtonCount] = React.useState([])


    React.useEffect(() => {
            const unsubscribe = onSnapshot(signUpClicked, function(snapshot) {
            const count = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            console.log(count)
            setButtonCount(count.length)
        })
        return unsubscribe;
    },  [])

    async function addClick() {
        const newClick = {
            time: Date()
        }
        await addDoc(signUpClicked, newClick)
    }


    return (
        <div>
           
            <div className="homeBody">
                <div className="homeBody--left">
                    All your legal documents made easy with AI.
                    <button className="signUpButton" onClick={addClick}>Sign up for free!</button> 
                </div>

                <div className="homeBody--right">
                </div>
            </div>

            <div className="homeBody--lower">
                <div>Try our Chatbot for free now!</div>
                <Chatbot />
            </div>
            

        </div>
    )
}