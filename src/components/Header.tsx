import styles from './Header.module.css';
import myLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.Header}>
            <img src={myLogo} alt="my Logo" />
            <strong>My Feed</strong>
        </header>
    );
}