import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import './index.css'


function App() {
  return (
      <Router>
          <div>
              <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                      <a className="navbar-brand" href="/">My Portfolio</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav ms-auto">
                              <li className="nav-item me-3">
                                  <Link className="nav-link" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link me-3" to="/about">About</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link me-3" to="/projects">Projects</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link me-3" to="/contact">Contact</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <div className="container mt-4">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;