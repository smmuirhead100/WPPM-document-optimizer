import React from "react";
import { onSnapshot } from "firebase/firestore";
import { signUpClicked } from "./firebase";
import { addDoc } from "firebase/firestore";

export default function HomeBody() {
    const[buttonCount, setButtonCount] = React.useState([])


    React.useEffect(() => {
            const unsubscribe = onSnapshot(signUpClicked, function(snapshot) {
            const count = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
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
        <div className="homeBody">
           
            <div className="homeBody--left">
                All your legal documents made easy with AI.
            </div>

            <div className="homeBody--right">
                <button className="signUpButton" onClick={addClick}>Start for free!</button>
            </div>

        </div>
    )
}