
import { Routes, Route } from "react-router-dom";
import "./auth.css"
import Login from "./login/login.js";
import Signup from "./signup/signup";
import Error from "../Error/error404";


const Auth = () => {
    return (
        <>
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        {/* <Route path="/login" element={<Login />} /> */}
                        {/* <Route path="/*" element={<Error />} /> */}
                    </Routes>
                </div>
            </div>
        </>
    )
}


export default Auth; 