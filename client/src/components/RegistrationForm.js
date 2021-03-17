import React, {useRef} from "react"
import API from "../utils/API";
import { useLogin } from "../utils/auth";

function RegistrationForm() {

    const emailRef = useRef();
    const passwordRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log("email", email);
        console.log("password", password);

        try {

            // Register the user.
            await API.register({ email, password });

            // User has been successfully registered, now log them in with the same information.
            await login({ email, password });

            // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch(err) {

            console.log("This is a most bogus error, dude!")
             // Handle error responses from the API. This will include
            if( err.response && err.response.data )
                { console.log(err.response.data);
            } else {
                console.log(err);
            }
                
            }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" ref={emailRef} placeholder="Your email" /><br />
            <input type="password" ref={passwordRef} placeholder="Your password" /><br />
            <button>Submit</button>
        </form>
    )

}

export default RegistrationForm;