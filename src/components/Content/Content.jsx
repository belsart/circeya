import data from '../../data/data';
import styles from './content.module.scss';

const Content = ({ image1, image2 }) => {
    return (
        <section className={styles.contentBox}>
            <h1 className={styles.h1}>{data.h1}</h1>

            <img className={styles.image1} src={image1} alt="image" />

            <div className={styles.textBox1}>
                <h2 className={styles.h2}>{data.title}</h2>
                <p className={styles.text}>{data.text}</p>
            </div>

            <div className={styles.textBox2}>
                <h2 className={styles.h2}>{data.title}</h2>
                <p className={styles.text}>{data.text}</p>
            </div>

            <img className={styles.image2} src={image2} alt="image" />
        </section>
    );
};

export default Content;
