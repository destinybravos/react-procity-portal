import { FaEnvelope, FaKey } from 'react-icons/fa6';
import { BiLogIn } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import axios from 'axios';
import { useState } from 'react';
import Alert from '../../components/Alert';

const Login = () => {
  const baseUrl =  'http://localhost/procity-portal';
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertType, setAlertType] = useState('info');


    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        axios.post(`${baseUrl}/server/login_handler.php`, formData)
        .then((response) => {
            if(response.data.status == 'success'){
                sessionStorage.setItem('active_user', JSON.stringify(response.data.user));
                sessionStorage.setItem('token', response.data.access_token); 
                navigate("/dashboard");
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
    <div className="">
      <Alert message={alertMsg} type={alertType} show={showAlert} onClose={() => setShowAlert(false)} />
      <form method="post" id="frm_login" onSubmit={loginUser}>
        <div className="mb-4">
            <label htmlFor="email">
                <FaEnvelope className="inline" /> Email Address
            </label>
            <input type="email" required name="email" id="email" placeholder="Email Address" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
        </div>
        <div className="mb-4">
            <label htmlFor="password">
              <FaKey className="inline" /> Password
            </label>
            <input type="password" required name="password" id="password" placeholder="Enter your password" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
        </div>
        <div className="mb-4 flex items-center justify-between">
            <aside>
                <input type="checkbox" name="remember" id="remember" /> Remember me
            </aside>
            <aside>
                <a href="#">Forgot Password</a>
            </aside>
        </div>
        <div className="mb-4">
            <PrimaryButton>
              <BiLogIn className="inline" /> Login
            </PrimaryButton>
        </div>
      </form>
      <div className="text-center">
          <Link to="/register">Don&apos;t have an account?</Link>
      </div>
    </div>
  )
}

export default Login