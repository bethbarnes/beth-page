import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'
import SingleProject from './SingleProject'
import ProjectSlide from './ProjectSlide'

export { Home, About, Projects, Navbar, Contact, SingleProject, ProjectSlide }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


