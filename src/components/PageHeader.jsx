import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png';
import { BiLogIn } from 'react-icons/bi';


const PageHeader = () => {
    return (
        <header className="bg-primary min-h-[30px] text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo Side */}
            <aside className='py-2'>
                <img src={logo} alt="logo" className='h-10' />
            </aside>

            {/* Navigation */}
            <aside>
                <ul>
                <li className="inline-block">
                    <Link to="/" className='py-2 px-4'>
                        Home
                    </Link>
                </li>
                <li className="inline-block">
                    <Link to="/about-us" className='py-2 px-4'>
                        About Us
                    </Link>
                </li>
                <li className="inline-block">
                    <Link to="/our-services" className='py-2 px-4'>
                        Our Services
                    </Link>
                </li>
                <li className="inline-block">
                    <Link to="/reach-us" className='py-2 px-4'>
                        Contact Us
                    </Link>
                </li>
                <li className="inline-block">
                    <Link to="login" className='py-2 px-4 rounded-md bg-teal-500 block'>
                        <BiLogIn className='inline h-5 w-5' /> Login
                    </Link>
                </li>
                </ul>
            </aside>
            </div>
        </header>
    )
}

export default PageHeader