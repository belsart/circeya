import slide1 from '/src/assets/slider/slide1.jpg';
import slide2 from '/src/assets/slider/slide2.jpg';
import slide3 from '/src/assets/slider/slide3.jpg';
import slide4 from '/src/assets/slider/slide4.jpg';
import slide5 from '/src/assets/slider/slide5.jpg';
import slide6 from '/src/assets/slider/slide6.jpg';
import slide7 from '/src/assets/slider/slide7.jpg';
import slide8 from '/src/assets/slider/slide8.jpg';

const slides = [
    { image: slide1, id: 1 },
    { image: slide2, id: 2 },
    { image: slide3, id: 3 },
    { image: slide4, id: 4 },
    { image: slide5, id: 5 },
    { image: slide6, id: 6 },
    { image: slide7, id: 7 },
    { image: slide8, id: 8 },
];

console.log(slides[0]);

// (function getSlides() {
//     for (let i = 1; i <= 8; i++) {
//         slides.push({
//             image: `/public/slider/slide${i}.jpg`,
//             id: `${i}`,
//         });
//     }
// })();

export default slides;
