import React,{useRef} from 'react'
import './Signup.css'
import {auth} from './firebase';
import {Link} from "react-router-dom";

function Signup() {

    const emailRef= useRef(null);
    const passRef = useRef(null);

    const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
    ).then((authUser)=>{
        console.log(authUser);

    }).catch((error)=>{
        alert(error)
    })
}

const signin=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
        ).then((authUser)=>{
            console.log(authUser);

}).catch((error)=>{
    alert(error)
})
}


    return (
        <div>
            <div class="signupScreen">
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} placeholder="Email" type="email"/>
                    <input   ref={passRef} placeholder="Password" type="password"/>
                    
                    <button type="submit" onClick={signin}>Sign In</button>
                    
                    <h4>
                        <span class="signupScreen__gray">New to Netflix? </span>
                        <Link to="/">
                        <span class="signupScreen__link" onClick={register}>Sign Up now.</span>
                        </Link>
                    </h4>
                </form>
            </div>
        </div>
    )
}

export default Signup
