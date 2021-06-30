import React,{useState} from 'react'
import './LoginScreen.css'
import Signup from './Signup'

function LoginScreen() {


    const [signin, setsignin] = useState(false)
    return (
        <div className="loginScreen"> 
         
        <div className="loginscreen_background">
            <img  
            className="loginscreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""/>

            <button className="loginscreen_button"
            onClick={()=>setsignin(true)}
            >Sign in</button>

            <div className="loginscreen_gradiant"/>


            <div class="loginScreen__body">
                {signin?(<Signup/>):(
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div class="loginScreen__input">
                    <form>
                        <input className="input" type="email" placeholder="Email Address"/>
                            <button class="loginScreen__getStarted"  onClick={()=>setsignin(true)}>GET STARTED</button>
                    </form>
                </div>
                
                </>
                )
                }
                
            </div>

           
        </div>
            
        </div>
    )
}

export default LoginScreen
