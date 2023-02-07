import styles from './slider.module.scss';
import slides from '../../data/slides';
import data from './../../data/data';
import Horizontable from './../../components/Horizontable/Horizontable';

const Slider = () => {
    return (
        <section className={styles.slider} id="slider">
            <h2 className={styles.h2}>{data.h2}</h2>

            <Horizontable>
                <div className={styles.slideBox}>
                    {slides.map((item) => {
                        return (
                            <img
                                className={styles.slide}
                                key={item.id}
                                src={item.image}
                                alt="images"
                            />
                        );
                    })}
                </div>
            </Horizontable>
        </section>
    );
};

export default Slider;
