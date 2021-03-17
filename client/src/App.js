import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import RegistrationForm from "./components/RegistrationForm";
// Import the useAuthTokenStore hook
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";

function App() {

    // Use the hook to reauthenticate stored tokens.
    useAuthTokenStore();

    const isAuthenticated = useIsAuthenticated();

    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <h2>A user authentication demo</h2>
                </div>
                <div>
                    {!isAuthenticated && <RegistrationForm />}
                    {!isAuthenticated && <LoginForm />}
                    {isAuthenticated && <LogoutButton />}
                </div>
            </div>
        </BrowserRouter>
    );
    
}

export default App;
