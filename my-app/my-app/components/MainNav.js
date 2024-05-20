import { useState } from 'react';
import '../styles/MainNav.module.css'

export default function Navbar({ onLogin, onSignUp }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
            <button onClick={() => window.location.href='/'}
              className="logo-button text-blue-800 text-xl font-bold md:text-2xl" 
              style={{fontFamily: 'Pacifico'}}>DealDynamo
            </button>
            </div>
            <div className="flex md:hidden">
              <button 
                type="button" 
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" 
                aria-label="toggle menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={`md:flex items-center ${isOpen ? '' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <button onClick={() => window.location.href='/products'}
                className="my-1 text-sm text-gray-700 font-medium md:mx-4 md:my-0">Products
              </button>
              <button onClick={() => window.location.href='/about'}
                className="my-1 text-sm text-gray-700 font-medium md:mx-4 md:my-0">About
              </button>
              <button onClick={() => window.location.href='/contact'}
                className="my-1 text-sm text-gray-700 font-medium md:mx-4 md:my-0">Contact
              </button>
              <button onClick={onLogin} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Login
              </button>
              <button onClick={onSignUp} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow md:mx-4 md:my-0'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
