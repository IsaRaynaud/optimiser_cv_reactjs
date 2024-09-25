import React from "react";
import { Helmet } from 'react-helmet';
import '../App' ;

import FreshFoodImg from '../images/realisations/fresh-food.jpg';
import AkiraImg from '../images/realisations/restaurant-japonais.jpg';
import BienEtreImg from '../images/realisations/espace-bien-etre.jpg'

const Realisations = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Portfolio de John Doe, développeur web full stack" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <img className="banner mb-5" alt="bannière" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-uppercase">Portfolio</h1>
                        <p className="text-center">Voici quelques-une de mes réalisations.</p>
                        <div className="col-2 mx-auto">
                            <div className=" title-line mb-5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-evenly mb-3">
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="FreshFood">                
                        <img src={FreshFoodImg} className="card-img-top" alt="Illustration du site Fresh Food"></img>
                        <div className="card-body">
                            <h2 className="h3 text-center pt-2">Fresh Food</h2>
                            <p className="text-center">Réalisation d'un site avec commande en ligne.</p>
                            <div className="d-flex justify-content-center">
                                <a href="https://freshfood.com" className="btn btn-outline-primary mx-auto" role="button">Voir</a>
                            </div>
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item">Site réalisé avec PHP et MySQL</li>
                        </ul>                        
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="RestaurantAkira">                
                        <img src={AkiraImg} className="card-img-top" alt="Illustration du site Restaurant Akira"></img>
                        <div className="card-body">
                            <h2 className="h3 text-center pt-2">Restaurant Akira</h2>
                            <p className="text-center">Réalisation d'un site vitrine.</p>
                            <div className="d-flex justify-content-center">
                                <a href="#" className="btn btn-outline-primary" role="button">Voir</a>
                            </div>
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item">Site réalisé avec Wordpress</li>
                        </ul>                        
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="EspaceBienEtre">                
                        <img src={BienEtreImg} className="card-img-top" alt="Illustration du site Espace bien-être"></img>
                        <div className="card-body">
                            <h2 className="h3 text-center pt-2">Espace bien-être</h2>
                            <p className="text-center">Réalisation d'un site vitrine pour un praticien du bien-être.</p>
                            <div className="d-flex justify-content-center">
                                <a href="#" className="btn btn-outline-primary" role="button">Voir</a>
                            </div>
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item">Site réalisé en HTML/CSS</li>
                        </ul>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisations ;