import image1 from '/src/assets/images/image1.jpg';
import image2 from '/src/assets/images/image2.jpg';
import image3 from '/src/assets/images/image3.jpg';
import image4 from '/src/assets/images/image4.jpg';

const images = [
    { image: image1, id: 1 },
    { image: image2, id: 2 },
    { image: image3, id: 3 },
    { image: image4, id: 4 },
];

// (function getImages() {
//     for (let i = 1; i <= 4; i++) {
//         images.push({
//             image: `/public/images/image${i}.jpg`,
//             id: `${i}`,
//         });
//     }
// })();

export default images;
