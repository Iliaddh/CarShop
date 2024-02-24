import React from 'react';
import styles from "./Layout.module.css";
import Link from 'next/link';
function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <Link href="/">
            <h2>CARSHOP</h2>
            <p>Choose and Buy your car</p>
        </Link>
    </header>
        <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
        CarShop | <a href="https://hemmatjoo.com">Portfolio</a> &copy;
    </footer>
    </>
  )
}

export default Layout