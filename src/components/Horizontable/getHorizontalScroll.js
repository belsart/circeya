import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getHorizontalScroll = (ref) => {
    useEffect(() => {
        const slideBox = ref.current;

        const sliderBlock = document.getElementById('slider');

        const paddingLeft = document
            .getElementById('horizontable')
            .getBoundingClientRect().left;

        gsap.fromTo(
            slideBox,
            {
                x: 0,
            },
            {
                x: () =>
                    -(
                        slideBox.scrollWidth -
                        window.innerWidth +
                        paddingLeft * 2
                    ),
                ease: 'none',
                scrollTrigger: {
                    trigger: sliderBlock,
                    start: `center center+=70px`,
                    end: () =>
                        '+=' + (slideBox.scrollWidth - window.innerWidth),
                    pin: sliderBlock,
                    invalidateOnRefresh: true,
                    scrub: 1,
                },
            }
        );
    }, []);
};

export default getHorizontalScroll;
