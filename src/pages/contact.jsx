import React from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import '../App' ;

const Contact = () => {
    return (
        <div>
          <Helmet>
                <meta name="description" content="Contacter John Doe, développeur web full stack" />
                <meta name="robots" content="index, follow" />
          </Helmet>
          <div className="container-fluid bg-img-contact py-5">
            <div className="card text-bg-light p-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-uppercase">Me contacter</h1>
                        <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div className="col-2 mx-auto">
                            <div className=" title-line mb-5"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Formulaire de contact</h2>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Votre nom" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Votre adresse email" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Votre numéro de téléphone" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Objet" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Votre message"></textarea>
                            </div>
                            <div className="d-flex justify-content-center">                       
                                <button type="submit" className="btn btn-custom">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h2>Mes coordonnées</h2>
                        <address>
                            <FontAwesomeIcon icon={faLocationDot} size="xs" /> 40 rue Laure Diebold<br/>
                            69009 LYON, FRANCE<br/>
                            <FontAwesomeIcon icon={faMobileScreenButton} size="xs" /> 06.20.30.40.50<br/>
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5783.8734420880455!2d4.793696305917104!3d45.77739464794713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1727185770813!5m2!1sfr!2sfr" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
          </div>
        </div>
    )
}

export default Contact;