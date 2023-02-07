import data from '../../data/data';
import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.footerText}>{data.footerText}</span>
        </footer>
    );
};
