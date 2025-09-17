import React, { useState } from 'react'

const StudentDashboard = () => {
  // Dummy student data
  const studentInfo = {
    name: "Arjun Sharma",
    rollNo: "CS21B001",
    class: "Class 12 - Science",
    profileImage: "https://www.nuflowerfoods.com/wp-content/uploads/2024/09/person-dummy.jpg"
  }

  // Dummy attendance data
  const attendanceData = {
    totalClasses: 180,
    attendedClasses: 162,
    percentage: 90,
    thisMonth: {
      totalClasses: 22,
      attendedClasses: 20,
      percentage: 91
    }
  }

  // Dummy subject-wise performance data
  const subjectsData = [
    { name: 'Mathematics', marks: 85, totalMarks: 100, percentage: 85, color: 'green' },
    { name: 'Physics', marks: 78, totalMarks: 100, percentage: 78, color: 'green' },
    { name: 'Chemistry', marks: 72, totalMarks: 100, percentage: 72, color: 'yellow' },
    { name: 'Biology', marks: 88, totalMarks: 100, percentage: 88, color: 'green' },
    { name: 'English', marks: 65, totalMarks: 100, percentage: 65, color: 'yellow' },
    { name: 'Computer Science', marks: 92, totalMarks: 100, percentage: 92, color: 'green' },
    { name: 'Hindi', marks: 58, totalMarks: 100, percentage: 58, color: 'red' },
    { name: 'Physical Education', marks: 95, totalMarks: 100, percentage: 95, color: 'green' }
  ]

  // Calculate overall academic percentage
  const overallPercentage = Math.round(
    subjectsData.reduce((sum, subject) => sum + subject.percentage, 0) / subjectsData.length
  )

  // Get color based on percentage
  const getPerformanceColor = (percentage) => {
    if (percentage < 60) return { color: 'red', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' }
    if (percentage < 75) return { color: 'yellow', bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' }
    return { color: 'green', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' }
  }

  // Monthly attendance data for chart
  const monthlyAttendance = [
    { month: 'Jan', percentage: 88 },
    { month: 'Feb', percentage: 92 },
    { month: 'Mar', percentage: 85 },
    { month: 'Apr', percentage: 90 },
    { month: 'May', percentage: 87 },
    { month: 'Jun', percentage: 94 },
    { month: 'Jul', percentage: 91 },
    { month: 'Aug', percentage: 89 },
    { month: 'Sep', percentage: 90 }
  ]

  // Subject performance trend data
  const subjectTrend = [
    { subject: 'Math', q1: 78, q2: 82, q3: 85 },
    { subject: 'Physics', q1: 75, q2: 76, q3: 78 },
    { subject: 'Chemistry', q1: 70, q2: 71, q3: 72 },
    { subject: 'Biology', q1: 85, q2: 87, q3: 88 },
    { subject: 'English', q1: 62, q2: 63, q3: 65 },
    { subject: 'CS', q1: 88, q2: 90, q3: 92 }
  ]

  const [activeChart, setActiveChart] = useState('attendance')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-6 border-t-4 border-purple-500">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <img 
                src={studentInfo.profileImage}
                alt="Student"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-purple-200 shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Welcome back, {studentInfo.name}! 🎓
              </h1>
              <p className="text-lg text-gray-600 mb-1">{studentInfo.rollNo} • {studentInfo.class}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Active Student
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Academic Year 2024-25
                </span>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">{attendanceData.percentage}%</div>
                <div className="text-xs sm:text-sm text-gray-600">Attendance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600">{overallPercentage}%</div>
                <div className="text-xs sm:text-sm text-gray-600">Overall</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Attendance & Performance Overview */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Attendance Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  📊 Attendance Overview
                </h2>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">{attendanceData.percentage}%</div>
                  <div className="text-sm text-gray-500">Overall</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-700 font-medium">Total Classes</p>
                      <p className="text-2xl font-bold text-purple-800">{attendanceData.totalClasses}</p>
                    </div>
                    <div className="bg-purple-200 p-3 rounded-full">
                      <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-700 font-medium">Classes Attended</p>
                      <p className="text-2xl font-bold text-green-800">{attendanceData.attendedClasses}</p>
                    </div>
                    <div className="bg-green-200 p-3 rounded-full">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attendance Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Attendance Progress</span>
                  <span>{attendanceData.attendedClasses} / {attendanceData.totalClasses}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${attendanceData.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* This Month Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">📅 This Month</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    {attendanceData.thisMonth.attendedClasses} / {attendanceData.thisMonth.totalClasses} classes
                  </span>
                  <span className="font-bold text-lg text-indigo-600">
                    {attendanceData.thisMonth.percentage}%
                  </span>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-indigo-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4 sm:mb-0">
                  📈 Performance Analytics
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveChart('attendance')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeChart === 'attendance' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Attendance Trend
                  </button>
                  <button
                    onClick={() => setActiveChart('subjects')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeChart === 'subjects' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Subject Progress
                  </button>
                </div>
              </div>

              {/* Chart Display */}
              {activeChart === 'attendance' ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Monthly Attendance Trend</h3>
                  <div className="space-y-3">
                    {monthlyAttendance.map((month, index) => (
                      <div key={month.month} className="flex items-center gap-4">
                        <div className="w-12 text-sm font-medium text-gray-600">{month.month}</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                          <div 
                            className={`h-6 rounded-full transition-all duration-500 delay-${index * 100} ${
                              month.percentage >= 90 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                              month.percentage >= 80 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                              'bg-gradient-to-r from-red-400 to-red-600'
                            }`}
                            style={{ width: `${month.percentage}%` }}
                          >
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                            {month.percentage}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Subject Performance Progress</h3>
                  <div className="space-y-3">
                    {subjectTrend.map((subject, index) => (
                      <div key={subject.subject} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-800">{subject.subject}</span>
                          <div className="flex gap-2 text-xs">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Q1: {subject.q1}%</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">Q2: {subject.q2}%</span>
                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded">Q3: {subject.q3}%</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[subject.q1, subject.q2, subject.q3].map((score, i) => (
                            <div key={i} className="flex-1">
                              <div className="bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full transition-all duration-500 delay-${(index * 3 + i) * 100} ${
                                    score >= 75 ? 'bg-green-500' :
                                    score >= 60 ? 'bg-yellow-500' :
                                    'bg-red-500'
                                  }`}
                                  style={{ width: `${score}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Subject Performance */}
          <div className="space-y-6">
            {/* Overall Performance Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🎯 Academic Performance
              </h2>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">{overallPercentage}%</div>
                <div className="text-sm text-gray-600">Overall Average</div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                  overallPercentage >= 75 ? 'bg-green-100 text-green-700' :
                  overallPercentage >= 60 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {overallPercentage >= 75 ? '🏆 Excellent' :
                   overallPercentage >= 60 ? '👍 Good' : '⚠️ Needs Improvement'}
                </div>
              </div>

              {/* Performance Ring */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                    <circle 
                      cx="50" cy="50" r="40" fill="none" 
                      stroke={overallPercentage >= 75 ? '#10b981' : overallPercentage >= 60 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${overallPercentage * 2.51}, 251.2`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-800">{overallPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject-wise Performance */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                📚 Subject Performance
              </h2>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {subjectsData.map((subject, index) => {
                  const colorScheme = getPerformanceColor(subject.percentage)
                  return (
                    <div 
                      key={subject.name} 
                      className={`p-4 rounded-xl border-2 ${colorScheme.bg} ${colorScheme.border} transition-all duration-300 hover:shadow-md`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800 text-sm">{subject.name}</span>
                        <span className={`font-bold ${colorScheme.text}`}>{subject.percentage}%</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                        <span>{subject.marks} / {subject.totalMarks}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 delay-${index * 100} ${
                              subject.percentage >= 75 ? 'bg-green-500' :
                              subject.percentage >= 60 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${subject.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {subject.percentage >= 75 ? (
                          <span className="text-xs text-green-600 flex items-center gap-1">
                            ✅ Excellent Performance
                          </span>
                        ) : subject.percentage >= 60 ? (
                          <span className="text-xs text-yellow-600 flex items-center gap-1">
                            ⚠️ Room for Improvement
                          </span>
                        ) : (
                          <span className="text-xs text-red-600 flex items-center gap-1">
                            🚨 Needs Attention
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
