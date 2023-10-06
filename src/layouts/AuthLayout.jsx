import { Link, Outlet } from 'react-router-dom';
import logo from './../assets/images/logo.png';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
        <section className="w-full max-w-md px-4">
            <Link to={`/`}>
                <img src={logo} className="h-14 mb-4 mx-auto" />
            </Link>
        
            <main className="min-h-[50px] px-4 py-4 bg-slate-200">
                <Outlet />
            </main>
        </section>
    </div>
  )
}

export default AuthLayout