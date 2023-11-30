import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Auth} from "./pages/auth/Auth.tsx";

function App() {
  return (
      <Router>
        <Navbar/>

        <Routes>
          <Route path={'/'} element={<h1>Home</h1>}/>
          <Route path={'/auth'} element={<Auth/>}/>
          <Route path={'/rated'} element={<h1>Rated</h1>}/>
        </Routes>
      </Router>
  )
}

export default App
