import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h1 className={styles.header_title}>User To-Do Table</h1>
      <p className={styles.header_subtitle}>User task table for effective planning.</p>
    </header>
  );
}

export default Header;
