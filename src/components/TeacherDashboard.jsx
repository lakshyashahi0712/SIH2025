import React, { useState } from 'react'

const TeacherDashboard = () => {
  // Class and Subject data with different students for each class
  const classSubjectData = {
    'Class 9 - Mathematics': {
      students: [
        'Aarav Sharma', 'Vivaan Gupta', 'Aditya Singh', 'Vihaan Patel', 'Arjun Kumar',
        'Ananya Verma', 'Diya Agarwal', 'Priya Joshi', 'Kavya Mehta', 'Anika Shah',
        'Sai Reddy', 'Reyansh Nair', 'Ayaan Iyer', 'Krishna Rao', 'Ishaan Pillai',
        'Shreya Menon', 'Isha Varma', 'Meera Bhat', 'Riya Kulkarni', 'Sanya Desai',
        'Rohan Pandey', 'Dev Mishra', 'Karan Tiwari', 'Harsh Dubey', 'Yash Srivastava',
        'Naman Chandra', 'Shiv Prasad', 'Advik Jain', 'Arnav Bansal', 'Dhruv Mittal'
      ]
    },
    'Class 10 - Physics': {
      students: [
        'Arjun Gupta', 'Kiran Singh', 'Manish Patel', 'Neha Kumar', 'Pooja Sharma',
        'Rahul Verma', 'Sakshi Agarwal', 'Tanvi Joshi', 'Uday Mehta', 'Varun Shah',
        'Anjali Reddy', 'Bhavya Nair', 'Chitra Iyer', 'Deepak Rao', 'Ekta Pillai',
        'Falgun Menon', 'Gauri Varma', 'Harsh Bhat', 'Ila Kulkarni', 'Jatin Desai',
        'Kaveri Pandey', 'Lalit Mishra', 'Megha Tiwari', 'Nikhil Dubey', 'Ojas Srivastava',
        'Prerna Chandra', 'Qasim Prasad', 'Ravi Jain', 'Sneha Bansal', 'Tushar Mittal'
      ]
    },
    'Class 11 - Chemistry': {
      students: [
        'Advait Sharma', 'Bhumi Gupta', 'Chirag Singh', 'Divya Patel', 'Eshan Kumar',
        'Garima Verma', 'Hitesh Agarwal', 'Ishika Joshi', 'Jaidev Mehta', 'Kiara Shah',
        'Laksh Reddy', 'Manya Nair', 'Niharika Iyer', 'Om Rao', 'Palak Pillai',
        'Rishab Menon', 'Saanvi Varma', 'Tanish Bhat', 'Urvi Kulkarni', 'Vedant Desai',
        'Yashvi Pandey', 'Zara Mishra', 'Aarush Tiwari', 'Bhoomi Dubey', 'Daksh Srivastava',
        'Evaan Chandra', 'Faizan Prasad', 'Gagan Jain', 'Hiya Bansal', 'Ivan Mittal'
      ]
    },
    'Class 12 - Biology': {
      students: [
        'Abhimanyu Sharma', 'Bhavika Gupta', 'Chetan Singh', 'Drishti Patel', 'Eshaan Kumar',
        'Gunjan Verma', 'Hemant Agarwal', 'Ira Joshi', 'Jashan Mehta', 'Khushi Shah',
        'Lavanya Reddy', 'Mohit Nair', 'Nidhi Iyer', 'Osman Rao', 'Pari Pillai',
        'Rudra Menon', 'Shanaya Varma', 'Tara Bhat', 'Umang Kulkarni', 'Veer Desai',
        'Yug Pandey', 'Zain Mishra', 'Aashna Tiwari', 'Brijesh Dubey', 'Charvi Srivastava',
        'Eesha Chandra', 'Farhan Prasad', 'Gitika Jain', 'Hardik Bansal', 'Ira Mittal'
      ]
    },
    'Class 8 - English': {
      students: [
        'Aarya Sharma', 'Bhuvan Gupta', 'Chaitanya Singh', 'Devansh Patel', 'Elina Kumar',
        'Gaurav Verma', 'Heer Agarwal', 'Ishan Joshi', 'Jiya Mehta', 'Kush Shah',
        'Lara Reddy', 'Mayank Nair', 'Naina Iyer', 'Ojas Rao', 'Prachi Pillai',
        'Riaan Menon', 'Siya Varma', 'Tejas Bhat', 'Udita Kulkarni', 'Viraj Desai',
        'Yatin Pandey', 'Zoya Mishra', 'Aahan Tiwari', 'Bhumi Dubey', 'Chirag Srivastava',
        'Diya Chandra', 'Ekansh Prasad', 'Gargi Jain', 'Hrithik Bansal', 'Isha Mittal'
      ]
    }
  }

  // Generate students for selected class
  const generateStudentsForClass = (className) => {
    const classData = classSubjectData[className]
    if (!classData) return []
    
    return classData.students.map((name, index) => ({
      id: index + 1,
      rollNo: `${className.split(' ')[1]}${String(index + 1).padStart(3, '0')}`,
      name: name,
      attendance: 'present',
      marks: ''
    }))
  }

  const [selectedClassSubject, setSelectedClassSubject] = useState('Class 9 - Mathematics')
  const [students, setStudents] = useState(() => generateStudentsForClass('Class 9 - Mathematics'))
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [isMarksMode, setIsMarksMode] = useState(false)


  // Generate date options for the last 30 days
  const generateDateOptions = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
      })
    }
    
    return dates
  }

  const dateOptions = generateDateOptions()

  const handleClassSubjectChange = (newClassSubject) => {
    setSelectedClassSubject(newClassSubject)
    setStudents(generateStudentsForClass(newClassSubject))
  }

  const handleAttendanceChange = (studentId, status) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, attendance: status }
          : student
      )
    )
  }

  const handleMarksChange = (studentId, marks) => {
    // Ensure marks are between 0 and 100
    const numericMarks = Math.max(0, Math.min(100, parseInt(marks) || 0))
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, marks: numericMarks.toString() }
          : student
      )
    )
  }

  const handleSaveAttendance = () => {
    if (isMarksMode) {
      console.log('Saving marks for date:', selectedDate)
      console.log('Marks data:', students)
      alert('Marks saved successfully!')
    } else {
      console.log('Saving attendance for date:', selectedDate)
      console.log('Attendance data:', students)
      alert('Attendance saved successfully!')
    }
  }

  const presentCount = students.filter(s => s.attendance === 'present').length
  const absentCount = students.filter(s => s.attendance === 'absent').length
  
  // Marks statistics
  const studentsWithMarks = students.filter(s => s.marks && s.marks !== '')
  const totalMarks = studentsWithMarks.reduce((sum, s) => sum + parseInt(s.marks || 0), 0)
  const averageMarks = studentsWithMarks.length > 0 ? (totalMarks / studentsWithMarks.length) : 0
  const highestMarks = studentsWithMarks.length > 0 ? Math.max(...studentsWithMarks.map(s => parseInt(s.marks))) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Teacher Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-600">{isMarksMode ? 'Manage student marks' : 'Manage student attendance efficiently'}</p>
              
              {/* Mode Toggle */}
              <div className="flex items-center mt-3">
                <span className="text-sm font-medium text-gray-700 mr-3">Attendance</span>
                <button
                  onClick={() => setIsMarksMode(!isMarksMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isMarksMode ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isMarksMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-sm font-medium text-gray-700 ml-3">Marks</span>
              </div>
            </div>
            
            {/* Class & Subject Selection and Date Selection */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <div className="flex-1 sm:flex-initial">
                <label htmlFor="class-subject-select" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Select Class & Subject
                </label>
                <select
                  id="class-subject-select"
                  value={selectedClassSubject}
                  onChange={(e) => handleClassSubjectChange(e.target.value)}
                  className="w-full sm:min-w-[180px] px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  {Object.keys(classSubjectData).map(classSubject => (
                    <option key={classSubject} value={classSubject}>
                      {classSubject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 sm:flex-initial">
                <label htmlFor="date-select" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Select Date
                </label>
                <select
                  id="date-select"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full sm:min-w-[140px] px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  {dateOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleSaveAttendance}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium mt-6 sm:mt-0"
              >
                {isMarksMode ? 'Save Marks' : 'Save Attendance'}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-600 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-800">Total Students</p>
                  <p className="text-2xl font-bold text-blue-600">{students.length}</p>
                </div>
              </div>
            </div>

            {!isMarksMode ? (
              <>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-600 rounded-lg mr-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800">Present</p>
                      <p className="text-2xl font-bold text-green-600">{presentCount}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-red-600 rounded-lg mr-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-800">Absent</p>
                      <p className="text-2xl font-bold text-red-600">{absentCount}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-600 rounded-lg mr-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-800">Average Marks</p>
                      <p className="text-2xl font-bold text-purple-600">{averageMarks ? averageMarks.toFixed(1) : '0.0'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-600 rounded-lg mr-3">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Highest Marks</p>
                      <p className="text-2xl font-bold text-yellow-600">{highestMarks}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Attendance/Marks Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">
              {isMarksMode ? 'Student Marks' : 'Student Attendance'} - {selectedClassSubject}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {isMarksMode 
                ? `Marks entry for ${selectedClassSubject} | Total Students: ${students.length}`
                : `Attendance for ${new Date(selectedDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })} | Total Students: ${students.length}`
              }
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Roll No.
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {isMarksMode ? 'Marks' : 'Attendance'}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={student.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      <span className="block sm:hidden text-xs">{student.rollNo.slice(-3)}</span>
                      <span className="hidden sm:block">{student.rollNo}</span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <span className="text-white text-xs sm:text-sm font-medium">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{student.name}</div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center">
                      {isMarksMode ? (
                        <div className="flex justify-center">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={student.marks || ''}
                            onChange={(e) => handleMarksChange(student.id, e.target.value)}
                            placeholder="0-100"
                            className="w-16 sm:w-20 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      ) : (
                        <div className="flex justify-center space-x-1 sm:space-x-2">
                          <button
                            onClick={() => handleAttendanceChange(student.id, 'present')}
                            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors touch-manipulation ${
                              student.attendance === 'present'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                            }`}
                          >
                            <span className="sm:hidden">P</span>
                            <span className="hidden sm:inline">Present</span>
                          </button>
                          <button
                            onClick={() => handleAttendanceChange(student.id, 'absent')}
                            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors touch-manipulation ${
                              student.attendance === 'absent'
                                ? 'bg-red-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-red-100'
                            }`}
                          >
                            <span className="sm:hidden">A</span>
                            <span className="hidden sm:inline">Absent</span>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
