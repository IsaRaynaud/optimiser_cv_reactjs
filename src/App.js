import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCopyright, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/home';
import Services from './pages/services';
import Realisations from "./pages/realisations";
import Blog from "./pages/blog";
import Mentionslegales from "./pages/mentionslegales";
import Contact from "./pages/contact";
import ApiGithub from "./pages/apiGithub";

import Copyright from "./Component/copyright";


function App() {
  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
        <div className="container">
          <Link className="navbar-brand" to="/">John Doe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Réalisations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Me contacter</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Realisations/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/mentionslegales" element={<Mentionslegales/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/apigithub" element={<ApiGithub/>}></Route>
      </Routes>
      </header>
       {/* Intégrer les pages */}
      <footer>
        <div className="container-fluid text-bg-light p-3">
          <div className="row">
            <article className="col-md-6 col-lg-3">
              <p className="fs-4 fw-bolder">Jonh Doe</p>
              <p>40 rue Laure Diebold<br/>
              69009 LYON, FRANCE<br/>
              Tel. : 06.20.30.40.50</p>
              <div className="d-flex justify-content-evenly">
              <a href="https://github.com/github-john-doe" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
              <a href="https://x.com/johndoe" target="_blank"><FontAwesomeIcon icon={faXTwitter} size="lg" /></a>
              <a href="https://www.linkedin.com/company/john-doe/?originalSubdomain=uk" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
              </div>
            </article>
            <article className="col-md-6 col-lg-3">
              <p className="fs-4 fw-bolder">Liens utiles</p>
              <p>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/"> Accueil</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/"> A propos</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/services"> Services</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/contact"> Me contacter</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/mentionslegales"> Mentions légales</Link>
                <br/>
              </p>
            </article>
            <article className="col-md-6 col-lg-3">
              <p className="fs-4 fw-bolder">Mes dernières réalisations</p>
              <p>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/portfolio#FreshFood"> Fresh food</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/portfolio#RestaurantAkira"> Restaurant Akira</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/portfolio#EspaceBienEtre"> Espace bien-être</Link>
                <br/>
              </p>
            </article>
            <article className="col-md-6 col-lg-3">
              <p className="fs-4 fw-bolder">Mes derniers articles</p>
              <p>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/blog#coder"> Coder son site en HTML/CSS</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/blog#vendre"> Vendre ses produits sur le web</Link>
                <br/>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0d6efd",}} />
                <Link aria-current="page" to="/blog#google"> Se positionner sur Google</Link>
                <br/>
              </p>
            </article>
          </div>
        </div>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
