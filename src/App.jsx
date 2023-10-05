import './App.css'
import logo from './assets/images/logo.png';

function App() {

  return (
    <div>
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
                <a href="" className='py-2 px-4'>
                  Home
                </a>
              </li>
              <li className="inline-block">
                <a href="" className='py-2 px-4'>
                  About Us
                </a>
              </li>
              <li className="inline-block">
                <a href="" className='py-2 px-4'>
                  Our Services
                </a>
              </li>
              <li className="inline-block">
                <a href="" className='py-2 px-4 rounded-md bg-teal-500'>
                  Contact Us
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </header>
    </div>
  )
}

export default App
