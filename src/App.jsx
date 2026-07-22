import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import StudentLife from './pages/StudentLife.jsx'
import Contact from './pages/Contact.jsx'
import JoinOurTeam from './pages/JoinOurTeam.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/student-life" element={<StudentLife />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join-our-team" element={<JoinOurTeam />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
