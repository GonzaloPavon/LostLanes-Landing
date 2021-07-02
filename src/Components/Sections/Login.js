import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container">

                <div className="login">

                    <form className="form_login">
                        <input type="text" placeholder="Username" class="form_input" required />
                        <button id="btn_sign">Sign up</button>
                        <input type="password" placeholder="Password" class="form_input" required /><br />
                        <input type="submit" value="Login" class="form_input_submit" />
                    </form>
                </div>

                <div className="register">

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