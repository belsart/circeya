const images = [];

(function getImages() {
    for (let i = 1; i <= 4; i++) {
        images.push({
            image: `/public/images/image${i}.jpg`,
            id: `${i}`,
        });
    }
})();

export default images;
