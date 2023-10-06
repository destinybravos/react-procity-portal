import { Link } from "react-router-dom"
import { FaEnvelope, FaKey, FaLock, FaUser } from 'react-icons/fa6';
import { BiLogOut } from "react-icons/bi";

const Register = () => {
  return (
    <div>
        <form method="post" id="frm_register">
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
                <input type="password" name="c_password" id="c_password" placeholder="Re-enter your password" className="block w-full rounded-md h-8 mt-1 px-3 text-slate-700" />
            </div>
            <div className="mb-4 flex items-center justify-between">
                <aside>
                    <input type="checkbox" required name="term" id="term" /> <label htmlFor="term">I agree with <a href="http://">Terms</a></label>
                </aside>
            </div>
            <div className="mb-4">
                <button type="submit" className="bg-white py-1 px-4 rounded-md text-slate-800">
                    <BiLogOut className="inline" /> Login
                </button>
            </div>
        </form>
        <div className="text-center">
            <Link to="/login" className="">Already have an account? Login.</Link>
        </div>
    </div>
  )
}

export default Register