import { Link, useNavigate } from "react-router-dom"
import { FaEnvelope, FaKey, FaLock, FaUser } from 'react-icons/fa6';
import { BiLogOut } from "react-icons/bi";
import PrimaryButton from "../../components/PrimaryButton";
import axios from "axios";
import Alert from "../../components/Alert";
import { useState } from "react";

const Register = () => {
    const baseUrl =  'http://localhost/procity-portal';
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertType, setAlertType] = useState('info');


    const navigate = useNavigate();
    const registerUser = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        axios.post(`${baseUrl}/server/register_handler.php`, formData)
        .then((response) => {
            if(response.data.status == 'success'){
                setAlertMsg(response.data.message);
                setAlertType('success');
                setShowAlert(true)
                navigate("/login");
            }
        })
        .catch((error) => {
            setAlertMsg(error.response.data.message);
            setAlertType('error');
            setShowAlert(true)
            console.log("Error", error.response.data.message);
        });
    }

    return (
        <div>
            <Alert message={alertMsg} type={alertType} show={showAlert} onClose={() => setShowAlert(false)} />
            <form method="post" id="frm_register" onSubmit={registerUser}>
                <div className="mb-4">
                    <label htmlFor="uname">
                        <FaUser className="inline" /> Name
                    </label>
                    <input type="uname" name="uname" id="uname" placeholder="Enter your name" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email">
                        <FaEnvelope className="inline" /> Email Address
                    </label>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">
                    <FaLock className="inline" /> Password
                    </label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
                </div>
                <div className="mb-4">
                    <label htmlFor="c_password">
                        <FaKey className="inline" /> Confirm Password
                    </label>
                    <input type="password" name="confirm_password" id="c_password" placeholder="Re-enter your password" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <aside>
                        <input type="checkbox" required name="terms" id="terms" /> <label htmlFor="term">I agree with <a href="http://">Terms</a></label>
                    </aside>
                </div>
                <div className="mb-4">
                    <PrimaryButton type="submit" extraClasses="bg-red-500">
                        <BiLogOut className="inline" /> Login
                    </PrimaryButton>
                </div>
            </form>
            <div className="text-center">
                <Link to="/login" className="">Already have an account? Login.</Link>
            </div>
        </div>
    )
}

export default Register