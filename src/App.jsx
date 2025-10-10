import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Waitlist from './pages/Waitlist'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Waitlist />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
