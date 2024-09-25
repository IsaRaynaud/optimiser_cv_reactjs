import React from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../App' ;


const Mentionslegales = () => {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <img className="banner mb-5" alt="bannière" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-uppercase">Mentions légales</h1>
                        <div className="col-2 mx-auto">
                            <div className=" title-line mb-5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h3>John Doe</h3>
                            <address>
                                <FontAwesomeIcon icon={faLocationDot} size="xs" /> 40 rue Laure Diebold<br/>
                                69009 LYON, FRANCE<br/>
                                <FontAwesomeIcon icon={faMobileScreenButton} size="xs" /> <a href="tel:+33620304050">06 20 30 40 50</a>
                                <br/>
                                <FontAwesomeIcon icon={faEnvelope} size="xs" /> <a href="mailto:john.doe@example.com">john.doe@example.com</a>

                            </address>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h3>Always Data</h3>
                            <address>
                                <p>91 rue du Faubourg Saint-Honoré<br/>
                                75008 PARIS, FRANCE</p>
                                <p><FontAwesomeIcon icon={faGlobe} size="xs" /> <a href="https://www.alwaysdata.com/" target="_blank">www.alwaysdata.com</a></p>
                            </address>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Site développé par Isabelle Raynaud.</p>
                            <p>Les images, libres de droit, sont issues du site <a href="https://pixabay.com/" target="_blank">Pixabay</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentionslegales ;