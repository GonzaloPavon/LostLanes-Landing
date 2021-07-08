import React, { Component } from 'react';

/*-window.onload = start;

function start() {
    document.getElementById("btn_sign").onclick = mostrarRegister;
    document.getElementById("register").style.visibility = "hidden";
    document.getElementById("btn_back_login").onclick = mostrarLogin;
}

function mostrarRegister() {
    document.getElementById("register").style.visibility = "visible";
    document.getElementById("login").style.visibility = "hidden";
}

function mostrarLogin() {
    document.getElementById("register").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
}
*/
class Login extends Component {

    render() {

        return (
            <div className="containerLogin">

                <div className="login" id="login">
                    <form className="form_login">
                        <input type="text" placeholder="Username" class="form_input" required />
                        <button id="btn_sign">Sign up</button>
                        <input type="password" placeholder="Password" class="form_input" required /><br />
                        <input type="submit" value="Login" class="form_input_submit" />
                    </form>
                </div>

                <div className="register" id="register">
                    <form className="form_register">
                        <input type="text" placeholder="Set Username" class="form_input" required />
                        <button id="btn_back_login">Back to Login</button>
                        <input type="email" placeholder="Set Email address" class="form_input" required />
                        <input type="password" placeholder="Set Password" class="form_input" required />
                        <input type="submit" value="Register" class="form_input_submit" />
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;
