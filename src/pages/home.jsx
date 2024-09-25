import React from "react";
import { Helmet } from 'react-helmet';
import '../App';

import JohnDoeAbout from '../images/homepage/john-doe-about.jpg'

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Site de John Doe, développeur web full stack" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="container-fluid bg-img-section d-flex flex-column align-items-center justify-content-center mb-5">
                <h1 className="text-white text-center p-2 custom-h1">Bonjour, je suis John Doe</h1>
                <h2 className="text-white text-center p-2 custom-h2">Développeur web full stack</h2>
                <a href="#apropos" role="button" className="btn btn-primary btn-lg">En savoir plus</a>
            </div>
            <div className="container shadow p-3 mb-5 bg-body rounded" id="apropos">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="pb-1 mb-3 border-bottom border-primary" id="apropos">A propos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et dolor sed ex dignissim mollis sed ut ex. Vestibulum fermentum suscipit risus vel eleifend. Cras pellentesque dignissim ex non aliquam. Pellentesque sit amet diam id odio consequat vestibulum. Etiam velit eros, dapibus eget nisi a, accumsan luctus mi. Proin ultricies facilisis consectetur. Cras quis ex hendrerit, finibus turpis quis, suscipit justo. Maecenas porttitor libero eget ornare vulputate. Nulla sit amet orci tortor. Sed lacus ante, maximus sit amet urna eget, cursus consectetur felis. Nam imperdiet tortor non enim accumsan dictum. Ut molestie tempor urna quis cursus. Morbi leo nisl, hendrerit ut congue a, faucibus tempor justo.</p>
                        <p>Duis sit amet purus et ligula sollicitudin accumsan. Curabitur arcu mi, feugiat sit amet sollicitudin in, pellentesque id tortor. Curabitur pretium faucibus cursus. Etiam porttitor leo sit amet sollicitudin luctus. In sit amet fringilla lorem. Morbi sollicitudin tempus nulla, in dignissim massa. In hac habitasse platea dictumst. Morbi laoreet semper ante, eu sagittis lorem dictum in. Ut feugiat, felis consequat egestas consequat, urna neque dictum quam, et commodo leo felis sed ipsum. Mauris sagittis pellentesque tortor, non lobortis massa rhoncus vitae. Donec facilisis at nulla non dapibus. Donec suscipit turpis leo, at lacinia magna imperdiet quis. Phasellus eu molestie metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={JohnDoeAbout} alt="Portrait de John Doe" className="img-fluid"/>
                        <h3>Mes compétences</h3>
                        <p>HTML 5 90 %</p>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-3">CSS 80 %</p>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-3">JAVASCRIPT 70 %</p>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-3">PHP 60 %</p>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-label="Succes example" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-3">REACT 50 %</p>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" aria-label="Primary example" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home ;