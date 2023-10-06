import { FaEnvelope, FaKey } from 'react-icons/fa6';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="">
      <form method="post" id="frm_login">
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
            <button type="submit" className="bg-white py-1 px-4 rounded-md text-slate-800">
              <BiLogIn className="inline" /> Login
            </button>
        </div>
      </form>
      <div className="text-center">
          <Link to="/register">Don&apos;t have an account?</Link>
      </div>
    </div>
  )
}

export default Login