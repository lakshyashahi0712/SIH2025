import { useNavigate } from "react-router-dom"

const Choice = () => {
  const navigate = useNavigate();

  const handleTeacher = () => {
    return navigate("/teacher/login")
  }
  const handleStudent = () => {
    return navigate("/student/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            Welcome to EduWatch
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4">
            Choose how you'd like to join our learning community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Student Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 sm:hover:-translate-y-2 mx-2 sm:mx-0">
            <div className="h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEwOumt-TEv2ycjQOfLt0DvNKl3ZjAhNnyBuDIFuilCzth_KF5peMUUrSKnCeie-uhwk&usqp=CAU" 
                alt="Student"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Join as Student</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                Access courses, track your progress, and learn from the best educators
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8">
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Access to all courses
                </li>
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Progress tracking
                </li>
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Interactive learning
                </li>
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Certificate completion
                </li>
              </ul>
              <button onClick={handleStudent} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base md:text-lg touch-manipulation">
                Get Started as Student
              </button>
            </div>
          </div>

          {/* Teacher Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 sm:hover:-translate-y-2 mx-2 sm:mx-0">
            <div className="h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
              <img 
                src="https://wallpapers.com/images/thumbnail/classroom-lecture-icon-7e3tp9u3qhjfqw6b.webp" 
                alt="Teacher"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Join as Teacher</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                Share your knowledge, create courses, and inspire the next generation
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8">
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Create unlimited courses
                </li>
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Student management
                </li>
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Analytics dashboard
                </li>
                <li className="flex items-center text-gray-700 text-xs sm:text-sm md:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Monetize your content
                </li>
              </ul>
              <button 
                onClick={handleTeacher} 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 text-sm sm:text-base md:text-lg touch-manipulation"
              >
                Get Started as Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice