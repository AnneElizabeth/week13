import './App.css';

function Login() {
    return(
        <>
        <div className="formContainer">
            <form className='loginForm'>
                <h3>LOG IN</h3>
                <label for='email'>Your Email:  </label>
                <input type='email' placeholder='Enter your email here' id='email' name='email' /><br/><br />

                <label for='password'>Your Password:  </label>
                <input type='password' placeholder='********' id='password' name='password' /><br /><br />

                <button>Log In</button> 
            </form>
        </div>
        </>
    )
}
export default Login;