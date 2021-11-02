import React, { useState, useEffect } from "react"
// import React, { useState, useEffect } from "react"
// import { Carousel } from "react-bootstrap" // option 2
import SimpleImageSlider from "react-simple-image-slider"
import slide1 from "../img/slider7.jpg"
import slide2 from "../img/slider6.jpg"
import slide3 from "../img/slider3.jpg"
import slide4 from "../img/slide12.jpg"
import slide5 from "../img/slider5.jpg"
import slide6 from "../img/slide13.jpg"
import slide7 from "../img/reactBooks.jpg"
import slide8 from "../img/react-resume.png"

// Slider with my projects
export default function Slider() {
  
  const images = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
    { url: slide5 },
    { url: slide6 },
    { url: slide7 },
    { url: slide8 },
  ];

  return (
    <>
      <div className="slider">
        <h1>Examples of my work</h1>
          <SimpleImageSlider
            className="slide"
            width={`100%`}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
      </div>
    </>
  );
}

// option 2

// <Carousel>
//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={slider7} alt="First slide" />
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
//             <h3>Web development</h3>
//             <p>Slide 1</p>
//         </Carousel.Caption>
//     </Carousel.Item>

//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={slider6} alt="Second slide"/>
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
//             <h3>Web development</h3>
//             <p>Slide 2</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={slider3} alt="Third slide" />
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
//             <h3>Web development</h3>
//             <p>Slide 3</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={slide12} alt="Fourth slide" />
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
//             <h3 >Web development</h3>
//             <p >Slide 4</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={slider5} alt="Fifth slide" />
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
//             <h3>Web development</h3>
//             <p>Slide 5</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={slider13} alt="Sixs slide" />
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
//             <h3>Web development</h3>
//             <p>Slide 6</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{'height':'90vh'}}>
//         <img className="d-block w-100" src={reactBooks} alt="Sevens slide" />
//         <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'left':'25px', 'paddingLeft':'10px', 'width':'300px', 'height':'100px', 'textAlign':'left'}}>
//             <h3>Web development</h3>
//             <p>Slide 7</p>
//         </Carousel.Caption>
//     </Carousel.Item>
// </Carousel>
