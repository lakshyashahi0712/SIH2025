import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import LoginTeacher from "./components/LoginTeacher"
import Choice from "./components/Choice"
import TeacherDashboard from "./components/TeacherDashboard"
import StudentDashboard from "./components/StudentDashboard"

function App() {

  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/teacher/login" element={<LoginTeacher/>} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/student/dashboard" element={<StudentDashboard/>} />
      <Route path="/" element={<Choice />} />
      </Route>
    </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
