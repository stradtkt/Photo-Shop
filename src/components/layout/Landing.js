import React from 'react';

const Landing = () => {
    const landingImages = [
        {
            id: 1,
            img: './../../img/puppy-yellow.jpeg',
            alt: 'Yellow Lab'
        },
        {
            id: 2,
            img: './../../img/puppy-golden.jpeg',
            alt: 'Golden'
        },
        {
            id: 3,
            img: './../../img/puppy-oreo.jpeg',
            alt: 'Yellow Lab'
        },
        {
            id: 4,
            img: './../../img/puppy-blink.jpeg',
            alt: 'Yellow Lab'
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div class="jumbotron">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                {landingImages.map((image) => (
                                    <div class="carousel-item">
                                        <img src={image.img} class="d-block w-100" alt={image.alt}/>
                                    </div>
                                ))}
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
