import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
