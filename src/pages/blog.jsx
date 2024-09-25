import React from "react";
import { Helmet } from 'react-helmet';
import '../App' ;

import CoderImg from '../images/blog/coder.jpg';
import CroissanceImg from '../images/blog/croissance.jpg';
import GoogleImg from '../images/blog/google.jpg';
import ScreensImg from '../images/blog/screens.jpg';
import SeoImg from '../images/blog/seo.jpg';
import TechnosImg from '../images/blog/technos.png';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Blog de John Doe sur le développement web" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <img className="banner mb-5" alt="bannière" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-uppercase">Blog</h1>
                        <p className="text-center">Retrouvez ici quelques articles sur le développement web.</p>
                        <div className="col-2 mx-auto">
                            <div className=" title-line mb-5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-evenly mb-3">
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="coder">                
                        <img src={CoderImg} className="card-img-top" alt="Illustration de l'article"></img>
                        <div className="card-body">
                            <h2 className="h3 pt-2">Coder son site en HTML/CSS</h2>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary" role="button">Lire la suite</a>
                        </div>
                        <div class="card-footer">Publié le 22 août 2022
                        </div>                       
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="vendre">                
                        <img src={CroissanceImg} className="card-img-top" alt="Illustration de l'article"></img>
                        <div className="card-body">
                            <h2 className="h3 pt-2">Vendre ses produits sur le web</h2>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary" role="button">Lire la suite</a>
                        </div>
                        <div class="card-footer">Publié le 20 août 2022
                        </div>                        
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="google">                
                        <img src={GoogleImg} className="card-img-top" alt="Illustration de l'article"></img>
                        <div className="card-body">
                            <h2 className="h3 pt-2">Se positionner sur Google</h2>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary" role="button">Lire la suite</a>
                        </div>
                        <div class="card-footer">Publié le 1 août 2022
                        </div>                       
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="responsive">                
                        <img src={ScreensImg} className="card-img-top" alt="Illustration de l'article"></img>
                        <div className="card-body">
                            <h2 className="h3 pt-2">Coder en responsive design</h2>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary" role="button">Lire la suite</a>
                        </div>
                        <div class="card-footer">Publié le 31 juillet 2022
                        </div>                        
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="seo">                
                        <img src={SeoImg} className="card-img-top" alt="Illustration de l'article"></img>
                        <div className="card-body">
                            <h2 className="h3 pt-2">Techniques de référencements</h2>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary" role="button">Lire la suite</a>
                        </div>
                        <div class="card-footer">Publié le 30 juillet 2022
                        </div>                      
                    </div>
                    <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column m-2" id="apprendre">                
                        <img src={TechnosImg} className="card-img-top" alt="Illustration de l'article"></img>
                        <div className="card-body">
                            <h2 className="h3 pt-2">Apprendre à coder</h2>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary" role="button">Lire la suite</a>
                        </div>
                        <div class="card-footer">Publié le 12 juillet 2022
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;