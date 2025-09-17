import React, { useState } from 'react'

const LoginTeacher = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    universityCode: '',
    idFile: null,
    otp: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [uploadedFileName, setUploadedFileName] = useState('')

  // Function to reset the form to its initial state
  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      name: '',
      universityCode: '',
      idFile: null,
      otp: ''
    })
    setUploadedFileName('')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        idFile: file
      }))
      setUploadedFileName(file.name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Teacher login attempt:', formData)
    // Add login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {isLoginForm ? "Teacher Login" : "Apply as Teacher"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            {isLoginForm 
              ? "Welcome back! Please sign in to your teaching account" 
              : "Join our teaching community and share your knowledge"
            }
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122l4.243 4.243M15.121 9.878A3 3 0 1012 12m3.121-2.122L12 12m3.121-2.122L21 3m-8.879 6.878L12 12" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Signup-only fields */}
            {!isLoginForm && (
              <>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* University Code Field */}
                <div>
                  <label htmlFor="universityCode" className="block text-sm font-medium text-gray-700 mb-2">
                    University Code
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="universityCode"
                      name="universityCode"
                      value={formData.universityCode}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                      placeholder="Enter your university code"
                      required
                    />
                  </div>
                </div>

                {/* Upload ID Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload ID Document
                  </label>
                  <div>
                    <input
                      type="file"
                      id="idFile"
                      name="idFile"
                      onChange={handleFileUpload}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      required
                    />
                    <label htmlFor="idFile" className="cursor-pointer">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-green-500 transition-colors">
                        <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm text-gray-600">
                          {uploadedFileName || "Drag & drop or click to upload"}
                        </p>
                        <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* OTP Field */}
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                    OTP Verification
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      maxLength="6"
                      className="block w-full pl-10 pr-20 sm:pr-24 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-base"
                      placeholder="Enter 6-digit OTP"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-xs sm:text-sm font-medium text-green-600 hover:text-green-500 transition-colors"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Remember Me & Forgot Password - Only for Login */}
            

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 text-sm sm:text-base"
            >
              {isLoginForm ? "Sign In as Teacher" : "Submit Application"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            

            {/* Social Login Buttons */}
            
          </div>

          {/* Toggle between Login/Signup */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-green-800 mb-2">
              {isLoginForm ? "New to EduWatch?" : "Already have an account?"}
            </h3>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => {
                  setIsLoginForm(!isLoginForm)
                  resetForm() // Reset form state when toggling between login/signup
                }}
                className="block text-green-600 hover:text-green-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-300 rounded p-1"
              >
                {isLoginForm ? "• Apply to become a teacher" : "• Back to login"}
              </button>
            </div>
          </div>

          {/* Back to Choice */}
          <div className="mt-4 sm:mt-6 text-center px-4">
            <p className="text-sm text-gray-600">
              Want to join as a student instead?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Student Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginTeacher
