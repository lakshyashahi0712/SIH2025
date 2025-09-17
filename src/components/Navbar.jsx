import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo and App Name */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/icon.jpeg" 
              alt="EduWatch Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover"
            />
            <span className="text-lg sm:text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
              EduWatch
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#updates" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Updates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 sm:px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              <a 
                href="#home" 
                className="block px-3 py-3 sm:py-2 text-base sm:text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-3 py-3 sm:py-2 text-base sm:text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-3 sm:py-2 text-base sm:text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#updates" 
                className="block px-3 py-3 sm:py-2 text-base sm:text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Updates
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
