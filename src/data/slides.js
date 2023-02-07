const slides = [];

(function getSlides() {
    for (let i = 1; i <= 8; i++) {
        slides.push({
            image: `/public/slider/slide${i}.jpg`,
            id: `${i}`,
        });
    }
})();

export default slides;
