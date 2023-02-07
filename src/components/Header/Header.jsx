import logo from '../../assets/logo.svg';
import phone from '../../assets/phone.svg';
import data from '../../data/data';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="logo" />
                <p className={styles.phone}>{data.phone}</p>
                <img className={styles.phoneIcon} src={phone} alt="icon" />
            </div>
        </header>
    );
};
