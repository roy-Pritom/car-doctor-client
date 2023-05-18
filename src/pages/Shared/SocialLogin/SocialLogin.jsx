import { useContext } from "react";
import { authContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    const {googleLogin}=useContext(authContext)
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            navigate(from,{replace:true})

        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                   G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;