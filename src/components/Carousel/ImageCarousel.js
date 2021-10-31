import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
const ImageCarousel = () => {
    return (
        <Carousel>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image5} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default ImageCarousel
