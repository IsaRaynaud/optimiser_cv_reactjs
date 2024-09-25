import React from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import '../App' ;

const Services = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Services proposés par John Doe, développeur web full stack" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <img className="banner mb-5" alt="bannière" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-uppercase">Mon offre de services</h1>
                        <p className="text-center">Voici les prestations sur lesquelles je peux intervenir.</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <div className=" title-line mb-5"></div>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-evenly">
                <div className="shadow p-3 m-3 bg-body rounded col-12 col-md-3 d-flex flex-column">
                    <FontAwesomeIcon icon={faDesktop} size="xl" className="custom-icon pt-5" />
                    <div className="card-body">
                        <h2 className="h3 text-center text-uppercase pt-3">UX Design</h2>
                        <p className="text-center">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </div>
                </div>
                <div className="shadow p-3 m-3 bg-body rounded col-12 col-md-3 d-flex flex-column">
                <FontAwesomeIcon icon={faFileCode} size="xl" className="custom-icon pt-5" />
                    <div className="card-body">
                        <h2 className="h3 text-center text-uppercase pt-3">Développement web</h2>
                        <p className="text-center">Le <strong>développement de ste web</strong> repose sur l'utilisation des langages HTML, CSS, Javascript et PHP.</p>
                    </div>
                </div>
                <div className="shadow p-3 m-3 bg-body rounded col-12 col-md-3 d-flex flex-column">
                <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="xl" className="custom-icon pt-5" />
                    <div className="card-body">
                        <h2 className="h3 text-center text-uppercase pt-3">Référencement</h2>
                        <p className="text-center">Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Services ;


